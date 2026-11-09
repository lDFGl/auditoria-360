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
]},
{id:"fg-moradia",name:"FG Moradia",icon:"⌂",desc:"Vistoria de entrega do apartamento aos colaboradores, com registro de condições, ajustes e evidências.",mode:"moradia",items:[]}
];
const state={sector:null,ratings:{},files:{},gps:null,roomCount:1,inspectionId:null};
const DRAFT_PREFIX="auditoria360-draft-";
function newInspectionId(){const bytes=new Uint8Array(12);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(bytes);else for(let i=0;i<bytes.length;i++)bytes[i]=Math.floor(Math.random()*256);return "AI360-"+new Date().toISOString().replace(/[-:TZ.]/g,"").slice(0,14)+"-"+Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("").toUpperCase();}
const DRAFT_INDEX_KEY="auditoria360-draft-index-v2";
function listDrafts(sectorId){const out=[],seen=new Set();for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith(DRAFT_PREFIX))continue;try{const d=JSON.parse(localStorage.getItem(k)||"null");if(d&&d.sector===sectorId&&d.inspectionId&&k!==DRAFT_PREFIX+d.sector&&!seen.has(d.inspectionId)){seen.add(d.inspectionId);out.push(d);}}catch(e){}}return out.sort((x,y)=>String(y.savedAt||"").localeCompare(String(x.savedAt||"")));}
function saveDraftIndex(d){try{const a=JSON.parse(localStorage.getItem(DRAFT_INDEX_KEY)||"[]").filter(x=>x.inspectionId!==d.inspectionId);a.unshift({inspectionId:d.inspectionId,sector:d.sector,obra:d.form?.obra||"",date:d.form?.data||"",savedAt:d.savedAt});localStorage.setItem(DRAFT_INDEX_KEY,JSON.stringify(a.slice(0,500)));}catch(e){}}
function getDraft(id){try{const raw=localStorage.getItem(DRAFT_PREFIX+id);return raw?JSON.parse(raw):null;}catch(e){return null;}}
function migrateLegacyDrafts(){const index=[];for(const sector of sectors){try{const d=JSON.parse(localStorage.getItem(DRAFT_PREFIX+sector.id)||"null");if(!d)continue;if(!d.inspectionId)d.inspectionId=newInspectionId();d.sector=d.sector||sector.id;d.version=3;const key=DRAFT_PREFIX+d.inspectionId;if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(d));localStorage.setItem(DRAFT_PREFIX+sector.id,JSON.stringify(d));index.push({inspectionId:d.inspectionId,sector:d.sector,obra:d.form?.obra||"",date:d.form?.data||"",savedAt:d.savedAt||new Date().toISOString()});}catch(e){}}try{localStorage.setItem(DRAFT_INDEX_KEY,JSON.stringify(index));}catch(e){}}
function clearSectorPhotos(inspectionId){return openPhotoDB().then(db=>new Promise((resolve,reject)=>{const tx=db.transaction("photos","readwrite"),store=tx.objectStore("photos"),req=store.getAllKeys();req.onsuccess=()=>req.result.filter(k=>String(k).startsWith(inspectionId+":")).forEach(k=>store.delete(k));tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error);};}));}

const PHOTO_DB="auditoria360-evidencias";
function openPhotoDB(){return new Promise((resolve,reject)=>{if(!("indexedDB" in window)){reject(new Error("IndexedDB indisponível"));return;}const req=indexedDB.open(PHOTO_DB,2);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("photos"))req.result.createObjectStore("photos");};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function storePhotos(inspectionId,index,photos){const db=await openPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("photos","readwrite"),store=tx.objectStore("photos"),key=inspectionId+":"+index;if(photos.length)store.put(photos,key);else store.delete(key);tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error);};});}
async function readInspectionPhotos(inspectionId){const db=await openPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("photos","readonly"),store=tx.objectStore("photos"),req=store.getAllKeys(),out={};req.onsuccess=()=>{const keys=req.result.filter(k=>String(k).startsWith(inspectionId+":"));if(!keys.length){db.close();resolve(out);return;}let pending=keys.length;keys.forEach(key=>{const r=store.get(key);r.onsuccess=()=>{out[String(key).slice(inspectionId.length+1)]=r.result||[];if(!--pending){db.close();resolve(out);}};r.onerror=()=>{db.close();reject(r.error);};});};req.onerror=()=>{db.close();reject(req.error);};});}
async function migrateLegacyPhotos(){try{const db=await openPhotoDB();const keys=await new Promise((resolve,reject)=>{const r=db.transaction("photos","readonly").objectStore("photos").getAllKeys();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});db.close();for(const sector of sectors){const old=(()=>{try{return JSON.parse(localStorage.getItem(DRAFT_PREFIX+sector.id)||"null");}catch(e){return null;}})();if(!old?.inspectionId)continue;const legacy=keys.filter(k=>String(k).startsWith(sector.id+":"));if(!legacy.length)continue;const db2=await openPhotoDB();await new Promise((resolve,reject)=>{const tx=db2.transaction("photos","readwrite"),store=tx.objectStore("photos");let remaining=legacy.length;legacy.forEach(key=>{const r=store.get(key);r.onsuccess=()=>{store.put(r.result,old.inspectionId+":"+String(key).slice(sector.id.length+1));if(!--remaining)resolve();};r.onerror=()=>reject(r.error);});tx.onerror=()=>reject(tx.error);});db2.close();}}catch(e){console.warn("Migração de fotos antigas não concluída; os registros originais foram mantidos.",e);}}
function imageAsDataURL(file){return new Promise((resolve,reject)=>{if(!file.type.startsWith("image/")){reject(new Error("Selecione somente arquivos de imagem."));return;}const reader=new FileReader();reader.onerror=()=>reject(new Error("Não foi possível ler "+file.name));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error("Imagem inválida: "+file.name));img.onload=()=>{const max=1600,scale=Math.min(1,max/Math.max(img.width,img.height)),canvas=document.createElement("canvas");canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);resolve({name:file.name,dataUrl:canvas.toDataURL("image/jpeg",0.82)});};img.src=reader.result;};reader.readAsDataURL(file);});}
function renderPhotoGallery(card,index){const host=card.querySelector(".photo-gallery");if(!host)return;host.innerHTML="";(state.files[index]||[]).forEach((p,n)=>{const item=document.createElement("div");item.className="photo-thumb";const img=document.createElement("img");img.src=p.dataUrl;img.alt=p.name;const name=document.createElement("span");name.textContent=p.name;const remove=document.createElement("button");remove.type="button";remove.textContent="×";remove.setAttribute("aria-label","Remover "+p.name);remove.addEventListener("click",async()=>{state.files[index].splice(n,1);renderPhotoGallery(card,index);try{await storePhotos(state.inspectionId,index,state.files[index]);}catch(e){alert("Não foi possível atualizar o armazenamento das fotos.");}});item.append(img,name,remove);host.append(item);});}

