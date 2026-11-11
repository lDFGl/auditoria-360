const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "../www");
const mime = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".png": "image/png", ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json", ".woff2": "font/woff2"
};
const scoredModules = ["auditoria", "engenharia", "qualidade", "almoxarifado", "sesmt"];

test("Auditoria 360: testes funcionais de todos os módulos e fluxos principais", { timeout: 300000 }, async t => {
  const server = http.createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const relative = url === "/" ? "index.html" : url.replace(/^\/+/, "");
    const file = path.resolve(root, relative);
    if (!file.startsWith(root + path.sep) && file !== path.join(root, "index.html")) {
      res.writeHead(403).end(); return;
    }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404).end(); return; }
      res.writeHead(200, { "content-type": mime[path.extname(file)] || "application/octet-stream" });
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const browser = await chromium.launch({ headless: true });

  async function newPage() {
    const page = await browser.newPage();
    page.setDefaultTimeout(10000);
    const pageErrors = [];
    page.on("pageerror", error => pageErrors.push(error.stack || error.message));
    page.on("dialog", dialog => dialog.accept());
    await page.goto(`http://127.0.0.1:${address.port}/`);
    await page.evaluate(() => localStorage.clear());
    return { page, pageErrors };
  }
  async function openModule(page, id, pageErrors = []) {
    try {
      await page.evaluate(async sectorId => { await openSector(sectorId); }, id);
      await page.waitForFunction(sectorId => !document.querySelector("#inspectionView").classList.contains("hidden") && document.querySelector("#sectorTitle").textContent.trim() !== "", id);
    } catch (error) { throw new Error("Módulo " + id + " não abriu. Erros de página: " + pageErrors.join(" | ") + ". " + error.message); }
  }
  async function fillIdentification(page, moradia = false) {
    await page.locator('[name="obra"]').fill("Obra de Teste Funcional");
    await page.locator('[name="empresa"]').fill("FG Empreendimentos");
    await page.locator('[name="data"]').fill("2026-11-11");
    await page.locator('[name="responsavel"]').fill("Auditor de Teste");
    await page.locator('[name="local"]').fill("Torre A - Pavimento 10");
    if (moradia) await page.locator('[name="colaborador"]').fill("Colaborador de Teste");
  }

  try {
    await t.test("Inicialização: painel, seis módulos e navegação entre painel e histórico", async () => {
      const { page, pageErrors } = await newPage();
      assert.equal(await page.locator("[data-sector]").count(), 6);
      for (const id of [...scoredModules, "fg-moradia"]) {
        assert.equal(await page.locator(`[data-sector="${id}"]`).count(), 1, "card " + id);
      }
      await page.locator("#navHistory").evaluate(el => el.click());
      await page.waitForFunction(() => !document.querySelector("#historyView").classList.contains("hidden"));
      await page.locator("#historyBack").evaluate(el => el.click());
      await page.waitForFunction(() => !document.querySelector("#homeView").classList.contains("hidden") && document.querySelector("#historyView").classList.contains("hidden"));
      assert.deepEqual(pageErrors, []);
      await page.close();
    });

    for (const id of scoredModules) {
      await t.test(`Módulo ${id}: abertura, 20 critérios, cinco classificações, nota e plano de ação`, async () => {
        const { page, pageErrors } = await newPage();
        await openModule(page, id, pageErrors);
        await fillIdentification(page);
        assert.equal(await page.locator("[data-q]").count(), 20);
        const ratings = ["IM", "OM", "PI", "NI", "NA"];
        for (let i = 0; i < 20; i++) {
          await page.locator(`[data-q="${i}"] [data-rate="${ratings[i % ratings.length]}"]`).click();
        }
        assert.equal((await page.locator("#scoreValue").textContent()).trim(), "66,25%");
        assert.match(await page.locator("#scoreCaption").textContent(), /16 de 16 aplicáveis/);
        assert.equal(await page.locator('[data-action-plan]:not(.hidden)').count(), 8);
        const plan = page.locator('[data-q="2"] [data-action-plan]');
        await plan.locator('[data-action-field="criticality"]').selectOption("Alta");
        await plan.locator('[data-action-field="responsible"]').fill("Engenharia");
        await plan.locator('[data-action-field="deadline"]').fill("2026-11-20");
        await plan.locator('[data-action-field="action"]').fill("Corrigir e reinspecionar");
        await plan.locator('[data-action-field="evidence"]').fill("Relatório fotográfico");
        await plan.locator('[data-action-field="status"]').selectOption("Em andamento");
        const persisted = await page.evaluate(() => ({
          ratings: Object.keys(state.ratings).length,
          plan: state.actionPlans[2],
          selected: document.querySelector('[data-q="2"] [data-rate="PI"]').getAttribute("aria-pressed")
        }));
        assert.equal(persisted.ratings, 20);
        assert.equal(persisted.plan.criticality, "Alta");
        assert.equal(persisted.plan.responsible, "Engenharia");
        assert.equal(persisted.plan.action, "Corrigir e reinspecionar");
        assert.equal(persisted.selected, "true");
        assert.deepEqual(pageErrors, []);
        await page.close();
      });
    }

    await t.test("FG Moradia: vistoria qualitativa, colaborador obrigatório, status e quantidade de quartos", async () => {
      const { page, pageErrors } = await newPage();
      await openModule(page, "fg-moradia", pageErrors);
      await fillIdentification(page, true);
      assert.equal(await page.locator("[data-q]").count(), 38);
      assert.equal(await page.locator("#scoreValue").evaluate(el => el.closest(".score-card").classList.contains("hidden")), true);
      assert.match(await page.locator("#sectorCount").textContent(), /sem pontuação/);
      await page.locator('[data-q="0"] [data-field="status"]').selectOption("Conforme");
      await page.locator('[data-q="1"] [data-field="status"]').selectOption("Ajuste necessário");
      await page.locator('[data-q="2"] [data-field="status"]').selectOption("Não aplicável");
      assert.match(await page.locator("#scoreCaption").textContent(), /3 de 38 itens registrados/);
      await page.locator("#roomCount").selectOption("2");
      assert.equal(await page.locator("[data-q]").count(), 43);
      assert.equal(await page.locator('[data-q="0"] [data-field="status"]').inputValue(), "");
      assert.equal(await page.locator('[name="colaborador"]').isDisabled(), false);
      assert.deepEqual(pageErrors, []);
      await page.close();
    });

    await t.test("Rascunho: salvar, sair, localizar e recuperar dados e classificações", async () => {
      const { page, pageErrors } = await newPage();
      await openModule(page, "engenharia", pageErrors);
      await fillIdentification(page);
      await page.locator('[data-q="0"] [data-rate="NI"]').click();
      await page.locator('[data-q="0"] [data-field="obs"]').fill("Fissura identificada para acompanhamento.");
      await page.locator("#saveDraft").click();
      await page.locator("#backHome").click();
      await page.locator('[data-sector="engenharia"]').click();
      await page.locator("#draftDialog[open]").waitFor();
      await page.locator('#draftOptions [data-choice="continue"]').click();
      await page.locator("#inspectionView").waitFor({ state: "visible" });
      assert.equal(await page.locator('[name="obra"]').inputValue(), "Obra de Teste Funcional");
      assert.equal(await page.locator('[data-q="0"] [data-field="obs"]').inputValue(), "Fissura identificada para acompanhamento.");
      assert.equal(await page.locator('[data-q="0"] [data-rate="NI"]').getAttribute("aria-pressed"), "true");
      assert.deepEqual(pageErrors, []);
      await page.close();
    });

    await t.test("Fluxo completo: validar formulário, gerar prévia, registrar histórico e finalizar os dois PDFs", async () => {
      const { page, pageErrors } = await newPage();
      await openModule(page, "qualidade", pageErrors);
      await fillIdentification(page);
      for (let i = 0; i < 20; i++) {
        await page.locator(`[data-q="${i}"] [data-rate="${i % 5 === 0 ? "NI" : "IM"}"]`).click();
      }
      await page.locator('[name="consideracoes"]').fill("Teste funcional de geração e finalização do relatório.");
      await page.locator('#inspectionForm button[type="submit"]').click();
      await page.locator("#reportViewer:not([hidden])").waitFor();
      assert.match(await page.locator("#reportContent").textContent(), /Obra de Teste Funcional/);
      const historyBefore = await page.evaluate(() => readHistory().length);
      assert.equal(historyBefore, 1);
      await page.locator("#reportFinalize").click();
      await page.locator("#homeView").waitFor({ state: "visible", timeout: 60000 });
      const result = await page.evaluate(async () => {
        const records = readHistory();
        const record = records[0];
        const complete = await readReportPdf(record.id, "complete");
        const executive = await readReportPdf(record.id, "executive");
        return {
          status: record.status,
          code: record.reportCode,
          complete: complete?.blob?.type,
          executive: executive?.blob?.type,
          draft: getDraft(record.id)?.status
        };
      });
      assert.equal(result.status, "finalizado");
      assert.match(result.code, /^QUA-\d{3}\/2026$/);
      assert.equal(result.complete, "application/pdf");
      assert.equal(result.executive, "application/pdf");
      assert.equal(result.draft, "finalizado");
      await page.locator("#navHistory").evaluate(el => el.click());
      await page.waitForFunction(() => !document.querySelector("#historyView").classList.contains("hidden"));
      assert.equal(await page.locator("#historyList [data-history-open]").count(), 1);
      await page.locator("#historyList [data-history-open]").click();
      await page.locator("#historyDetailDialog[open]").waitFor();
      assert.match(await page.locator("#historyDetailContent").textContent(), /Obra de Teste Funcional/);
      await page.locator("#historyDetailClose").click();
      assert.deepEqual(pageErrors, []);
      await page.close();
    });

    await t.test("Filtros do painel gerencial e histórico refletem os registros gravados", async () => {
      const { page, pageErrors } = await newPage();
      await page.evaluate(() => {
        localStorage.setItem("auditoria360-inspection-history-v1", JSON.stringify([
          { id: "t1", sector: "engenharia", sectorName: "Engenharia", mode: "scored", status: "finalizado", completedAt: "2026-11-10T12:00:00.000Z", conformity: 80, total: 20, im: 10, om: 2, pi: 2, ni: 2, na: 4, pending: 0, obra: "Obra Alfa", responsavel: "Auditor A", actionPlans: {} },
          { id: "t2", sector: "fg-moradia", sectorName: "FG Moradia", mode: "moradia", status: "finalizado", completedAt: "2026-11-10T12:00:00.000Z", total: 38, conforme: 30, ajuste: 8, pending: 0, obra: "Obra Beta", responsavel: "Auditor B", actionPlans: {} }
        ]));
        renderHome();
      });
      await page.locator("#dashboardMetrics").waitFor();
      assert.match(await page.locator("#dashboardMetrics").textContent(), /2/);
      await page.locator("#dashboardModule").selectOption("engenharia");
      assert.match(await page.locator("#dashboardNotice").textContent(), /1 inspeção/);
      await page.locator("#navHistory").click();
      await page.locator("#historyModule").selectOption("fg-moradia");
      assert.equal(await page.locator("#historyList .history-card").count(), 1);
      assert.match(await page.locator("#historyList").textContent(), /Obra Beta/);
      assert.deepEqual(pageErrors, []);
      await page.close();
    });
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
});
