const test=require("node:test"),assert=require("node:assert/strict"),fs=require("node:fs");
const html=fs.readFileSync("www/index.html","utf8");
const app=fs.readFileSync("www/js/app.js","utf8");
const css=fs.readFileSync("www/css/styles.css","utf8");
test("campo colaborador inicia desativado e não bloqueia módulos ocultos",()=>{
 assert.match(html,/<input name="colaborador" disabled/);
 assert.doesNotMatch(html,/<input name="colaborador"[^>]*required/);
 assert.match(app,/collaboratorInput\.disabled=!isMoradia/);
 assert.match(app,/collaboratorInput\.required=isMoradia/);
});
test("ao voltar à tela inicial, colaborador deixa de participar da validação",()=>{
 assert.match(app,/function renderHome\(\)\{\s*const collaboratorInput=\$\(\x27input\[name="colaborador"\]\x27\);\s*if\(collaboratorInput\)\{collaboratorInput\.required=false;collaboratorInput\.disabled=true;\}/);
});
test("impressão aguarda recursos do relatório antes de abrir diálogo do navegador",()=>{
 assert.match(app,/waitForReportAssets\(\$\("#reportContent"\)\)/);
 assert.match(app,/requestAnimationFrame\(\(\)=>window\.print\(\)\)/);
});

test("pré-visualização oferece ação explícita de finalizar relatório",()=>{
 assert.match(html,/id="reportFinalize">Finalizar e gerar PDF/);
 assert.match(app,/\$\("#reportFinalize"\)\.addEventListener\("click"/);
 assert.match(app,/saveCurrentDraft\("finalizado",finalizedAt\)/);
 assert.match(app,/updateHistoryStatus\(state\.inspectionId,"finalizado",finalizedAt\)/);
});
test("reabertura de relatório finalizado exige confirmação",()=>{
 assert.match(app,/Deseja reabrir a edição\?/);
 assert.match(app,/updateHistoryStatus\(d\.inspectionId,"reaberto",d\.reopenedAt\)/);
});
test("logo do relatório usa apenas fundo institucional, sem moldura",()=>{
 assert.equal((app.match(/background:#135c6c;border:0;border-radius:0/g)||[]).length,2);
 assert.doesNotMatch(app,/background:#f1f5f5;border:1px solid #c8d8dc;border-left:5px solid #135c6c/);
});

test("classificações aparecem na ordem IM, OM, PI, NI e NA",()=>{
 assert.match(app,/\[\["IM","im"\],\["OM","om"\],\["PI","pi"\],\["NI","ni"\],\["NA","na"\]\]/);
 assert.match(app,/const order=\["IM","OM","PI","NI","NA"\]/);
});
test("cores institucionais exatas das classificações",()=>{
 for(const color of ["#00B050","#4EA72E","#FFC000","#FF0000","#00B0F0"])assert.ok(css.includes(color),color);
});

test("relatório aplica pontuação ponderada e exibe duas casas decimais",()=>{
 assert.ok(app.includes("scoreResult.pointsTotal.toFixed(2)"));
 assert.ok(app.includes("score.toFixed(2)"));
 assert.ok(app.includes("pi*0.65"));
});

test("legenda apresenta as cinco classificações em ordem independente",()=>{
 assert.ok(html.includes('<span class="im">IM</span><span class="om">OM</span><span class="pi">PI</span><span class="ni">NI</span><span class="na">NA</span>'));
});

test("FG Moradia captura a nova quantidade antes de reconstruir o checklist",()=>{
 assert.match(app,/const nextRoomCount=Number\(e\.target\.value\)/);
 assert.match(app,/renderMoradia\(nextRoomCount\)/);
 assert.doesNotMatch(app,/\$\("#inspectionForm"\)\.reset\(\);renderMoradia/);
});
test("FG Moradia preserva dados gerais e só reinicia checklist e evidências",()=>{
 assert.match(app,/await clearSectorPhotos\(previousId\)/);
 assert.match(app,/state\.files=\{\};state\.ratings=\{\};state\.inspectionId=newInspectionId\(\)/);
 assert.doesNotMatch(app,/catch\(err\)\{\}state\.files=\{\};state\.ratings=\{\}/);
});

test("evidências oferecem seleção de arquivo e captura direta pela câmera",()=>{
 assert.equal((app.match(/data-photo-action="file"/g)||[]).length,2);
 assert.equal((app.match(/data-photo-action="camera"/g)||[]).length,2);
 assert.equal((app.split('data-field="foto-camera" type="file" accept="image/*" multiple capture="environment" hidden').length-1),2);
 assert.match(app,/card\.querySelectorAll\("\[data-photo-action\]"\)/);
 assert.match(app,/input\.click\(\)/);
 assert.match(app,/inputs\.forEach\(input=>input\.addEventListener\("change"/);
 assert.match(css,/\.photo-controls\{display:grid;grid-template-columns:1fr 1fr/);
});


test("plano de ação é exibido somente para critérios PI e NI",()=>{
 assert.match(app,/const applicable=\["PI","NI"\]\.includes\(state\.ratings\[index\]\)/);
 assert.match(app,/data-action-plan/);
 assert.match(app,/syncActionPlanCard\(card,index\)/);
});
test("plano de ação registra responsável, prazo, ação, evidência e validação",()=>{
 for(const field of ["responsible","deadline","action","evidence","status","auditorNote"])assert.ok(app.includes('data-action-field="'+field+'"'),field);
 assert.match(app,/Validado \/ Encerrado/);
 assert.match(app,/Aguardando validação do auditor/);
});
test("plano de ação é preservado em rascunhos, retomada e integridade do relatório",()=>{
 assert.match(app,/actionPlans:state\.actionPlans/);
 assert.match(app,/state\.actionPlans=savedDraft\.actionPlans\|\|\{\}/);
 assert.match(app,/actionPlans:state\.actionPlans,gps:state\.gps/);
});
test("relatório apresenta quadro de plano de ação e sinaliza prazos vencidos",()=>{
 assert.match(app,/Plano de ação e acompanhamento/);
 assert.match(app,/actionPlanDisplayStatus\(p\)/);
 assert.match(app,/Prazo vencido/);
});


test("fase 2 exibe cobertura separada da conformidade e indicadores executivos de ações",()=>{assert.match(html,/Indicadores das inspeções/);assert.match(app,/Ações vencidas/);assert.match(app,/Críticos em aberto/);assert.match(app,/coverage=totalApplicable/);});
test("criticidade é registrada no plano PI/NI sem alterar a pontuação",()=>{assert.match(app,/data-action-field="criticality"/);assert.match(app,/Não definida.*Baixa.*Média.*Alta.*Crítica/);assert.match(app,/criticidade é definida pelo auditor e não altera a pontuação/);});
test("histórico de alterações do plano é registrado e incluído no relatório",()=>{assert.match(app,/function logActionPlanChange/);assert.match(app,/p\.history\.push/);assert.match(app,/Histórico de alterações do plano de ação/);assert.match(app,/actionHistoryRows/);});
test("dashboard consolida planos em aberto e atrasados",()=>{assert.match(app,/openActions=actionItems\.filter/);assert.match(app,/overdueActions=actionItems\.filter/);assert.match(app,/actionPlans:JSON\.parse\(JSON\.stringify\(state\.actionPlans/);});

test("fase 3 identifica o relatório com código legível e versão atualizada",()=>{assert.match(app,/function reportCodeForInspection/);assert.match(app,/reportCodeForInspection/);assert.match(app,/class="report-code"/);assert.match(app,/const APP_VERSION="2\.6\.0"/);});
test("PDF não gera folha exclusiva de referências ou índice de evidências",()=>{assert.doesNotMatch(app,/reportAppendicesMarkup|report-appendix|Índice de evidências fotográficas/);assert.doesNotMatch(app,/Referências técnicas e documentais citadas no checklist/);});
test("código e hash não são injetados no cabeçalho ou na legenda",()=>{assert.match(app,/function integrityFooterMarkup/);assert.match(app,/SHA-256/);assert.doesNotMatch(app,/meta\.prepend\(item\)|integrity\.prepend\(line\)/);});
test("fase 3 prepara paginação e rodapé de impressão",()=>{assert.match(app,/report-print-footer/);assert.match(app,/bottom:4mm/);assert.match(app,/report-print-footer/);assert.match(app,/page-break-inside:avoid/);});
test("fase 3 mantém aviso sobre limites do hash e responsabilidade técnica",()=>{assert.match(app,/SHA-256/);assert.match(app,/A análise, classificação, validação das evidências e aprovação permanecem sob responsabilidade/);});


test("código sequencial do relatório por módulo e ano é persistente",()=>{assert.match(app,/function reportCodeForInspection/);assert.match(app,/auditoria:"AI"/);assert.match(app,/engenharia:"ENG"/);assert.match(app,/"fg-moradia":"FG"/);assert.match(app,/auditoria360-sequence-/);assert.match(app,/reportCode:state\.reportCode/);});
test("arquivo local preserva download de PDFs anteriormente arquivados",()=>{assert.match(html,/id="finalizedReports"/);assert.match(app,/function readReportPdf/);assert.match(app,/function renderFinalizedReports/);assert.match(app,/data-pdf-download/);assert.match(app,/indexedDB\.open\(PHOTO_DB,3\)/);});
test("código de identificação aparece no cabeçalho dos dois modelos de relatório",()=>{assert.match(app,/class="report-code"/);assert.match(app,/esc\(state\.reportCode\)/);});


test("planos de ação são persistidos durante o preenchimento e vinculados ao histórico",()=>{assert.match(app,/function persistActionPlan/);assert.match(app,/addEventListener\("input"/);assert.match(app,/actionPlans:JSON\.parse\(JSON\.stringify\(state\.actionPlans/);assert.match(app,/ratings:\{\.\.\.state\.ratings\}/);});
test("histórico de inspeções é uma tela separada do dashboard",()=>{assert.match(html,/id="historyView"/);assert.match(html,/id="historyList"/);assert.doesNotMatch(html,/id="completedInspections"/);assert.match(app,/function renderHistoryList/);assert.match(app,/data-history-open/);assert.doesNotMatch(html,/id="actionPlanRegister"/);});
test("finalização permite escolher PDF Executivo ou Completo e arquiva o modelo selecionado",()=>{assert.match(html,/id="pdfModelChoice"/);assert.match(html,/PDF Executivo/);assert.match(html,/PDF Completo/);assert.match(app,/await generateAndArchivePdf\(state\.inspectionId,model\)/);assert.match(app,/saveCurrentDraft\("finalizado",finalizedAt\)/);assert.match(app,/updateHistoryStatus\(state\.inspectionId,"finalizado",finalizedAt\)/);assert.match(app,/saveReportPdf\(id,blob,filename,window\.__a360PdfModel\|\|"complete"\)/);assert.match(app,/function buildExecutiveReportHtml/);assert.doesNotMatch(app,/Preparando impressão/);});


test("o aplicativo carrega html2pdf e gera PDF em Blob para arquivamento local",()=>{assert.match(html,/js\/vendor\/html2pdf\.bundle\.min\.js/);assert.match(app,/window\.html2pdf\(\)/);assert.match(app,/outputPdf\("blob"\)/);assert.match(app,/indexedDB\.open\(PHOTO_DB,3\)/);assert.doesNotMatch(app,/Anexar \/ substituir PDF/);});

test("limpeza do painel remove também planos de inspeções finalizadas e atualiza os painéis relacionados",()=>{assert.doesNotMatch(app,/renderActionPlanRegister/);assert.match(app,/localStorage\.removeItem\(HISTORY_KEY\);renderDashboard\(\);renderFinalizedReports\(\);renderCompletedInspections\(\)/);});

test("planos PI/NI são consultados na inspeção aberta dentro do histórico",()=>{assert.match(html,/id="historyView"/);assert.match(html,/id="historyDetailDialog"/);assert.doesNotMatch(html,/id="actionPlanRegister"/);assert.match(app,/function showHistoryDetails/);assert.match(app,/data-history-photo-criterion/);assert.match(app,/history-plan/);});

test("registro isolado de planos e referências órfãs foram removidos",()=>{
 assert.doesNotMatch(app,/function renderActionPlanRegister/);
 assert.doesNotMatch(app,/\$\("#actionBreakdown"\)/);
 assert.doesNotMatch(app,/renderActionPlanRegister\(\)/);
});
test("histórico e índice de rascunhos não descartam silenciosamente registros antigos",()=>{
 assert.doesNotMatch(app,/history\.slice\(0,500\)/);
 assert.doesNotMatch(app,/a\.slice\(0,500\)/);
});
test("deploy executa validação e exige sucesso antes de montar artefato",()=>{
 const workflow=fs.readFileSync(".github/workflows/deploy-pages.yml","utf8");
 assert.match(workflow,/build:\s*\n\s+needs: validate/);
 assert.match(workflow,/html2pdf\.bundle\.min\.js/);
});


test("todos os módulos reexibem o botão Finalizar e gerar PDF ao abrir a prévia",()=>{assert.match(html,/id="reportFinalize">Finalizar e gerar PDF<\/button>/);assert.match(app,/finalizeButton\.hidden=false;finalizeButton\.style\.display="inline-flex";finalizeButton\.disabled=false;finalizeButton\.textContent="Finalizar e gerar PDF"/);assert.match(css,/#reportFinalize\{display:inline-flex!important/);});
test("finalização sempre restaura o botão quando a geração ou o arquivamento falha",()=>{assert.match(app,/finally\{if\(!finalized\)\{button\.disabled=false;button\.textContent="Finalizar e gerar PDF";button\.removeAttribute\("aria-busy"\);\}\}/);assert.match(app,/A geração do PDF excedeu 120 segundos/);});
test("PDF usa largura A4 controlada e gravação IndexedDB trata abortos",()=>{assert.match(app,/clonedContent\.style\.width="725px"/);assert.match(app,/tx\.onabort=\(\)=>finish/);});
