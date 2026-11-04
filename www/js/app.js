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

const PHOTO_DB="auditoria360-evidencias";
function openPhotoDB(){return new Promise((resolve,reject)=>{if(!("indexedDB" in window)){reject(new Error("IndexedDB indisponível"));return;}const req=indexedDB.open(PHOTO_DB,1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("photos"))req.result.createObjectStore("photos");};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function storePhotos(sectorId,index,photos){const db=await openPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("photos","readwrite"),store=tx.objectStore("photos"),key=sectorId+":"+index;if(photos.length)store.put(photos,key);else store.delete(key);tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error);};});}
async function readSectorPhotos(sectorId){const db=await openPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("photos","readonly"),store=tx.objectStore("photos"),req=store.getAllKeys(),out={};req.onsuccess=()=>{const keys=req.result.filter(k=>String(k).startsWith(sectorId+":"));if(!keys.length){db.close();resolve(out);return;}let pending=keys.length;keys.forEach(key=>{const r=store.get(key);r.onsuccess=()=>{out[String(key).split(":")[1]]=r.result||[];if(!--pending){db.close();resolve(out);}};r.onerror=()=>{db.close();reject(r.error);};});};req.onerror=()=>{db.close();reject(req.error);};});}
function imageAsDataURL(file){return new Promise((resolve,reject)=>{if(!file.type.startsWith("image/")){reject(new Error("Selecione somente arquivos de imagem."));return;}const reader=new FileReader();reader.onerror=()=>reject(new Error("Não foi possível ler "+file.name));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error("Imagem inválida: "+file.name));img.onload=()=>{const max=1600,scale=Math.min(1,max/Math.max(img.width,img.height)),canvas=document.createElement("canvas");canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);resolve({name:file.name,dataUrl:canvas.toDataURL("image/jpeg",0.82)});};img.src=reader.result;};reader.readAsDataURL(file);});}
function renderPhotoGallery(card,index){const host=card.querySelector(".photo-gallery");if(!host)return;host.innerHTML="";(state.files[index]||[]).forEach((p,n)=>{const item=document.createElement("div");item.className="photo-thumb";const img=document.createElement("img");img.src=p.dataUrl;img.alt=p.name;const name=document.createElement("span");name.textContent=p.name;const remove=document.createElement("button");remove.type="button";remove.textContent="×";remove.setAttribute("aria-label","Remover "+p.name);remove.addEventListener("click",async()=>{state.files[index].splice(n,1);renderPhotoGallery(card,index);try{await storePhotos(state.sector.id,index,state.files[index]);}catch(e){alert("Não foi possível atualizar o armazenamento das fotos.");}});item.append(img,name,remove);host.append(item);});}

