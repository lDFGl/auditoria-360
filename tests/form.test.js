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
 assert.equal((app.match(/data-field="foto-camera" type="file" accept="image\\/\\*" multiple capture="environment" hidden/g)||[]).length,2);
 assert.match(app,/card\.querySelectorAll\("\[data-photo-action\]"\)/);
 assert.match(app,/input\.click\(\)/);
 assert.match(app,/inputs\.forEach\(input=>input\.addEventListener\("change"/);
 assert.match(css,/\.photo-controls\{display:grid;grid-template-columns:1fr 1fr/);
});