const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const HISTORY_KEY="auditoria360-inspection-history-v1";
function readHistory(){try{const x=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");return Array.isArray(x)?x:[];}catch(e){return [];}}
function saveInspectionHistory(){
 const ratings=Object.values(state.ratings),isMoradia=state.sector.mode==="moradia",scoreResult=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length);
 const record={id:state.inspectionId,sector:state.sector.id,sectorName:state.sector.name,date:formData().data||new Date().toISOString().slice(0,10),completedAt:new Date().toISOString(),savedAt:new Date().toISOString(),obra:formData().obra||"",responsavel:formData().responsavel||"",mode:isMoradia?"moradia":"scored",total:state.sector.items.length,im:scoreResult.counts.im,na:scoreResult.counts.na,pi:scoreResult.counts.pi,ni:scoreResult.counts.ni,pending:isMoradia?Array.from(document.querySelectorAll("[data-field=status]")).filter(x=>!x.value).length:scoreResult.pending,conforme:isMoradia?Array.from(document.querySelectorAll('[data-field=status]')).filter(x=>x.value==="Conforme").length:0,ajuste:isMoradia?Array.from(document.querySelectorAll('[data-field=status]')).filter(x=>x.value==="Ajuste necessário").length:0,notApplicable:isMoradia?Array.from(document.querySelectorAll('[data-field=status]')).filter(x=>x.value==="Não aplicável").length:0};
 if(!isMoradia){record.conformity=scoreResult.score;record.evaluated=scoreResult.evaluated;}record.hash=state.reportIntegrity?.hash||null;record.generatedAt=state.reportIntegrity?.generatedAt||null;record.version=APP_VERSION;
 const history=readHistory().filter(x=>x.id!==record.id);history.unshift(record);
 try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history.slice(0,500)));const persisted=readHistory();return persisted.some(x=>x.id===record.id&&x.completedAt===record.completedAt);}catch(e){return false;}
}
async function requestStoragePersistence(){if(!navigator.storage?.persist)return;try{const granted=await navigator.storage.persist();if(!granted){const n=$("#storageNotice");if(n)n.textContent="O navegador não confirmou armazenamento persistente. Evite limpar os dados do site para preservar as inspeções locais."; }}catch(e){}}
function renderDashboard(){
 const module=$("#dashboardModule")?.value||"all",period=$("#dashboardPeriod")?.value||"all",now=new Date(),history=readHistory();
 const filtered=history.filter(x=>{const moduleMatch=module==="all"||x.sector===module;if(!moduleMatch)return false;if(period==="all")return true;const completed=x.completedAt||x.savedAt||x.date;if(!completed)return false;const age=(now-new Date(completed))/86400000;return age>=0&&age<=Number(period);});
 const scored=filtered.filter(x=>x.mode==="scored"&&Number.isFinite(x.conformity)),moradia=filtered.filter(x=>x.mode==="moradia");
 const avg=scored.length?scored.reduce((n,x)=>n+x.conformity,0)/scored.length:null;
 const totalEvaluated=scored.reduce((n,x)=>n+(x.evaluated||0),0),im=filtered.reduce((n,x)=>n+(x.im||0),0),na=filtered.reduce((n,x)=>n+(x.na||0),0),pi=filtered.reduce((n,x)=>n+(x.pi||0),0),ni=filtered.reduce((n,x)=>n+(x.ni||0),0),pending=filtered.reduce((n,x)=>n+(x.pending||0),0);
 $("#dashboardNotice").textContent=history.length?"Consolidado local: "+filtered.length+" inspeção(ões) no filtro atual. O histórico não é compartilhado entre dispositivos ou usuários.":"Ainda não há inspeções concluídas neste navegador. Os indicadores serão alimentados após a geração dos relatórios.";
 const metrics=[["Inspeções concluídas",filtered.length,"Todos os módulos"],["Conformidade média",avg===null?"—":avg.toFixed(1).replace(".",",")+"%","Somente módulos pontuados"],["Critérios não conformes",ni,"Classificação NI"],["Pendências de avaliação",pending,"Itens sem classificação/condição"]];
 $("#dashboardMetrics").innerHTML=metrics.map(x=>'<article class="metric-card"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><small>'+x[2]+'</small></article>').join("");
 const counts=sectors.map(s=>({name:s.name,count:filtered.filter(x=>x.sector===s.id).length})),max=Math.max(1,...counts.map(x=>x.count));
 $("#moduleBreakdown").innerHTML=counts.map(x=>'<div class="bar-row"><div><span>'+x.name+'</span><b>'+x.count+'</b></div><div class="bar-track"><i style="width:'+(x.count/max*100)+'%"></i></div></div>').join("");
 $("#ratingBreakdown").innerHTML=[["IM/OM",im,"im"],["NA",na,"na"],["PI",pi,"pi"],["NI",ni,"ni"]].map(x=>'<div class="rating-stat"><span class="legend '+x[2]+'">'+x[0]+'</span><strong>'+x[1]+'</strong></div>').join("");
 $("#dashboardCoverage").textContent=totalEvaluated+" critérios avaliados nos módulos pontuados. FG Moradia: "+moradia.length+" vistoria(s), apresentados separadamente (sem percentual de conformidade).";
 const months=[];for(let n=5;n>=0;n--){const d=new Date(now.getFullYear(),now.getMonth()-n,1),key=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");months.push({key,label:d.toLocaleDateString("pt-BR",{month:"short",year:"2-digit"}),count:filtered.filter(x=>(x.completedAt||x.savedAt||x.date||"").slice(0,7)===key).length});}
 const peak=Math.max(1,...months.map(x=>x.count));$("#monthlyTrend").innerHTML=months.map(x=>'<div class="trend-item"><span>'+x.label+'</span><div class="bar-track"><i style="width:'+(x.count/peak*100)+'%"></i></div><b>'+x.count+'</b></div>').join("");
 $("#dashboardUpdated").textContent=history.length?"Último registro local: "+new Date(history[0].completedAt||history[0].savedAt).toLocaleString("pt-BR")+". Histórico limitado aos 500 registros mais recentes.":"Os indicadores serão atualizados ao gerar relatórios.";
}
function renderHome(){
 const collaboratorInput=$('input[name="colaborador"]');
 if(collaboratorInput){collaboratorInput.required=false;collaboratorInput.disabled=true;}
 $("#homeView").classList.remove("hidden");$("#inspectionView").classList.add("hidden");
 $("#sectorGrid").innerHTML=sectors.map(s=>'<button class="sector-card" data-sector="'+s.id+'"><div class="sector-icon">'+s.icon+'</div><h3>'+s.name+'</h3><p>'+s.desc+'</p><div class="card-foot"><span>'+(s.mode==="moradia"?"VISTORIA DE ENTREGA":s.items.length+" VERIFICAÇÕES")+'</span><span>ACESSAR →</span></div></button>').join("");
 document.querySelectorAll("[data-sector]").forEach(b=>b.addEventListener("click",()=>openSector(b.dataset.sector)));
 renderDashboard();
}
const moradiaAreas={
 "Quarto":["Porta, maçaneta e fechadura em boas condições","Paredes e pintura sem manchas, trincas ou danos aparentes","Piso e rodapés íntegros, sem peças soltas ou quebradas","Janela, vidros, trilhos e fechos funcionando adequadamente","Tomadas, interruptores e pontos de iluminação funcionando"],
 "Banheiro":["Porta, maçaneta e fechadura em boas condições","Louças sanitárias íntegras e sem vazamentos","Torneiras, registros e metais funcionando, sem gotejamentos","Descarga funcionando adequadamente","Box, vidros e vedações em boas condições","Piso, paredes e rejuntes íntegros","Ralo e escoamento da água funcionando","Ventilação e iluminação funcionando"],
 "Sala":["Paredes, pintura, teto e acabamento em boas condições","Piso e rodapés íntegros","Portas, janelas, vidros e fechaduras funcionando","Tomadas, interruptores e iluminação funcionando"],
 "Cozinha":["Bancada, cuba e acabamento sem danos","Torneira e sifão sem vazamentos","Pontos hidráulicos e esgoto funcionando","Revestimentos, rejuntes e piso íntegros","Tomadas, interruptores e iluminação funcionando"],
 "Varanda":["Piso, rodapés e revestimentos íntegros","Guarda-corpo e elementos de proteção firmes e sem danos aparentes","Ralos e escoamento da água funcionando","Esquadrias, vidros e fechamento funcionando","Pintura e acabamento em boas condições"],
 "Móveis e eletrodomésticos":["Armários, portas e gavetas alinhados e funcionando","Dobradiças, corrediças e puxadores íntegros","Bancadas e tampos sem riscos, trincas ou danos aparentes","Fixação dos móveis firme e segura","Acabamentos, fitas de borda e revestimentos íntegros","Quantidade e itens de mobiliário conferem com a relação de entrega","Eletrodomésticos previstos na entrega estão presentes e correspondem à relação de entrega","Eletrodomésticos apresentam integridade física, sem avarias aparentes","Eletrodomésticos ligam e apresentam funcionamento básico adequado","Cabos, plugues, tomadas e conexões aparentam estar íntegros e seguros","Instalação e posicionamento dos eletrodomésticos estão adequados, sem obstruções ou riscos aparentes"]
};
function buildMoradiaItems(n){
 const a=[];for(let r=1;r<=n;r++)moradiaAreas.Quarto.forEach(q=>a.push({area:"Quarto "+r,question:q}));
 ["Banheiro","Sala","Cozinha","Varanda","Móveis e eletrodomésticos"].forEach(k=>moradiaAreas[k].forEach(q=>a.push({area:k,question:q})));return a;
}
function chooseInspectionDraft(sectorId){const drafts=listDrafts(sectorId);if(!drafts.length)return Promise.resolve({mode:"new"});return new Promise(resolve=>{const dlg=$("#draftDialog"),list=dlg.querySelector("#draftOptions");list.innerHTML=drafts.map(d=>'<div class="draft-option"><div><b>'+esc(d.form?.obra||"Obra não informada")+'</b><small>Data: '+esc(d.form?.data||"—")+' · Salvo: '+esc(new Date(d.savedAt||Date.now()).toLocaleString("pt-BR"))+'</small></div><div class="draft-actions"><button type="button" data-choice="continue" data-id="'+esc(d.inspectionId)+'">Continuar</button><button type="button" data-choice="discard" data-id="'+esc(d.inspectionId)+'">Descartar</button></div></div>').join("");const finish=v=>{dlg.close();resolve(v);};dlg.querySelector("#newInspection").onclick=()=>finish({mode:"new"});dlg.querySelector("#cancelDrafts").onclick=()=>finish({cancelled:true});dlg.oncancel=e=>{e.preventDefault();finish({cancelled:true});};dlg.onclick=e=>{if(e.target===dlg)finish({cancelled:true});};list.querySelectorAll("[data-choice]").forEach(b=>b.onclick=async()=>{const d=drafts.find(x=>x.inspectionId===b.dataset.id);if(b.dataset.choice==="discard"){if(!confirm("Descartar definitivamente este rascunho e suas fotos?"))return;try{localStorage.removeItem(DRAFT_PREFIX+d.inspectionId);await clearSectorPhotos(d.inspectionId);}catch(e){alert("Não foi possível descartar; os dados foram preservados.");return;}finish({mode:"new"});}else finish({mode:"continue",draft:d});});dlg.showModal();});}
async function openSector(id){
 state.sector=sectors.find(s=>s.id===id);state.ratings={};state.files={};state.gps=null;state.roomCount=1;
 const choice=await chooseInspectionDraft(id);if(choice.cancelled)return;const savedDraft=choice.draft,resume=choice.mode==="continue";
 state.inspectionId=resume?savedDraft.inspectionId:newInspectionId();
 $("#gpsStatus").textContent="Localização opcional. Será exibido apenas o link para o mapa no relatório.";$("#captureGps").textContent="Registrar localização por GPS";
 $("#homeView").classList.add("hidden");$("#inspectionView").classList.remove("hidden");
 $("#sectorTitle").textContent=state.sector.name;$("#sectorDescription").textContent=state.sector.desc;
 const collaboratorInput=$('input[name="colaborador"]');
 const isMoradia=state.sector.mode==="moradia";
 collaboratorInput.disabled=!isMoradia;
 collaboratorInput.required=isMoradia;
 if(isMoradia){
  $("#collaboratorField").classList.remove("hidden");
  $("#scoreValue").closest(".score-card").classList.add("hidden");renderMoradia(resume?Math.max(1,Math.min(4,Number(savedDraft.roomCount)||1)):1);
 }else{
  $("#collaboratorField").classList.add("hidden");
  $("#scoreValue").closest(".score-card").classList.remove("hidden");$(".legend").classList.remove("hidden");
  $("#sectorCount").textContent=state.sector.items.length+" CRITÉRIOS DE VERIFICAÇÃO";
  $("#questionList").innerHTML=state.sector.items.map((q,i)=>'<article class="question" data-q="'+i+'"><div class="question-top"><div><span class="question-number">CRITÉRIO '+String(i+1).padStart(2,"0")+'</span><h4>'+esc(q[0])+'</h4><div class="reference">Referência: '+esc(q[1])+'</div></div><div class="rating" role="group" aria-label="Avaliação do critério '+(i+1)+'">'+[["IM/OM","im"],["NA","na"],["PI","pi"],["NI","ni"]].map(x=>'<button type="button" class="r-'+x[1]+'" data-rate="'+x[0]+'" aria-pressed="false">'+x[0]+'</button>').join("")+'</div></div><div class="question-details"><label>Observação / constatação<input data-field="obs" placeholder="Descreva a condição encontrada"></label><label>Evidências fotográficas<input data-field="foto" type="file" accept="image/*" multiple capture="environment"><small class="photo-help">Até 5 imagens por critério. Fotos salvas neste dispositivo.</small></label><div class="photo-gallery" aria-live="polite"></div></div></article>').join("");
  bindStandardCards();
 }
 if(resume){try{state.files=await readInspectionPhotos(state.inspectionId);}catch(err){state.files={};}}
 if(resume){
  const form=$("#inspectionForm");Object.entries(savedDraft.form||{}).forEach(([name,value])=>{const field=form.elements.namedItem(name);if(field&&typeof value==="string")field.value=value;});
  state.inspectionId=savedDraft.inspectionId||state.inspectionId;state.gps=savedDraft.gps||null;state.ratings=savedDraft.ratings||{};
  (savedDraft.items||[]).forEach((item,i)=>{const card=document.querySelector('[data-q="'+i+'"]');if(!card)return;const obs=card.querySelector('[data-field="obs"]');if(obs)obs.value=item.obs||"";const status=card.querySelector('[data-field="status"]');if(status)status.value=item.status||"";const rating=card.querySelector('[data-rate="'+(state.ratings[i]||"")+'"]');if(rating)rating.setAttribute("aria-pressed","true");});
  if(state.gps){$("#gpsStatus").textContent="Localização do rascunho recuperada.";$("#captureGps").textContent="Atualizar localização";}
 }
 document.querySelectorAll("[data-q]").forEach(card=>renderPhotoGallery(card,+card.dataset.q));
 const date=$('input[name="data"]');if(!date.value)date.value=new Date().toISOString().slice(0,10);
 updateScore();window.scrollTo({top:0,behavior:"smooth"});
}
function bindPhotoInput(card){
 const input=card.querySelector('[data-field="foto"]');if(!input)return;
 input.addEventListener("change",async e=>{const i=+card.dataset.q,selected=Array.from(e.target.files||[]),current=state.files[i]||[],remaining=5-current.length;if(!selected.length)return;if(remaining<=0){alert("Limite de 5 fotos por item.");input.value="";return;}try{const added=await Promise.all(selected.slice(0,remaining).map(imageAsDataURL));state.files[i]=current.concat(added);renderPhotoGallery(card,i);await storePhotos(state.inspectionId,i,state.files[i]);}catch(err){alert(err.message||"Falha ao adicionar as fotos.");}input.value="";});
}
function bindStandardCards(){
 document.querySelectorAll("[data-q]").forEach(card=>{
  card.querySelectorAll("[data-rate]").forEach(btn=>btn.addEventListener("click",()=>{const i=+card.dataset.q;state.ratings[i]=btn.dataset.rate;card.querySelectorAll("[data-rate]").forEach(x=>x.setAttribute("aria-pressed",String(x===btn)));updateScore();}));
  bindPhotoInput(card);
 });
}
function renderMoradia(n){
 state.roomCount=n;state.sector.items=buildMoradiaItems(n);
 $("#sectorCount").textContent=n+" quarto(s) · "+state.sector.items.length+" itens · sem pontuação";
 $("#checklistToolbarTitle").textContent="Vistoria do apartamento";$("#checklistToolbarHelp").textContent="Registre a condição de cada item: conforme, ajuste necessário ou não aplicável.";
 $(".legend").classList.add("hidden");
 const groups={};state.sector.items.forEach((item,i)=>(groups[item.area]??=[]).push({item:item,i:i}));
 let html='<div class="form-panel room-selector"><label>Quantidade de quartos<select id="roomCount"><option value="1" '+(n===1?'selected':'')+'>1 quarto</option><option value="2" '+(n===2?'selected':'')+'>2 quartos</option><option value="3" '+(n===3?'selected':'')+'>3 quartos</option><option value="4" '+(n===4?'selected':'')+'>4 quartos</option></select></label><p class="muted">Serão vistoriados os quartos informados, banheiro, sala, cozinha, varanda e móveis.</p></div>';
 Object.keys(groups).forEach(area=>{
  html+='<section class="moradia-area"><h3>'+esc(area)+'</h3>';
  groups[area].forEach(entry=>{
   const i=entry.i,item=entry.item;
   html+='<article class="question moradia-question" data-q="'+i+'"><div class="question-top"><div><span class="question-number">ITEM '+String(i+1).padStart(2,"0")+'</span><h4>'+esc(item.question)+'</h4></div><label class="status-field">Condição<select data-field="status"><option value="">Selecionar</option><option value="Conforme">Conforme</option><option value="Ajuste necessário">Ajuste necessário</option><option value="Não aplicável">Não aplicável</option></select></label></div><div class="question-details"><label>Observação / apontamento<input data-field="obs" placeholder="Descreva o problema ou detalhe relevante"></label><label>Evidências fotográficas<input data-field="foto" type="file" accept="image/*" multiple capture="environment"><small class="photo-help">Até 5 imagens por item.</small></label><div class="photo-gallery" aria-live="polite"></div></div></article>';
  });html+='</section>';
 });
 $("#questionList").innerHTML=html;
 $("#roomCount").addEventListener("change",async e=>{if(confirm("Alterar a quantidade de quartos? Os registros e fotos desta vistoria serão reiniciados para evitar associação incorreta de evidências.")){const previousId=state.inspectionId;try{await clearSectorPhotos(previousId);localStorage.removeItem(DRAFT_PREFIX+previousId);if(localStorage.getItem(DRAFT_PREFIX+state.sector.id)){const legacy=JSON.parse(localStorage.getItem(DRAFT_PREFIX+state.sector.id)||"null");if(legacy?.inspectionId===previousId)localStorage.removeItem(DRAFT_PREFIX+state.sector.id);}}catch(err){}state.files={};state.ratings={};state.inspectionId=newInspectionId();$("#inspectionForm").reset();renderMoradia(+e.target.value);updateScore();}else e.target.value=String(state.roomCount);});
 document.querySelectorAll("[data-q]").forEach(bindPhotoInput);
 document.querySelectorAll("[data-field=status]").forEach(sel=>sel.addEventListener("change",updateScore));
}
function updateScore(){
 if(state.sector?.mode==="moradia"){const total=state.sector.items.length,done=Array.from(document.querySelectorAll("[data-field=status]")).filter(x=>x.value).length;$("#scoreCaption").textContent=done+" de "+total+" itens registrados";$("#progressBar").style.width=(total?done/total*100:0)+"%";return;}
 const result=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length),done=result.evaluated+result.counts.na,total=state.sector.items.length;
 $("#scoreValue").textContent=result.score===null?"—":result.score.toFixed(1).replace(".",",")+"%";$("#scoreCaption").textContent=done+" de "+total+" avaliados";$("#progressBar").style.width=(done/total*100)+"%";
}
const APP_VERSION="2.0.0";
function canonicalize(value){if(Array.isArray(value))return"["+value.map(canonicalize).join(",")+"]";if(value&&typeof value==="object")return"{"+Object.keys(value).sort().map(k=>JSON.stringify(k)+":"+canonicalize(value[k])).join(",")+"}";return JSON.stringify(value);}
async function hashValue(value){const bytes=new TextEncoder().encode(typeof value==="string"?value:canonicalize(value));const digest=await window.crypto.subtle.digest("SHA-256",bytes);return Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,"0")).join("");}
async function buildIntegrity(data){const generatedAt=new Date().toISOString();if(!window.crypto?.subtle)return{generatedAt,hash:null,version:APP_VERSION};try{const photoHashes={};for(const [i,list] of Object.entries(state.files)){photoHashes[i]=[];for(const p of list||[])photoHashes[i].push({name:p.name,sha256:await hashValue(p.dataUrl)});}const payload={inspectionId:state.inspectionId,sector:state.sector.id,form:data,ratings:state.ratings,items:Array.from(document.querySelectorAll("[data-q]")).map(card=>({index:card.dataset.q,observation:card.querySelector('[data-field="obs"]')?.value||"",status:card.querySelector('[data-field="status"]')?.value||""})),gps:state.gps,photoHashes,generatedAt,version:APP_VERSION};return{generatedAt,hash:await hashValue(payload),version:APP_VERSION};}catch(e){return{generatedAt,hash:null,version:APP_VERSION};}}
function integrityFooterMarkup(){const x=state.reportIntegrity||{};return '<section style="margin-top:28px;padding-top:10px;border-top:1px solid #ccd6d8;font:9px Arial;overflow-wrap:anywhere"><b>Integridade do relatório</b><br>Gerado em: '+esc(x.generatedAt||"—")+'<br>Versão: '+esc(x.version||APP_VERSION)+' · ID: '+esc(state.inspectionId)+'<br>SHA-256: '+esc(x.hash||"Hash indisponível neste navegador")+'</section>';}
function formData(){const f=new FormData($("#inspectionForm"));return Object.fromEntries(f.entries())}
async function waitForReportAssets(container,timeoutMs=10000){const images=Array.from(container.querySelectorAll("img"));await Promise.all(images.map(img=>new Promise(resolve=>{let settled=false;const finish=()=>{if(settled)return;settled=true;resolve();};const timer=setTimeout(finish,timeoutMs);if(typeof img.decode==="function"){img.decode().catch(()=>{}).finally(()=>{clearTimeout(timer);finish();});}else if(img.complete){clearTimeout(timer);finish();}else{img.addEventListener("load",()=>{clearTimeout(timer);finish();},{once:true});img.addEventListener("error",()=>{clearTimeout(timer);finish();},{once:true});}})));if(document.fonts?.ready)await Promise.race([document.fonts.ready.catch(()=>{}),new Promise(resolve=>setTimeout(resolve,timeoutMs))]);}
async function showReportInPage(html){const parsed=new DOMParser().parseFromString(html,"text/html"),viewer=$("#reportViewer"),content=$("#reportContent");const oldStyle=$("#generatedReportStyle");if(oldStyle)oldStyle.remove();const reportCss=Array.from(parsed.head.querySelectorAll("style")).map(x=>x.textContent).join("\n").replace(/\bbody(?=\s*[{.#[:])/g,"#reportContent");const style=document.createElement("style");style.id="generatedReportStyle";style.textContent=reportCss;document.head.appendChild(style);content.innerHTML=parsed.body.innerHTML;content.querySelector(".report-toolbar")?.remove();viewer.hidden=false;viewer.setAttribute("aria-hidden","false");$("#reportPrint").focus();await waitForReportAssets(content);content.scrollTop=0;viewer.scrollTop=0;}
function closeReportViewer(){const viewer=$("#reportViewer");viewer.hidden=true;viewer.setAttribute("aria-hidden","true");$("#reportPrint").blur();}
async function reportHtml(data){
 const logoUrl=new URL("logo-fg.png",location.href).href;state.reportIntegrity=await buildIntegrity(data);
 if(state.sector.mode==="moradia"){
  const rows=await Promise.all(state.sector.items.map(async(item,i)=>{
   const card=document.querySelector('[data-q="'+i+'"]'),status=card.querySelector('[data-field="status"]').value||"Não preenchido",obs=card.querySelector('[data-field="obs"]').value,photos=state.files[i]||[],photoHtml=photos.length?'<div class="report-photos">'+photos.map(p=>'<figure><img src="'+p.dataUrl+'" alt="'+esc(p.name)+'"><figcaption>'+esc(p.name)+'</figcaption></figure>').join("")+'</div>':"—";
   return '<tr><td>'+esc(item.area)+'</td><td>'+esc(item.question)+'</td><td>'+esc(status)+'</td><td>'+esc(obs||"—")+'</td><td>'+photoHtml+'</td></tr>';
  }));
  return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>FG Moradia - Vistoria de Entrega</title><style>.report-toolbar{display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:18px;background:#eef4f5;border:1px solid #d9e2e3;border-radius:8px;font:13px Arial}.report-toolbar button{background:#135c6c;color:#fff;border:0;border-radius:5px;padding:9px 14px;cursor:pointer}.report-toolbar span{color:#52666b}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}}body{font:11px Arial;color:#24383d;margin:28px}h1{font-size:22px;color:#135c6c}.report-header{display:flex;align-items:center;gap:20px;border-bottom:3px solid #135c6c;padding:0 0 14px;margin-bottom:18px}.report-header img{display:block;flex:0 0 auto;width:170px;height:76px;max-height:none;box-sizing:border-box;object-fit:contain;padding:9px 12px;background:#f1f5f5;border:1px solid #c8d8dc;border-left:5px solid #135c6c;border-radius:6px;print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header h1{margin:0;line-height:1.2}h2{font-size:15px;color:#135c6c;margin-top:24px}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f1f5f5;padding:12px;margin:14px 0}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #d9e2e3;padding:7px;text-align:left;vertical-align:top}th{background:#eaf1f2}.report-photos{display:flex;flex-wrap:wrap;gap:6px}.report-photos figure{margin:0;width:105px;break-inside:avoid}.report-photos img{width:100%;height:80px;object-fit:contain;border:1px solid #d9e2e3}.report-photos figcaption{font-size:8px;overflow-wrap:anywhere}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}body{margin:12mm}tr{break-inside:avoid}}</style></head><body><div class="report-toolbar no-print"><button type="button" onclick="window.print()">Imprimir / Salvar em PDF</button><span>Na janela de impressão, selecione “Salvar como PDF”.</span></div><header class="report-header"><img src="'+logoUrl+'" alt="FG Empreendimentos"><h1>FG MORADIA | VISTORIA DE ENTREGA</h1></header><div class="meta"><div><b>ID da inspeção:</b> '+esc(state.inspectionId)+'</div><div><b>Empreendimento / unidade:</b> '+esc(data.obra)+'</div><div><b>Empresa:</b> '+esc(data.empresa||"—")+'</div><div><b>Data da vistoria:</b> '+esc(data.data)+'</div><div><b>Responsável:</b> '+esc(data.responsavel)+'</div><div><b>Colaborador:</b> '+esc(data.colaborador||"—")+'</div><div><b>Localização da unidade:</b> '+esc(data.local||"—")+'</div><div><b>Quantidade de quartos:</b> '+state.roomCount+'</div>'+gpsReportMarkup()+'</div><h2>Checklist de entrega do apartamento</h2><table><thead><tr><th>Ambiente</th><th>Item verificado</th><th>Condição</th><th>Observação / apontamento</th><th>Fotos</th></tr></thead><tbody>'+rows.join("")+'</tbody></table><h2>Considerações gerais</h2><p>'+esc(data.consideracoes||"Não informado.")+'</p><p style="margin-top:35px">________________________________________<br>Responsável pela vistoria</p><p style="margin-top:35px">________________________________________<br>Colaborador(a) recebedor(a)</p>'+integrityFooterMarkup()+'</body></html>';
 }
 const order=["IM/OM","NA","PI","NI"],records=state.sector.items.map((q,i)=>({i,q,r:state.ratings[i]||"PENDENTE",card:document.querySelector('[data-q="'+i+'"]')}));
 const rows=(await Promise.all(order.flatMap(r=>records.filter(x=>x.r===r).map(async x=>{const obs=x.card.querySelector('[data-field="obs"]').value,photos=state.files[x.i]||[],photoHtml=photos.length?'<div class="report-photos">'+photos.map(p=>'<figure><img src="'+p.dataUrl+'" alt="'+esc(p.name)+'"><figcaption>'+esc(p.name)+'</figcaption></figure>').join("")+'</div>':"—";return '<tr><td>'+(x.i+1)+'</td><td>'+esc(x.q[0])+'<br><small>'+esc(x.q[1])+'</small></td><td>'+r+'</td><td>'+esc(obs||"—")+'</td><td>'+photoHtml+'</td></tr>';})))).join("");
 const vals=Object.values(state.ratings),scoreResult=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length),score=scoreResult.score;
 return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório Auditoria 360</title><style>.report-toolbar{display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:18px;background:#eef4f5;border:1px solid #d9e2e3;border-radius:8px;font:13px Arial}.report-toolbar button{background:#135c6c;color:#fff;border:0;border-radius:5px;padding:9px 14px;cursor:pointer}.report-toolbar span{color:#52666b}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}}body{font:11px Arial;color:#24383d;margin:28px}h1{font-size:22px;color:#135c6c}.report-header{display:flex;align-items:center;gap:20px;border-bottom:3px solid #135c6c;padding:0 0 14px;margin-bottom:18px}.report-header img{display:block;flex:0 0 auto;width:170px;height:76px;max-height:none;box-sizing:border-box;object-fit:contain;padding:9px 12px;background:#f1f5f5;border:1px solid #c8d8dc;border-left:5px solid #135c6c;border-radius:6px;print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header h1{margin:0;line-height:1.2}.report-header h1{margin:0}h2{font-size:15px;margin-top:24px;color:#135c6c}p{line-height:1.5}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f1f5f5;padding:12px}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #d9e2e3;padding:7px;text-align:left;vertical-align:top}th{background:#eaf1f2}.report-photos{display:flex;flex-wrap:wrap;gap:6px}.report-photos figure{margin:0;width:110px;break-inside:avoid}.report-photos img{width:100%;height:85px;object-fit:contain;border:1px solid #d9e2e3}.report-photos figcaption{font-size:8px;overflow-wrap:anywhere}small{color:#64777c}.score{font-size:22px;font-weight:bold;color:#135c6c}@page{size:A4;margin:12mm}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}body{margin:0}table{width:100%;break-inside:auto}thead{display:table-header-group}tfoot{display:table-footer-group}tr,figure,img{break-inside:avoid;page-break-inside:avoid}h2{break-after:avoid-page}a{color:inherit;text-decoration:none}}</style></head><body><div class="report-toolbar no-print"><button type="button" onclick="window.print()">Imprimir / Salvar em PDF</button><span>Na janela de impressão, selecione “Salvar como PDF”.</span></div><header class="report-header"><img src="'+logoUrl+'" alt="FG Empreendimentos"><h1>AUDITORIA 360 | RELATÓRIO DE INSPEÇÃO</h1></header><p><b>Setor:</b> '+state.sector.name+'</p><div class="meta"><div><b>ID da inspeção:</b> '+esc(state.inspectionId)+'</div><div><b>Obra:</b> '+esc(data.obra)+'</div><div><b>Empresa:</b> '+esc(data.empresa||"—")+'</div><div><b>Data:</b> '+esc(data.data)+'</div><div><b>Responsável:</b> '+esc(data.responsavel)+'</div><div><b>Local:</b> '+esc(data.local||"—")+'</div>'+gpsReportMarkup()+'</div><h2>Resultado da avaliação</h2><p class="score">'+(score===null?"Não calculável":score.toFixed(1).replace(".",",")+"%")+' de conformidade</p><p>Critérios avaliados: '+scoreResult.evaluated+'/'+state.sector.items.length+' · IM/OM: '+scoreResult.counts.im+' · NA: '+scoreResult.counts.na+' · PI: '+scoreResult.counts.pi+' · NI: '+scoreResult.counts.ni+' · Pendentes: '+scoreResult.pending+'</p><h2>Detalhamento dos critérios</h2><table><thead><tr><th>#</th><th>Critério / referência</th><th>Classificação</th><th>Observação</th><th>Arquivos de evidência</th></tr></thead><tbody>'+rows+'</tbody></table><h2>Considerações gerais</h2><p>'+esc(data.consideracoes||"Não informado.")+'</p><p style="margin-top:35px">________________________________________<br>Responsável pela inspeção</p>'+integrityFooterMarkup()+'</body></html>';
}
function gpsReportMarkup(){
 if(!state.gps)return '<div><b>Localização:</b> Não registrada</div>';
 const url='https://www.google.com/maps?q='+encodeURIComponent(state.gps.latitude+','+state.gps.longitude);
 return '<div><b>Localização:</b> <a href="'+url+'" target="_blank" rel="noopener">Visualizar localização no mapa</a></div>';
}
$("#captureGps").addEventListener("click",()=>{
 if(!navigator.geolocation){$("#gpsStatus").textContent="Este navegador não oferece suporte à localização.";return;}
 $("#captureGps").disabled=true;$("#gpsStatus").textContent="Obtendo localização. Aguarde...";
 navigator.geolocation.getCurrentPosition(pos=>{
  state.gps={latitude:pos.coords.latitude,longitude:pos.coords.longitude,accuracy:pos.coords.accuracy,capturedAt:new Date().toISOString()};
  $("#gpsStatus").textContent="Localização registrada. Precisão estimada: "+Math.round(pos.coords.accuracy)+" m.";
  $("#captureGps").textContent="Atualizar localização";$("#captureGps").disabled=false;
 },err=>{
  const msg=err.code===1?"Permissão de localização negada.":err.code===2?"Não foi possível determinar a localização.":"Tempo esgotado ao obter a localização.";
  $("#gpsStatus").textContent=msg+" A vistoria pode continuar sem GPS.";$("#captureGps").disabled=false;
 },{enableHighAccuracy:true,timeout:15000,maximumAge:0});
});
$("#inspectionForm").addEventListener("submit",async e=>{e.preventDefault();if(!$("#inspectionForm").reportValidity())return;if(state.sector.mode==="moradia"){if(!formData().colaborador?.trim()){alert("Informe o colaborador recebedor para concluir a vistoria FG Moradia.");$('input[name="colaborador"]').focus();return;}const pending=Array.from(document.querySelectorAll("[data-field=status]")).filter(x=>!x.value).length;if(pending&&!confirm("Existem "+pending+" itens sem condição registrada. Deseja gerar o relatório mesmo assim?"))return;}else if(Object.keys(state.ratings).length!==state.sector.items.length){if(!confirm("Existem critérios sem classificação. Deseja gerar o relatório mesmo assim?"))return;}try{const html=await reportHtml(formData());await showReportInPage(html);const saved=saveInspectionHistory();if(saved){renderDashboard();$("#dashboardUpdated").textContent="Inspeção registrada em "+new Date().toLocaleString("pt-BR")+". Histórico local confirmado."; }else{$("#dashboardUpdated").textContent="Não foi possível confirmar a gravação do histórico neste navegador.";alert("O relatório foi preparado, mas o histórico não pôde ser gravado. Verifique o armazenamento do navegador.");} }catch(err){console.error("Falha ao preparar relatório:",err);alert("Não foi possível preparar o relatório: "+(err?.message||err));}});
$("#saveDraft").addEventListener("click",()=>{const items=Array.from(document.querySelectorAll("[data-q]")).map(card=>({obs:card.querySelector('[data-field="obs"]')?.value||"",status:card.querySelector('[data-field="status"]')?.value||""}));const data={version:3,sector:state.sector.id,inspectionId:state.inspectionId,roomCount:state.roomCount,ratings:state.ratings,items,form:formData(),gps:state.gps,savedAt:new Date().toISOString()};try{localStorage.setItem(DRAFT_PREFIX+state.inspectionId,JSON.stringify(data));saveDraftIndex(data);alert("Rascunho salvo neste dispositivo. As fotos permanecem vinculadas a esta inspeção.");}catch(e){alert("Não foi possível salvar o rascunho neste navegador.");}});
$("#dashboardModule").addEventListener("change",renderDashboard);$("#dashboardPeriod").addEventListener("change",renderDashboard);
$("#reportPrint").addEventListener("click",async()=>{try{await waitForReportAssets($("#reportContent"));}catch(err){console.warn("Não foi possível aguardar todos os recursos do relatório:",err);}requestAnimationFrame(()=>window.print());});$("#reportClose").addEventListener("click",closeReportViewer);$("#clearDashboard").addEventListener("click",()=>{if(confirm("Excluir todo o histórico de indicadores salvo neste navegador? Essa ação não poderá ser desfeita.")){localStorage.removeItem(HISTORY_KEY);renderDashboard();}});window.addEventListener("storage",e=>{if(e.key===HISTORY_KEY)renderDashboard();});
$("#backHome").addEventListener("click",renderHome);$("#homeLink").addEventListener("click",e=>{e.preventDefault();renderHome()});migrateLegacyDrafts();migrateLegacyPhotos();requestStoragePersistence();renderHome();