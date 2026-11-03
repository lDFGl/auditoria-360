const sectors = [
{id:"auditoria",name:"Auditoria Interna",icon:"◎",desc:"Governança, controles internos, documentação e rastreabilidade dos processos.",items:[
["A obra possui orçamento aprovado e versão vigente disponível para consulta?","Orçamento aprovado; controle de versões; procedimento interno."],
["As contratações possuem solicitação formal e justificativa da necessidade?","Política de suprimentos; trilha de aprovação."],
["Os fornecedores foram submetidos à avaliação e aprovação cadastral aplicável?","Procedimento de homologação; ISO 9001."],
["As contratações apresentam evidência de cotação ou justificativa formal de dispensa?","Política de compras; alçadas internas."],
["Há mapa comparativo/QDC aprovado antes da contratação, quando exigido?","Matriz de alçadas; procedimento de compras."],
["Os contratos estão formalizados e aprovados pelos responsáveis competentes?","Código Civil; política de contratos."],
["Aditivos contratuais estão formalizados antes da execução dos serviços adicionais?","Código Civil; procedimento de gestão contratual."],
["Os pedidos de compra estão vinculados à solicitação e ao contrato correspondente?","Rastreabilidade ERP; controle interno."],
["As medições possuem memória de cálculo e evidência de execução?","Procedimento de medição; controles de pagamento."],
["Os valores medidos estão aderentes aos preços, quantitativos e condições contratuais?","Contrato; orçamento; alçadas de aprovação."],
["Existe evidência de conferência fiscal e documental antes da liberação do pagamento?","Legislação tributária aplicável; procedimento financeiro."],
["Notas fiscais e comprovantes estão vinculados ao processo de contratação/medição?","Rastreabilidade documental; controle interno."],
["Os pagamentos são aprovados por responsáveis distintos de quem solicita/atesta?","Segregação de funções; COSO."],
["Materiais e equipamentos possuem registro de entrada, saída e responsável?","Controle patrimonial e de estoque."],
["Bens compartilhados entre obras/CNPJs possuem instrumento formal de transferência ou comodato?","Regras contábeis, fiscais e jurídicas aplicáveis."],
["Existe inventário periódico e tratamento documentado das divergências?","Controle de ativos; procedimento interno."],
["As pendências de inspeções anteriores possuem responsável e prazo definidos?","Monitoramento; COSO."],
["As não conformidades possuem análise de causa e plano de ação?","ISO 9001:2015, 10.2."],
["As aprovações e evidências estão armazenadas em repositório acessível e rastreável?","Gestão documental; controle de acesso."],
["Há acompanhamento dos indicadores e reporte periódico dos riscos relevantes?","COSO ERM; governança corporativa."]
]},
{id:"engenharia",name:"Engenharia",icon:"⌂",desc:"Conformidade da execução, projetos, serviços, instalações e condições técnicas.",items:[
["Os projetos executivos vigentes estão disponíveis no local de execução?","ABNT NBR 6492; controle de revisões."],
["A equipe utiliza somente desenhos e documentos liberados para execução?","Gestão de projetos; controle de documentos."],
["As interferências entre disciplinas foram identificadas e tratadas antes da execução?","Compatibilização de projetos; ABNT aplicáveis."],
["Os serviços executados possuem liberação ou orientação técnica documentada?","Procedimento de execução e inspeção."],
["A locação, eixos e níveis conferem com os projetos?","Projeto executivo; procedimentos topográficos."],
["As fundações executadas correspondem às especificações e projetos aprovados?","ABNT NBR 6122; projeto estrutural."],
["As armaduras apresentam bitolas, espaçamentos, cobrimentos e posicionamento especificados?","ABNT NBR 6118; projeto estrutural."],
["As formas estão estáveis, limpas, estanques e devidamente travadas?","ABNT NBR 14931; procedimento de concretagem."],
["O concreto recebido possui documentação e características compatíveis com a especificação?","ABNT NBR 12655; especificação de projeto."],
["A concretagem possui registros de rastreabilidade, lançamento e cura?","ABNT NBR 14931 e 12655."],
["A alvenaria respeita alinhamento, prumo, nível, amarração e vãos de projeto?","Projeto; procedimentos executivos."],
["As instalações elétricas estão executadas conforme projeto e requisitos de segurança?","ABNT NBR 5410; projeto elétrico."],
["As instalações hidrossanitárias foram testadas e inspecionadas antes do fechamento?","ABNT NBR 5626; projetos e procedimentos."],
["As impermeabilizações seguem o sistema especificado e possuem testes registrados?","ABNT NBR 9574 e 9575."],
["As juntas, passagens e interfaces entre sistemas estão tratadas adequadamente?","Projetos; ABNT NBR 15575."],
["Os materiais aplicados correspondem às especificações e memoriais descritivos?","Memorial; fichas técnicas; projetos."],
["Os serviços apresentam acabamento, tolerâncias e dimensões compatíveis com os critérios de aceitação?","Projetos; procedimentos de execução."],
["As alterações de campo foram submetidas à análise e aprovação técnica?","Gestão de mudanças; controle de projetos."],
["As áreas executadas estão protegidas contra danos por atividades subsequentes?","Planejamento executivo; boas práticas."],
["Os registros de inspeção, testes e liberações estão atualizados e vinculados aos serviços?","ABNT NBR 15575; gestão da qualidade."]
]},
{id:"qualidade",name:"Qualidade",icon:"◇",desc:"Inspeções, materiais, ensaios, critérios de aceitação e tratamento de não conformidades.",items:[
["A obra possui plano da qualidade ou plano de inspeção aplicável e atualizado?","ISO 9001:2015; procedimento da qualidade."],
["Os procedimentos executivos vigentes estão disponíveis às equipes?","ISO 9001:2015, 7.5."],
["Os materiais recebidos são conferidos com pedido, nota fiscal e especificação?","ISO 9001:2015, 8.4 e 8.6."],
["Os materiais possuem identificação de lote, fabricante e rastreabilidade quando aplicável?","ISO 9001:2015, 8.5.2."],
["Os materiais não conformes estão identificados e segregados?","ISO 9001:2015, 8.7."],
["O armazenamento preserva as características e condições recomendadas pelo fabricante?","Fichas técnicas; procedimentos de armazenamento."],
["Os materiais possuem prazo de validade controlado quando aplicável?","Ficha técnica; controle de estoque."],
["Há registros de inspeção de recebimento dos materiais críticos?","Plano de inspeção; ISO 9001."],
["As etapas de serviço possuem critérios de inspeção e aceitação definidos?","Plano de inspeção e ensaios."],
["As inspeções são realizadas antes da liberação de etapas que serão ocultadas?","Procedimento de execução; pontos de espera."],
["Os instrumentos de medição utilizados estão identificados e calibrados quando necessário?","ISO 9001:2015, 7.1.5."],
["Os ensaios tecnológicos previstos estão sendo realizados e registrados?","Normas técnicas e especificações do projeto."],
["Os resultados dos ensaios atendem aos limites de aceitação especificados?","Especificações técnicas; normas aplicáveis."],
["As fichas de verificação de serviço estão preenchidas e aprovadas?","Procedimento da qualidade."],
["As não conformidades são registradas com descrição objetiva e evidências?","ISO 9001:2015, 10.2."],
["As causas das não conformidades relevantes são analisadas?","ISO 9001:2015, 10.2."],
["As ações corretivas possuem responsável, prazo e evidência de conclusão?","ISO 9001:2015, 10.2."],
["A eficácia das ações corretivas é verificada após a implementação?","ISO 9001:2015, 10.2."],
["Os serviços reparados ou retrabalhados passam por reinspeção antes da liberação?","ISO 9001:2015, 8.7."],
["Os registros de qualidade estão organizados e vinculados à etapa, local e data?","ISO 9001:2015, 7.5; rastreabilidade."]
]},
{id:"almoxarifado",name:"Almoxarifado",icon:"▤",desc:"Recebimento, guarda, movimentação, inventário e integridade dos estoques.",items:[
["O almoxarifado possui responsável formalmente designado?","Procedimento interno; segregação de responsabilidades."],
["O acesso ao estoque é restrito e controlado?","Controle interno; segurança patrimonial."],
["Os materiais recebidos são conferidos em quantidade e especificação?","Pedido de compra; nota fiscal; procedimento de recebimento."],
["As divergências no recebimento são registradas e comunicadas?","Procedimento de recebimento; controle de fornecedores."],
["As entradas são registradas tempestivamente no sistema de estoque?","ERP; rastreabilidade de movimentações."],
["Os materiais estão identificados por código, descrição ou outra forma inequívoca?","Boas práticas de armazenagem; ISO 9001."],
["Os materiais estão armazenados em locais compatíveis com suas características?","Fichas técnicas; NR-11 quando aplicável."],
["Há segregação física de materiais avariados, vencidos ou não conformes?","ISO 9001:2015, 8.7."],
["Produtos químicos possuem identificação e condições de armazenamento adequadas?","FISPQ/FDS; NR-26 e requisitos aplicáveis."],
["Materiais sensíveis à umidade, temperatura ou exposição estão protegidos?","Orientações dos fabricantes; boas práticas."],
["As estruturas de armazenagem estão íntegras e sem sinais de sobrecarga?","NR-11; especificação do fabricante."],
["Corredores, acessos e rotas de movimentação estão desobstruídos?","NR-11; NR-18."],
["As saídas de materiais possuem requisição e identificação do requisitante?","Procedimento de estoque; trilha de auditoria."],
["As transferências entre almoxarifado e frentes de serviço são registradas?","ERP; controle de movimentação."],
["Há controle de ferramentas e equipamentos entregues aos colaboradores?","Termo de responsabilidade; controle patrimonial."],
["São realizados inventários cíclicos ou periódicos com registro dos resultados?","Procedimento de inventário; controle interno."],
["As diferenças de inventário são investigadas e aprovadas antes dos ajustes?","Alçadas; segregação de funções."],
["Há controle de materiais obsoletos, sem giro ou próximos do vencimento?","Gestão de estoque; validade e obsolescência."],
["As perdas, avarias e descartes possuem justificativa e aprovação?","Procedimento interno; controle patrimonial."],
["O ambiente apresenta limpeza, organização, iluminação e ventilação adequadas?","NR-18; NR-24; boas práticas."]
]},
{id:"sesmt",name:"SESMT",icon:"✚",desc:"Segurança e saúde no trabalho, prevenção de riscos e condições do canteiro.",items:[
["O PGR da obra está disponível, atualizado e compatível com as atividades realizadas?","NR-01; GRO/PGR."],
["Os riscos ocupacionais das frentes de trabalho foram identificados e avaliados?","NR-01; inventário de riscos."],
["As medidas de prevenção previstas no plano de ação estão implementadas?","NR-01; hierarquia de controles."],
["Os trabalhadores receberam integração e orientações de segurança pertinentes?","NR-01; NR-18."],
["As atividades são executadas por trabalhadores capacitados e autorizados quando exigido?","NR-10; NR-12; NR-35 e demais NRs aplicáveis."],
["Os EPIs são adequados aos riscos, possuem CA válido quando exigível e são registrados?","NR-06."],
["Há fiscalização do uso correto e conservação dos EPIs?","NR-06; PGR."],
["As proteções coletivas estão instaladas, íntegras e adequadas aos riscos?","NR-18; NR-35."],
["As periferias, aberturas e vãos possuem proteção contra quedas?","NR-18."],
["Os trabalhos em altura possuem análise de risco e autorização aplicável?","NR-35."],
["Os sistemas de proteção contra quedas são inspecionados antes do uso?","NR-35."],
["Andaimes, escadas e plataformas estão montados e utilizados de forma segura?","NR-18; instruções dos fabricantes."],
["Máquinas e equipamentos possuem proteções e dispositivos de segurança funcionais?","NR-12; NR-18."],
["Instalações e quadros elétricos estão protegidos, identificados e sem improvisações?","NR-10; NR-18."],
["Cabos, extensões e ferramentas elétricas apresentam condições seguras de uso?","NR-10; NR-18."],
["As áreas de circulação estão organizadas, sinalizadas e livres de obstruções?","NR-18."],
["Produtos químicos estão identificados e acompanhados das informações de segurança?","NR-26; FDS."],
["Extintores, alarmes e rotas de fuga estão acessíveis e sinalizados?","NR-23; legislação estadual aplicável."],
["As instalações sanitárias, áreas de vivência e água potável atendem aos requisitos?","NR-18; NR-24."],
["Acidentes, incidentes e quase acidentes são registrados e tratados com ações preventivas?","NR-01; procedimentos de SST."]
]}
];
const state={sector:null,ratings:{},files:{}};
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function renderHome(){
 $("#homeView").classList.remove("hidden");$("#inspectionView").classList.add("hidden");
 $("#sectorGrid").innerHTML=sectors.map(s=>`<button class="sector-card" data-sector="${s.id}"><div class="sector-icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p><div class="card-foot"><span>20 VERIFICAÇÕES</span><span>ACESSAR →</span></div></button>`).join("");
 document.querySelectorAll("[data-sector]").forEach(b=>b.addEventListener("click",()=>openSector(b.dataset.sector)));
}
function openSector(id){
 state.sector=sectors.find(s=>s.id===id);state.ratings={};state.files={};
 $("#homeView").classList.add("hidden");$("#inspectionView").classList.remove("hidden");
 $("#sectorTitle").textContent=state.sector.name;$("#sectorDescription").textContent=state.sector.desc;$("#sectorCount").textContent="20 CRITÉRIOS DE VERIFICAÇÃO";
 $("#questionList").innerHTML=state.sector.items.map((q,i)=>`<article class="question" data-q="${i}"><div class="question-top"><div><span class="question-number">CRITÉRIO ${String(i+1).padStart(2,"0")}</span><h4>${esc(q[0])}</h4><div class="reference">Referência: ${esc(q[1])}</div></div><div class="rating" role="group" aria-label="Avaliação do critério ${i+1}">${[["IM/OM","im"],["NA","na"],["PI","pi"],["NI","ni"]].map(([v,c])=>`<button type="button" class="r-${c}" data-rate="${v}" aria-pressed="false">${v}</button>`).join("")}</div></div><div class="question-details"><label>Observação / constatação<input data-field="obs" placeholder="Descreva a condição encontrada"></label><label>Localização<input data-field="local" placeholder="Bloco, pavimento, ambiente..."></label><label>Evidência fotográfica<input data-field="foto" type="file" accept="image/*" multiple></label></div></article>`).join("");
 document.querySelectorAll("[data-q]").forEach(card=>{card.querySelectorAll("[data-rate]").forEach(btn=>btn.addEventListener("click",()=>{const i=+card.dataset.q;state.ratings[i]=btn.dataset.rate;card.querySelectorAll("[data-rate]").forEach(x=>x.setAttribute("aria-pressed",String(x===btn)));updateScore()}));card.querySelector('[data-field="foto"]').addEventListener("change",e=>{state.files[card.dataset.q]=Array.from(e.target.files).map(f=>f.name)})});
 const date=$('input[name="data"]');if(!date.value)date.value=new Date().toISOString().slice(0,10);updateScore();window.scrollTo({top:0,behavior:"smooth"});
}
function updateScore(){
 const vals=Object.values(state.ratings),done=vals.length,total=state.sector.items.length,eligible=vals.filter(v=>v!=="NA"),score=eligible.length?eligible.reduce((n,v)=>n+(v==="IM/OM"?100:v==="PI"?50:0),0)/eligible.length:0;
 $("#scoreValue").textContent=eligible.length?score.toFixed(1).replace(".",",")+"%":"—";$("#scoreCaption").textContent=done+" de "+total+" avaliados";$("#progressBar").style.width=(done/total*100)+"%";
}
function formData(){const f=new FormData($("#inspectionForm"));return Object.fromEntries(f.entries())}
function reportHtml(data){
 const order=["IM/OM","NA","PI","NI"],labels={"IM/OM":"Implementado / Oportunidade de Melhoria","NA":"Não aplicável","PI":"Parcialmente implementado","NI":"Não implementado"};
 const records=state.sector.items.map((q,i)=>({i,q,r:state.ratings[i]||"PENDENTE",card:document.querySelector(`[data-q="${i}"]`)}));
 const rows=order.flatMap(r=>records.filter(x=>x.r===r).map(x=>{const obs=x.card.querySelector('[data-field="obs"]').value,loc=x.card.querySelector('[data-field="local"]').value,photos=state.files[x.i]||[];return `<tr><td>${x.i+1}</td><td>${esc(x.q[0])}<br><small>${esc(x.q[1])}</small></td><td>${r}</td><td>${esc(obs||"—")}</td><td>${esc(loc||"—")}</td><td>${esc(photos.join(", ")||"—")}</td></tr>`}));
 const vals=Object.values(state.ratings),eligible=vals.filter(v=>v!=="NA"),score=eligible.length?eligible.reduce((n,v)=>n+(v==="IM/OM"?100:v==="PI"?50:0),0)/eligible.length:0;
 return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório Auditoria 360</title><style>body{font:11px Arial;color:#24383d;margin:28px}h1{font-size:22px;color:#123b46}h2{font-size:15px;margin-top:24px;color:#135c6c}p{line-height:1.5}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f1f5f5;padding:12px}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #d9e2e3;padding:7px;text-align:left;vertical-align:top}th{background:#eaf1f2}small{color:#64777c} .score{font-size:22px;font-weight:bold;color:#135c6c}@media print{body{margin:12mm}tr{break-inside:avoid}h2{break-after:avoid}}</style></head><body><h1>AUDITORIA 360 | RELATÓRIO DE INSPEÇÃO</h1><p><b>Setor:</b> ${state.sector.name}</p><div class="meta"><div><b>Obra:</b> ${esc(data.obra)}</div><div><b>Empresa:</b> ${esc(data.empresa||"—")}</div><div><b>Data:</b> ${esc(data.data)}</div><div><b>Responsável:</b> ${esc(data.responsavel)}</div><div><b>Local:</b> ${esc(data.local||"—")}</div><div><b>Clima:</b> ${esc(data.clima||"—")}</div></div><h2>Resultado da avaliação</h2><p class="score">${score.toFixed(1).replace(".",",")}% de conformidade</p><p>Critérios avaliados: ${vals.length}/20 · IM/OM: ${vals.filter(x=>x==="IM/OM").length} · NA: ${vals.filter(x=>x==="NA").length} · PI: ${vals.filter(x=>x==="PI").length} · NI: ${vals.filter(x=>x==="NI").length} · Pendentes: ${20-vals.length}</p><h2>Detalhamento dos critérios</h2><table><thead><tr><th>#</th><th>Critério / referência</th><th>Classificação</th><th>Observação</th><th>Local</th><th>Arquivos de evidência</th></tr></thead><tbody>${rows.join("")}</tbody></table><h2>Considerações gerais</h2><p>${esc(data.consideracoes||"Não informado.")}</p><p style="margin-top:35px">________________________________________<br>Responsável pela inspeção</p><script>window.onload=()=>window.print()<\/script></body></html>`;
}
$("#inspectionForm").addEventListener("submit",e=>{e.preventDefault();if(Object.keys(state.ratings).length!==20){if(!confirm("Existem critérios sem classificação. Deseja gerar o relatório mesmo assim?"))return;}const w=window.open("","_blank");if(!w){alert("Permita pop-ups para gerar o relatório.");return;}w.document.open();w.document.write(reportHtml(formData()));w.document.close()});
$("#saveDraft").addEventListener("click",()=>{const data={sector:state.sector.id,ratings:state.ratings,form:formData(),savedAt:new Date().toISOString()};try{localStorage.setItem("auditoria360-draft-"+state.sector.id,JSON.stringify(data));alert("Rascunho salvo neste dispositivo.");}catch(e){alert("Não foi possível salvar o rascunho neste navegador.");}});
$("#backHome").addEventListener("click",renderHome);$("#homeLink").addEventListener("click",e=>{e.preventDefault();renderHome()});renderHome();