const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function renderHome(){
 $("#homeView").classList.remove("hidden");$("#inspectionView").classList.add("hidden");
 $("#sectorGrid").innerHTML=sectors.map(s=>`<button class="sector-card" data-sector="${s.id}"><div class="sector-icon">${s.icon}</div><h3>${s.name}</h3><p>${s.desc}</p><div class="card-foot"><span>20 VERIFICAÇÕES</span><span>ACESSAR →</span></div></button>`).join("");
 document.querySelectorAll("[data-sector]").forEach(b=>b.addEventListener("click",()=>openSector(b.dataset.sector)));
}
async function openSector(id){
 state.sector=sectors.find(s=>s.id===id);state.ratings={};state.files={};
 $("#homeView").classList.add("hidden");$("#inspectionView").classList.remove("hidden");
 $("#sectorTitle").textContent=state.sector.name;$("#sectorDescription").textContent=state.sector.desc;$("#sectorCount").textContent="20 CRITÉRIOS DE VERIFICAÇÃO";
 $("#questionList").innerHTML=state.sector.items.map((q,i)=>`<article class="question" data-q="${i}"><div class="question-top"><div><span class="question-number">CRITÉRIO ${String(i+1).padStart(2,"0")}</span><h4>${esc(q[0])}</h4><div class="reference">Referência: ${esc(q[1])}</div></div><div class="rating" role="group" aria-label="Avaliação do critério ${i+1}">${[["IM/OM","im"],["NA","na"],["PI","pi"],["NI","ni"]].map(([v,c])=>`<button type="button" class="r-${c}" data-rate="${v}" aria-pressed="false">${v}</button>`).join("")}</div></div><div class="question-details"><label>Observação / constatação<input data-field="obs" placeholder="Descreva a condição encontrada"></label><label>Evidências fotográficas<input data-field="foto" type="file" accept="image/*" multiple capture="environment"><small class="photo-help">Até 5 imagens por critério. Fotos salvas neste dispositivo.</small></label><div class="photo-gallery" aria-live="polite"></div></div></article>`).join("");
 document.querySelectorAll("[data-q]").forEach(card=>{card.querySelectorAll("[data-rate]").forEach(btn=>btn.addEventListener("click",()=>{const i=+card.dataset.q;state.ratings[i]=btn.dataset.rate;card.querySelectorAll("[data-rate]").forEach(x=>x.setAttribute("aria-pressed",String(x===btn)));updateScore()}));card.querySelector('[data-field="foto"]').addEventListener("change",async e=>{const i=+card.dataset.q,input=e.target,selected=Array.from(input.files||[]),current=state.files[i]||[],remaining=5-current.length;if(!selected.length)return;if(remaining<=0){alert("Limite de 5 fotos por critério. Remova uma imagem para adicionar outra.");input.value="";return;}try{const added=await Promise.all(selected.slice(0,remaining).map(imageAsDataURL));state.files[i]=current.concat(added);renderPhotoGallery(card,i);await storePhotos(state.sector.id,i,state.files[i]);if(selected.length>remaining)alert("Foram adicionadas somente "+remaining+" imagem(ns), respeitando o limite de 5 por critério.");}catch(err){alert(err.message||"Falha ao adicionar as fotos.");}input.value="";});});try{state.files=await readSectorPhotos(id);}catch(err){state.files={};console.warn("Armazenamento de fotos indisponível",err);}document.querySelectorAll("[data-q]").forEach(card=>renderPhotoGallery(card,+card.dataset.q));
 const date=$('input[name="data"]');if(!date.value)date.value=new Date().toISOString().slice(0,10);updateScore();window.scrollTo({top:0,behavior:"smooth"});
}
function updateScore(){
 const vals=Object.values(state.ratings),done=vals.length,total=state.sector.items.length,eligible=vals.filter(v=>v!=="NA"),score=eligible.length?eligible.reduce((n,v)=>n+(v==="IM/OM"?100:v==="PI"?50:0),0)/eligible.length:0;
 $("#scoreValue").textContent=eligible.length?score.toFixed(1).replace(".",",")+"%":"—";$("#scoreCaption").textContent=done+" de "+total+" avaliados";$("#progressBar").style.width=(done/total*100)+"%";
}
function formData(){const f=new FormData($("#inspectionForm"));return Object.fromEntries(f.entries())}
async function reportHtml(data){
 const logoUrl=new URL("logo-fg.png",location.href).href;
 const order=["IM/OM","NA","PI","NI"],labels={"IM/OM":"Implementado / Oportunidade de Melhoria","NA":"Não aplicável","PI":"Parcialmente implementado","NI":"Não implementado"};
 const records=state.sector.items.map((q,i)=>({i,q,r:state.ratings[i]||"PENDENTE",card:document.querySelector(`[data-q="${i}"]`)}));
 const rows=(await Promise.all(order.flatMap(r=>records.filter(x=>x.r===r).map(async x=>{const obs=x.card.querySelector('[data-field="obs"]').value,photos=state.files[x.i]||[],photoHtml=photos.length?'<div class="report-photos">'+photos.map(p=>'<figure><img src="'+p.dataUrl+'" alt="'+esc(p.name)+'"><figcaption>'+esc(p.name)+'</figcaption></figure>').join("")+'</div>':"—";return `<tr><td>${x.i+1}</td><td>${esc(x.q[0])}<br><small>${esc(x.q[1])}</small></td><td>${r}</td><td>${esc(obs||"—")}</td><td>${photoHtml}</td></tr>`;})))).join("");
 const vals=Object.values(state.ratings),eligible=vals.filter(v=>v!=="NA"),score=eligible.length?eligible.reduce((n,v)=>n+(v==="IM/OM"?100:v==="PI"?50:0),0)/eligible.length:0;
 return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório Auditoria 360</title><style>body{font:11px Arial;color:#24383d;margin:28px}h1{font-size:22px;color:#135c6c}.report-header{display:flex;align-items:center;gap:18px;border-bottom:2px solid #135c6c;padding-bottom:12px;margin-bottom:16px}.report-header img{width:125px;height:auto;max-height:58px;object-fit:contain}.report-header h1{margin:0}h2{font-size:15px;margin-top:24px;color:#135c6c}p{line-height:1.5}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f1f5f5;padding:12px}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #d9e2e3;padding:7px;text-align:left;vertical-align:top}th{background:#eaf1f2}.report-photos{display:flex;flex-wrap:wrap;gap:6px}.report-photos figure{margin:0;width:110px;break-inside:avoid}.report-photos img{width:100%;height:85px;object-fit:contain;border:1px solid #d9e2e3}.report-photos figcaption{font-size:8px;overflow-wrap:anywhere}small{color:#64777c} .score{font-size:22px;font-weight:bold;color:#135c6c}@media print{body{margin:12mm}tr{break-inside:avoid}h2{break-after:avoid}}</style></head><body><header class="report-header"><img src="${logoUrl}" alt="FG Empreendimentos"><h1>AUDITORIA 360 | RELATÓRIO DE INSPEÇÃO</h1></header><p><b>Setor:</b> ${state.sector.name}</p><div class="meta"><div><b>Obra:</b> ${esc(data.obra)}</div><div><b>Empresa:</b> ${esc(data.empresa||"—")}</div><div><b>Data:</b> ${esc(data.data)}</div><div><b>Responsável:</b> ${esc(data.responsavel)}</div><div><b>Local:</b> ${esc(data.local||"—")}</div><div><b>Clima:</b> ${esc(data.clima||"—")}</div></div><h2>Resultado da avaliação</h2><p class="score">${score.toFixed(1).replace(".",",")}% de conformidade</p><p>Critérios avaliados: ${vals.length}/20 · IM/OM: ${vals.filter(x=>x==="IM/OM").length} · NA: ${vals.filter(x=>x==="NA").length} · PI: ${vals.filter(x=>x==="PI").length} · NI: ${vals.filter(x=>x==="NI").length} · Pendentes: ${20-vals.length}</p><h2>Detalhamento dos critérios</h2><table><thead><tr><th>#</th><th>Critério / referência</th><th>Classificação</th><th>Observação</th><th>Arquivos de evidência</th></tr></thead><tbody>${rows.join("")}</tbody></table><h2>Considerações gerais</h2><p>${esc(data.consideracoes||"Não informado.")}</p><p style="margin-top:35px">________________________________________<br>Responsável pela inspeção</p><script>window.onload=()=>window.print()<\/script></body></html>`;
}
$("#inspectionForm").addEventListener("submit",async e=>{e.preventDefault();if(Object.keys(state.ratings).length!==20){if(!confirm("Existem critérios sem classificação. Deseja gerar o relatório mesmo assim?"))return;}const w=window.open("","_blank");if(!w){alert("Permita pop-ups para gerar o relatório.");return;}w.document.open();w.document.write("<p style=\"font:14px Arial;padding:24px\">Preparando relatório e incorporando evidências fotográficas...</p>");w.document.close();try{const html=await reportHtml(formData());w.document.open();w.document.write(html);w.document.close();}catch(err){w.close();alert("Não foi possível gerar o relatório com as imagens: "+err.message);}});
$("#saveDraft").addEventListener("click",()=>{const data={sector:state.sector.id,ratings:state.ratings,form:formData(),savedAt:new Date().toISOString()};try{localStorage.setItem("auditoria360-draft-"+state.sector.id,JSON.stringify(data));alert("Rascunho salvo neste dispositivo.");}catch(e){alert("Não foi possível salvar o rascunho neste navegador.");}});
$("#backHome").addEventListener("click",renderHome);$("#homeLink").addEventListener("click",e=>{e.preventDefault();renderHome()});renderHome();