const test=require("node:test"),assert=require("node:assert/strict"),fs=require("node:fs");
const html=fs.readFileSync("www/index.html","utf8");
const app=fs.readFileSync("www/js/app.js","utf8");
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
 assert.match(html,/id="reportFinalize">Finalizar relatório/);
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
