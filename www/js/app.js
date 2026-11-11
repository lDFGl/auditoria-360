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
const state={sector:null,ratings:{},actionPlans:{},files:{},gps:null,roomCount:1,inspectionId:null,reportCode:null};
const DRAFT_PREFIX="auditoria360-draft-";
function newInspectionId(){const bytes=new Uint8Array(12);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(bytes);else for(let i=0;i<bytes.length;i++)bytes[i]=Math.floor(Math.random()*256);return "AI360-"+new Date().toISOString().replace(/[-:TZ.]/g,"").slice(0,14)+"-"+Array.from(bytes,b=>b.toString(16).padStart(2,"0")).join("").toUpperCase();}
const DRAFT_INDEX_KEY="auditoria360-draft-index-v2";
function listDrafts(sectorId){const out=[],seen=new Set();for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(!k||!k.startsWith(DRAFT_PREFIX))continue;try{const d=JSON.parse(localStorage.getItem(k)||"null");if(d&&d.sector===sectorId&&d.inspectionId&&k!==DRAFT_PREFIX+d.sector&&!seen.has(d.inspectionId)){seen.add(d.inspectionId);out.push(d);}}catch(e){}}return out.sort((x,y)=>String(y.savedAt||"").localeCompare(String(x.savedAt||"")));}
function saveDraftIndex(d){try{const a=JSON.parse(localStorage.getItem(DRAFT_INDEX_KEY)||"[]").filter(x=>x.inspectionId!==d.inspectionId);a.unshift({inspectionId:d.inspectionId,sector:d.sector,obra:d.form?.obra||"",date:d.form?.data||"",savedAt:d.savedAt});localStorage.setItem(DRAFT_INDEX_KEY,JSON.stringify(a));}catch(e){}}
function getDraft(id){try{const raw=localStorage.getItem(DRAFT_PREFIX+id);return raw?JSON.parse(raw):null;}catch(e){return null;}}
function migrateLegacyDrafts(){const index=[];for(const sector of sectors){try{const d=JSON.parse(localStorage.getItem(DRAFT_PREFIX+sector.id)||"null");if(!d)continue;if(!d.inspectionId)d.inspectionId=newInspectionId();d.sector=d.sector||sector.id;d.version=3;const key=DRAFT_PREFIX+d.inspectionId;if(!localStorage.getItem(key))localStorage.setItem(key,JSON.stringify(d));localStorage.setItem(DRAFT_PREFIX+sector.id,JSON.stringify(d));index.push({inspectionId:d.inspectionId,sector:d.sector,obra:d.form?.obra||"",date:d.form?.data||"",savedAt:d.savedAt||new Date().toISOString()});}catch(e){}}try{localStorage.setItem(DRAFT_INDEX_KEY,JSON.stringify(index));}catch(e){}}
function clearSectorPhotos(inspectionId){return openPhotoDB().then(db=>new Promise((resolve,reject)=>{const tx=db.transaction("photos","readwrite"),store=tx.objectStore("photos"),req=store.getAllKeys();req.onsuccess=()=>req.result.filter(k=>String(k).startsWith(inspectionId+":")).forEach(k=>store.delete(k));tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error);};}));}

const PHOTO_DB="auditoria360-evidencias";
function openPhotoDB(){return new Promise((resolve,reject)=>{if(!("indexedDB" in window)){reject(new Error("IndexedDB indisponível"));return;}const req=indexedDB.open(PHOTO_DB,3);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains("photos"))req.result.createObjectStore("photos");if(!req.result.objectStoreNames.contains("reports"))req.result.createObjectStore("reports");};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function storePhotos(inspectionId,index,photos){const db=await openPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("photos","readwrite"),store=tx.objectStore("photos"),key=inspectionId+":"+index;if(photos.length)store.put(photos,key);else store.delete(key);tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error);};});}
async function readInspectionPhotos(inspectionId){const db=await openPhotoDB();return new Promise((resolve,reject)=>{const tx=db.transaction("photos","readonly"),store=tx.objectStore("photos"),req=store.getAllKeys(),out={};req.onsuccess=()=>{const keys=req.result.filter(k=>String(k).startsWith(inspectionId+":"));if(!keys.length){db.close();resolve(out);return;}let pending=keys.length;keys.forEach(key=>{const r=store.get(key);r.onsuccess=()=>{out[String(key).slice(inspectionId.length+1)]=r.result||[];if(!--pending){db.close();resolve(out);}};r.onerror=()=>{db.close();reject(r.error);};});};req.onerror=()=>{db.close();reject(req.error);};});}
async function migrateLegacyPhotos(){try{const db=await openPhotoDB();const keys=await new Promise((resolve,reject)=>{const r=db.transaction("photos","readonly").objectStore("photos").getAllKeys();r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});db.close();for(const sector of sectors){const old=(()=>{try{return JSON.parse(localStorage.getItem(DRAFT_PREFIX+sector.id)||"null");}catch(e){return null;}})();if(!old?.inspectionId)continue;const legacy=keys.filter(k=>String(k).startsWith(sector.id+":"));if(!legacy.length)continue;const db2=await openPhotoDB();await new Promise((resolve,reject)=>{const tx=db2.transaction("photos","readwrite"),store=tx.objectStore("photos");let remaining=legacy.length;legacy.forEach(key=>{const r=store.get(key);r.onsuccess=()=>{store.put(r.result,old.inspectionId+":"+String(key).slice(sector.id.length+1));if(!--remaining)resolve();};r.onerror=()=>reject(r.error);});tx.onerror=()=>reject(tx.error);});db2.close();}}catch(e){console.warn("Migração de fotos antigas não concluída; os registros originais foram mantidos.",e);}}
function imageAsDataURL(file){return new Promise((resolve,reject)=>{if(!file.type.startsWith("image/")){reject(new Error("Selecione somente arquivos de imagem."));return;}const reader=new FileReader();reader.onerror=()=>reject(new Error("Não foi possível ler "+file.name));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error("Imagem inválida: "+file.name));img.onload=()=>{const max=1600,scale=Math.min(1,max/Math.max(img.width,img.height)),canvas=document.createElement("canvas");canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);resolve({name:file.name,dataUrl:canvas.toDataURL("image/jpeg",0.82)});};img.src=reader.result;};reader.readAsDataURL(file);});}
function renderPhotoGallery(card,index){const host=card.querySelector(".photo-gallery");if(!host)return;host.innerHTML="";(state.files[index]||[]).forEach((p,n)=>{const item=document.createElement("div");item.className="photo-thumb";const img=document.createElement("img");img.src=p.dataUrl;img.alt=p.name;img.tabIndex=0;img.setAttribute("role","button");img.setAttribute("aria-label","Ampliar evidência: "+p.name);img.addEventListener("click",()=>openPhotoViewer(index,n));img.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openPhotoViewer(index,n);}});const name=document.createElement("span");name.textContent=p.name;const remove=document.createElement("button");remove.type="button";remove.textContent="×";remove.setAttribute("aria-label","Remover "+p.name);remove.addEventListener("click",async()=>{state.files[index].splice(n,1);renderPhotoGallery(card,index);try{await storePhotos(state.inspectionId,index,state.files[index]);}catch(e){alert("Não foi possível atualizar o armazenamento das fotos.");}});item.append(img,name,remove);host.append(item);});}

const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const HISTORY_KEY="auditoria360-inspection-history-v1";
function readHistory(){try{const x=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");return Array.isArray(x)?x:[];}catch(e){return [];}}
function saveInspectionHistory(){
 const ratings=Object.values(state.ratings),isMoradia=state.sector.mode==="moradia",scoreResult=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length);
 const previous=readHistory().find(x=>x.id===state.inspectionId)||{};const record={id:state.inspectionId,reportCode:state.reportCode||previous.reportCode||null,pdfName:previous.pdfName||null,pdfSavedAt:previous.pdfSavedAt||null,sector:state.sector.id,sectorName:state.sector.name,date:formData().data||new Date().toISOString().slice(0,10),completedAt:previous.completedAt||new Date().toISOString(),savedAt:new Date().toISOString(),status:previous.status||"gerado",finalizedAt:previous.finalizedAt||null,reopenedAt:previous.reopenedAt||null,obra:formData().obra||"",responsavel:formData().responsavel||"",mode:isMoradia?"moradia":"scored",total:state.sector.items.length,im:scoreResult.counts.im,om:scoreResult.counts.om,na:scoreResult.counts.na,pi:scoreResult.counts.pi,ni:scoreResult.counts.ni,pending:isMoradia?Array.from(document.querySelectorAll("[data-field=status]")).filter(x=>!x.value).length:scoreResult.pending,conforme:isMoradia?Array.from(document.querySelectorAll('[data-field=status]')).filter(x=>x.value==="Conforme").length:0,ajuste:isMoradia?Array.from(document.querySelectorAll('[data-field=status]')).filter(x=>x.value==="Ajuste necessário").length:0,notApplicable:isMoradia?Array.from(document.querySelectorAll('[data-field=status]')).filter(x=>x.value==="Não aplicável").length:0,actionPlans:JSON.parse(JSON.stringify(state.actionPlans||{})),ratings:{...state.ratings},form:formData()};
 if(!isMoradia){record.conformity=scoreResult.score;record.evaluated=scoreResult.evaluated;const coverage=AuditoriaScore.calculateCoverage(state.ratings,state.sector.items.length);record.coverage=coverage.coverage;record.applicable=coverage.applicable;}record.hash=state.reportIntegrity?.hash||null;record.generatedAt=state.reportIntegrity?.generatedAt||null;record.version=APP_VERSION;
 const history=readHistory().filter(x=>x.id!==record.id);history.unshift(record);
 try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history));const persisted=readHistory();return persisted.some(x=>x.id===record.id&&x.completedAt===record.completedAt);}catch(e){return false;}
}
function updateHistoryStatus(id,status,timestamp){const history=readHistory(),index=history.findIndex(x=>x.id===id);if(index<0)return false;history[index]={...history[index],status,finalizedAt:status==="finalizado"?timestamp:(history[index].finalizedAt||null),reopenedAt:status==="reaberto"?timestamp:(history[index].reopenedAt||null)};try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history));return readHistory().some(x=>x.id===id&&x.status===status);}catch(e){return false;}}
function saveCurrentDraft(status="rascunho",finalizedAt=null){const items=Array.from(document.querySelectorAll("[data-q]")).map(card=>({obs:card.querySelector('[data-field="obs"]')?.value||"",status:card.querySelector('[data-field="status"]')?.value||""}));const savedAt=new Date().toISOString();const data={version:5,sector:state.sector.id,inspectionId:state.inspectionId,reportCode:state.reportCode,roomCount:state.roomCount,ratings:state.ratings,actionPlans:state.actionPlans,items,form:formData(),gps:state.gps,savedAt,status,finalizedAt};try{localStorage.setItem(DRAFT_PREFIX+state.inspectionId,JSON.stringify(data));saveDraftIndex(data);return true;}catch(e){return false;}}
async function requestStoragePersistence(){if(!navigator.storage?.persist)return;try{const granted=await navigator.storage.persist();if(!granted){const n=$("#storageNotice");if(n)n.textContent="O navegador não confirmou armazenamento persistente. Evite limpar os dados do site para preservar as inspeções locais."; }}catch(e){}}
function renderDashboard(){
 const module=$("#dashboardModule")?.value||"all",period=$("#dashboardPeriod")?.value||"all",now=new Date(),history=readHistory();
 const filtered=history.filter(x=>{const moduleMatch=module==="all"||x.sector===module;if(!moduleMatch)return false;if(period==="all")return true;const completed=x.completedAt||x.savedAt||x.date;if(!completed)return false;const age=(now-new Date(completed))/86400000;return age>=0&&age<=Number(period);});
 const scored=filtered.filter(x=>x.mode==="scored").map(x=>{const im=Number(x.im??x["IM/OM"]??0),om=Number(x.om??0),pi=Number(x.pi??0),ni=Number(x.ni??0),na=Number(x.na??0),evaluated=im+om+pi+ni,total=Number(x.total)||sectors.find(s=>s.id===x.sector)?.items.length||0,applicable=Math.max(0,total-na),points=im+om+(pi*0.65),coverage=applicable?Number((evaluated/applicable*100).toFixed(2)):null;return{...x,evaluated,total,applicable,coverage,conformity:evaluated?Number(((points/evaluated)*100).toFixed(2)):null};}).filter(x=>Number.isFinite(x.conformity)),moradia=filtered.filter(x=>x.mode==="moradia");
 const avg=scored.length?scored.reduce((n,x)=>n+x.conformity,0)/scored.length:null;
 const totalEvaluated=scored.reduce((n,x)=>n+(x.evaluated||0),0),totalApplicable=scored.reduce((n,x)=>n+(x.applicable||0),0),coverage=totalApplicable?Number((totalEvaluated/totalApplicable*100).toFixed(2)):null,im=filtered.reduce((n,x)=>n+(x.im||x["IM/OM"]||0),0),om=filtered.reduce((n,x)=>n+(x.om||0),0),na=filtered.reduce((n,x)=>n+(x.na||0),0),pi=filtered.reduce((n,x)=>n+(x.pi||0),0),ni=filtered.reduce((n,x)=>n+(x.ni||0),0),pending=filtered.reduce((n,x)=>n+(x.pending||0),0);
 const actionItems=filtered.flatMap(record=>Object.entries(record.actionPlans||{}).map(([index,plan])=>({record,index:Number(index),plan,status:actionPlanDisplayStatus(plan)}))),openActions=actionItems.filter(x=>x.plan.status!=="Validado / Encerrado"),overdueActions=actionItems.filter(x=>x.status==="Atrasado"),highCriticality=actionItems.filter(x=>["Alta","Crítica"].includes(x.plan.criticality)&&x.plan.status!=="Validado / Encerrado");
 $("#dashboardNotice").textContent=history.length?"Consolidado local: "+filtered.length+" inspeção(ões) no filtro atual. O histórico não é compartilhado entre dispositivos ou usuários.":"Ainda não há inspeções concluídas neste navegador. Os indicadores serão alimentados após a geração dos relatórios.";
 const metrics=[["Inspeções realizadas",filtered.length,"Registros concluídos no período"],["Conformidade média",avg===null?"—":avg.toFixed(2).replace(".",",")+"%","Somente módulos pontuados"],["Planos de ação em aberto",openActions.length,"Ações ainda não encerradas"],["Críticos em aberto",highCriticality.length,"Criticidade alta ou crítica"],["Ações vencidas",overdueActions.length,"Prazo expirado e não encerrado"],["Cobertura",coverage===null?"—":coverage.toFixed(2).replace(".",",")+"%","Critérios aplicáveis avaliados"],["Não implementados (NI)",ni,"Classificação NI"]];
 $("#dashboardMetrics").innerHTML=metrics.map(x=>'<article class="metric-card"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><small>'+x[2]+'</small></article>').join("");
 const counts=sectors.map(s=>({name:s.name,count:filtered.filter(x=>x.sector===s.id).length})),max=Math.max(1,...counts.map(x=>x.count));
 $("#moduleBreakdown").innerHTML=counts.map(x=>'<div class="bar-row"><div><span>'+x.name+'</span><b>'+x.count+'</b></div><div class="bar-track"><i style="width:'+(x.count/max*100)+'%"></i></div></div>').join("");
 $("#ratingBreakdown").innerHTML=[["IM",im,"im"],["OM",om,"om"],["PI",pi,"pi"],["NI",ni,"ni"],["NA",na,"na"]].map(x=>'<div class="rating-stat"><span class="legend '+x[2]+'">'+x[0]+'</span><strong>'+x[1]+'</strong></div>').join("");
 $("#dashboardCoverage").textContent=totalEvaluated+" de "+totalApplicable+" critérios aplicáveis avaliados nos módulos pontuados. Cobertura exclui itens NA do denominador; conformidade permanece calculada separadamente. FG Moradia: "+moradia.length+" vistoria(s), sem percentual de conformidade.";

 const months=[];for(let n=5;n>=0;n--){const d=new Date(now.getFullYear(),now.getMonth()-n,1),key=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");months.push({key,label:d.toLocaleDateString("pt-BR",{month:"short",year:"2-digit"}),count:filtered.filter(x=>(x.completedAt||x.savedAt||x.date||"").slice(0,7)===key).length});}
 const peak=Math.max(1,...months.map(x=>x.count));$("#monthlyTrend").innerHTML=months.map(x=>'<div class="trend-item"><span>'+x.label+'</span><div class="bar-track"><i style="width:'+(x.count/peak*100)+'%"></i></div><b>'+x.count+'</b></div>').join("");
 $("#dashboardUpdated").textContent=history.length?"Último registro local: "+new Date(history[0].completedAt||history[0].savedAt).toLocaleString("pt-BR")+". Histórico armazenado localmente.":"Os indicadores serão atualizados ao gerar relatórios.";
}

function renderCompletedInspections(){
 const host=$("#completedInspections");if(!host)return;
 const module=$("#dashboardModule")?.value||"all",period=$("#dashboardPeriod")?.value||"all",now=new Date();
 const records=readHistory().filter(r=>(module==="all"||r.sector===module)&&(period==="all"||(()=>{const d=r.completedAt||r.savedAt||r.date;if(!d)return false;const age=(now-new Date(d))/86400000;return age>=0&&age<=Number(period);})())).sort((a,b)=>String(b.completedAt||b.savedAt||"").localeCompare(String(a.completedAt||a.savedAt||"")));
 if(!records.length){host.innerHTML='<p class="muted">Nenhum checklist realizado no período selecionado.</p>';return;}
 host.innerHTML=records.map(r=>{const plans=Object.entries(r.actionPlans||{}).filter(([k,p])=>p&&(["PI","NI"].includes(r.ratings?.[k])||!r.ratings));const sector=sectors.find(s=>s.id===r.sector);return '<article class="completed-checklist"><button type="button" class="completed-checklist-toggle" aria-expanded="false" data-checklist-id="'+esc(r.id)+'"><span><strong>'+esc(r.reportCode||"Checklist realizado")+' · '+esc(r.obra||"Obra não informada")+'</strong><small>'+esc(r.sectorName||sector?.name||r.sector)+' · '+esc(r.responsavel||"Responsável não informado")+' · '+esc(r.date||"")+'</small></span><span class="completed-checklist-meta">'+plans.length+' plano(s) PI/NI <b>＋</b></span></button><div class="completed-checklist-details" data-checklist-details="'+esc(r.id)+'" hidden>'+ (plans.length?plans.map(([k,p])=>{const index=Number(k),item=sector?.items?.[index],question=Array.isArray(item)?item[0]:(item?.question||"Critério "+(index+1)),rating=r.ratings?.[k]||"PI";return '<section class="checklist-action-detail"><div><strong>Critério '+(index+1)+' · '+esc(rating)+'</strong><p>'+esc(question)+'</p></div><dl><dt>Criticidade</dt><dd>'+esc(p.criticality||"Não definida")+'</dd><dt>Responsável</dt><dd>'+esc(p.responsible||"Não definido")+'</dd><dt>Prazo</dt><dd>'+esc(p.deadline||"Não definido")+'</dd><dt>Ação corretiva</dt><dd>'+esc(p.action||p.correctiveAction||"Não informada")+'</dd><dt>Evidência</dt><dd>'+esc(p.evidence||"Não informada")+'</dd><dt>Situação</dt><dd>'+esc(actionPlanDisplayStatus(p))+'</dd></dl></section>';}).join(""):'<p class="muted">Este checklist não possui planos de ação PI/NI registrados.</p>')+'</div></article>';}).join("");
 host.querySelectorAll("[data-checklist-id]").forEach(btn=>btn.addEventListener("click",()=>{const details=host.querySelector('[data-checklist-details="'+CSS.escape(btn.dataset.checklistId)+'"]');if(!details)return;const opening=details.hidden;details.hidden=!opening;btn.setAttribute("aria-expanded",String(opening));const icon=btn.querySelector(".completed-checklist-meta b");if(icon)icon.textContent=opening?"−":"＋";}));
}

function renderHome(){
 const collaboratorInput=$('input[name="colaborador"]');
 if(collaboratorInput){collaboratorInput.required=false;collaboratorInput.disabled=true;}
 $("#homeView").classList.remove("hidden");$("#inspectionView").classList.add("hidden");
 $("#sectorGrid").innerHTML=sectors.map(s=>'<button class="sector-card" data-sector="'+s.id+'"><div class="sector-icon">'+s.icon+'</div><h3>'+s.name+'</h3><p>'+s.desc+'</p><div class="card-foot"><span>'+(s.mode==="moradia"?"VISTORIA DE ENTREGA":s.items.length+" VERIFICAÇÕES")+'</span><span>ACESSAR →</span></div></button>').join("");
 document.querySelectorAll("[data-sector]").forEach(b=>b.addEventListener("click",()=>openSector(b.dataset.sector)));
 renderDashboard();renderFinalizedReports();renderCompletedInspections();
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
function chooseInspectionDraft(sectorId){const drafts=listDrafts(sectorId);if(!drafts.length)return Promise.resolve({mode:"new"});return new Promise(resolve=>{const dlg=$("#draftDialog"),list=dlg.querySelector("#draftOptions");list.innerHTML=drafts.map(d=>'<div class="draft-option"><div><b>'+esc(d.form?.obra||"Obra não informada")+'</b><small>Data: '+esc(d.form?.data||"—")+' · Salvo: '+esc(new Date(d.savedAt||Date.now()).toLocaleString("pt-BR"))+(d.status==="finalizado"?' · <strong>Relatório finalizado</strong>':"")+'</small></div><div class="draft-actions"><button type="button" data-choice="continue" data-id="'+esc(d.inspectionId)+'">'+(d.status==="finalizado"?"Reabrir edição":"Continuar")+'</button><button type="button" data-choice="discard" data-id="'+esc(d.inspectionId)+'">Descartar</button></div></div>').join("");const finish=v=>{dlg.close();resolve(v);};dlg.querySelector("#newInspection").onclick=()=>finish({mode:"new"});dlg.querySelector("#cancelDrafts").onclick=()=>finish({cancelled:true});dlg.oncancel=e=>{e.preventDefault();finish({cancelled:true});};dlg.onclick=e=>{if(e.target===dlg)finish({cancelled:true});};list.querySelectorAll("[data-choice]").forEach(b=>b.onclick=async()=>{const d=drafts.find(x=>x.inspectionId===b.dataset.id);if(b.dataset.choice==="discard"){if(!confirm("Descartar definitivamente este rascunho e suas fotos?"))return;try{localStorage.removeItem(DRAFT_PREFIX+d.inspectionId);await clearSectorPhotos(d.inspectionId);}catch(e){alert("Não foi possível descartar; os dados foram preservados.");return;}finish({mode:"new"});}else{if(d.status==="finalizado"&&!confirm("Este relatório foi finalizado em "+new Date(d.finalizedAt||d.savedAt).toLocaleString("pt-BR")+". Deseja reabrir a edição?"))return;if(d.status==="finalizado"){d.status="reaberto";d.reopenedAt=new Date().toISOString();localStorage.setItem(DRAFT_PREFIX+d.inspectionId,JSON.stringify(d));updateHistoryStatus(d.inspectionId,"reaberto",d.reopenedAt);}finish({mode:"continue",draft:d});}});dlg.showModal();});}
async function openSector(id){
 state.sector=sectors.find(s=>s.id===id);state.ratings={};state.actionPlans={};state.files={};state.gps=null;state.roomCount=1;
 const choice=await chooseInspectionDraft(id);if(choice.cancelled)return;const savedDraft=choice.draft,resume=choice.mode==="continue";
 state.inspectionId=resume?savedDraft.inspectionId:newInspectionId();state.reportCode=resume?(savedDraft.reportCode||readHistory().find(x=>x.id===savedDraft.inspectionId)?.reportCode||null):null;
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
  $("#questionList").innerHTML=state.sector.items.map((q,i)=>'<article class="question" data-q="'+i+'"><div class="question-top"><div><span class="question-number">CRITÉRIO '+String(i+1).padStart(2,"0")+'</span><h4>'+esc(q[0])+'</h4><div class="reference">Referência: '+esc(q[1])+'</div></div><div class="rating" role="group" aria-label="Avaliação do critério '+(i+1)+'">'+[["IM","im"],["OM","om"],["PI","pi"],["NI","ni"],["NA","na"]].map(x=>'<button type="button" class="r-'+x[1]+'" data-rate="'+x[0]+'" aria-pressed="false">'+x[0]+'</button>').join("")+'</div></div><div class="question-details"><label>Observação / constatação<input data-field="obs" placeholder="Descreva a condição encontrada"></label><label>Evidências fotográficas<div class="photo-controls"><input data-field="foto-file" type="file" accept="image/*" multiple hidden><input data-field="foto-camera" type="file" accept="image/*" multiple capture="environment" hidden><button type="button" class="photo-action" data-photo-action="file">Escolher arquivo</button><button type="button" class="photo-action primary" data-photo-action="camera">Tirar fotografia</button></div><small class="photo-help">Até 5 imagens por critério. Fotos salvas neste dispositivo.</small></label><div class="photo-gallery" aria-live="polite"></div></div><section class="action-plan hidden" data-action-plan aria-label="Plano de ação"><div class="action-plan-heading"><strong>Plano de ação corretiva</strong><span>Obrigatório para acompanhamento de PI e NI</span></div><div class="action-plan-grid"><label>Criticidade do apontamento<select data-action-field="criticality"><option value="Não definida">Não definida</option><option value="Baixa">Baixa</option><option value="Média">Média</option><option value="Alta">Alta</option><option value="Crítica">Crítica</option></select></label><label>Responsável pela ação<input data-action-field="responsible" maxlength="140" placeholder="Nome / área responsável"></label><label>Prazo para conclusão<input data-action-field="deadline" type="date"></label><label class="action-wide">Ação corretiva / providência<textarea data-action-field="action" rows="2" maxlength="2000" placeholder="Descreva a medida corretiva, causa tratada e providência necessária"></textarea></label><label class="action-wide">Evidência / referência de comprovação<textarea data-action-field="evidence" rows="2" maxlength="1500" placeholder="Informe documento, registro, chamado, foto ou local da evidência"></textarea></label><label class="action-wide">Situação do plano<select data-action-field="status"><option value="Pendente">Pendente</option><option value="Em andamento">Em andamento</option><option value="Respondido pelo responsável">Respondido pelo responsável</option><option value="Aguardando validação do auditor">Aguardando validação do auditor</option><option value="Validado / Encerrado">Validado / Encerrado</option><option value="Rejeitado">Rejeitado</option></select></label><label class="action-wide">Registro da validação do auditor<textarea data-action-field="auditorNote" rows="2" maxlength="1500" placeholder="Registre a análise, aceite ou motivo da rejeição"></textarea></label><small class="action-overdue" data-action-overdue aria-live="polite"></small></div><p class="action-plan-note">Registro mantido neste dispositivo. A situação de validação é declaratória e não substitui autenticação ou aprovação eletrônica corporativa.</p></section></article>').join("");
  bindStandardCards();
 }
 if(resume){try{state.files=await readInspectionPhotos(state.inspectionId);}catch(err){state.files={};}}
 if(resume){
  const form=$("#inspectionForm");Object.entries(savedDraft.form||{}).forEach(([name,value])=>{const field=form.elements.namedItem(name);if(field&&typeof value==="string")field.value=value;});
  state.inspectionId=savedDraft.inspectionId||state.inspectionId;state.gps=savedDraft.gps||null;state.ratings=savedDraft.ratings||{};state.actionPlans=savedDraft.actionPlans||{};
  (savedDraft.items||[]).forEach((item,i)=>{const card=document.querySelector('[data-q="'+i+'"]');if(!card)return;const obs=card.querySelector('[data-field="obs"]');if(obs)obs.value=item.obs||"";const status=card.querySelector('[data-field="status"]');if(status)status.value=item.status||"";const rating=card.querySelector('[data-rate="'+(state.ratings[i]||"")+'"]');if(rating)rating.setAttribute("aria-pressed","true");else if(state.ratings[i]==="IM/OM"){const legacy=document.querySelector('[data-q="'+i+'"] [data-rate="IM"]');if(legacy)legacy.setAttribute("aria-pressed","true");}});
  document.querySelectorAll("[data-q]").forEach(card=>syncActionPlanCard(card,+card.dataset.q));
  if(state.gps){$("#gpsStatus").textContent="Localização do rascunho recuperada.";$("#captureGps").textContent="Atualizar localização";}
 }
 document.querySelectorAll("[data-q]").forEach(card=>renderPhotoGallery(card,+card.dataset.q));
 const date=$('input[name="data"]');if(!date.value)date.value=new Date().toISOString().slice(0,10);
 updateScore();window.scrollTo({top:0,behavior:"smooth"});
}
function bindPhotoInput(card){
 const inputs=[card.querySelector('[data-field="foto-file"]'),card.querySelector('[data-field="foto-camera"]')].filter(Boolean);
 if(!inputs.length)return;
 card.querySelectorAll("[data-photo-action]").forEach(button=>button.addEventListener("click",()=>{const input=card.querySelector('[data-field="foto-'+button.dataset.photoAction+'"]');if(input)input.click();}));
 inputs.forEach(input=>input.addEventListener("change",async e=>{const i=+card.dataset.q,selected=Array.from(e.target.files||[]),current=state.files[i]||[],remaining=5-current.length;if(!selected.length)return;if(remaining<=0){alert("Limite de 5 fotos por item.");input.value="";return;}try{const added=await Promise.all(selected.slice(0,remaining).map(imageAsDataURL));state.files[i]=current.concat(added);renderPhotoGallery(card,i);await storePhotos(state.inspectionId,i,state.files[i]);}catch(err){alert(err.message||"Falha ao adicionar as fotos.");}input.value="";}));
}
function actionPlanFor(index){const p=state.actionPlans[index]||(state.actionPlans[index]={criticality:"Não definida",responsible:"",deadline:"",action:"",evidence:"",status:"Pendente",auditorNote:"",validatedAt:null,history:[]});if(!p.criticality)p.criticality="Não definida";if(!Array.isArray(p.history))p.history=[];return p;}
function logActionPlanChange(p,key,from,to){if(String(from??"")===String(to??""))return;const labels={criticality:"Criticidade",responsible:"Responsável",deadline:"Prazo",action:"Ação corretiva",evidence:"Evidência / referência",status:"Situação",auditorNote:"Validação do auditor"};p.history.push({at:new Date().toISOString(),field:labels[key]||key,from:String(from||"—"),to:String(to||"—")});if(p.history.length>200)p.history.splice(0,p.history.length-200);}
function actionPlanDisplayStatus(plan){if(plan.deadline&&plan.deadline<new Date().toISOString().slice(0,10)&&!["Validado / Encerrado","Rejeitado"].includes(plan.status))return "Atrasado";return plan.status||"Pendente";}
function syncActionPlanCard(card,index){const panel=card.querySelector("[data-action-plan]");if(!panel)return;const applicable=["PI","NI"].includes(state.ratings[index]);panel.classList.toggle("hidden",!applicable);panel.setAttribute("aria-hidden",String(!applicable));if(!applicable)return;const plan=actionPlanFor(index);panel.querySelectorAll("[data-action-field]").forEach(field=>{const key=field.dataset.actionField;if(field.value!==(plan[key]||""))field.value=plan[key]||"";});const overdue=panel.querySelector("[data-action-overdue]");if(overdue)overdue.textContent=actionPlanDisplayStatus(plan)==="Atrasado"?"Prazo vencido — verificar a situação da ação.":"";}
function persistActionPlan(index){
 const plan=actionPlanFor(index),saved=saveCurrentDraft("rascunho");
 const history=readHistory(),position=history.findIndex(x=>x.id===state.inspectionId);
 if(position>=0){history[position]={...history[position],actionPlans:JSON.parse(JSON.stringify(state.actionPlans||{})),ratings:{...state.ratings},savedAt:new Date().toISOString()};try{localStorage.setItem(HISTORY_KEY,JSON.stringify(history));}catch(e){}}
 renderCompletedInspections();renderDashboard();return saved;
}
function bindStandardCards(){
 document.querySelectorAll("[data-q]").forEach(card=>{
  const index=+card.dataset.q;
  card.querySelectorAll("[data-rate]").forEach(btn=>btn.addEventListener("click",()=>{state.ratings[index]=btn.dataset.rate;card.querySelectorAll("[data-rate]").forEach(x=>x.setAttribute("aria-pressed",String(x===btn)));syncActionPlanCard(card,index);updateScore();}));
  card.querySelectorAll("[data-action-field]").forEach(field=>{field.addEventListener("focus",()=>{const plan=actionPlanFor(index);field.dataset.previousValue=plan[field.dataset.actionField]||"";});field.addEventListener("input",()=>{const plan=actionPlanFor(index),key=field.dataset.actionField;plan[key]=field.value;if(key==="status")plan.validatedAt=field.value==="Validado / Encerrado"?(plan.validatedAt||new Date().toISOString()):null;persistActionPlan(index);});field.addEventListener("change",()=>{const plan=actionPlanFor(index),key=field.dataset.actionField,previous=field.dataset.previousValue??plan[key]??"";logActionPlanChange(plan,key,previous,field.value);plan[key]=field.value;if(key==="status"){plan.validatedAt=field.value==="Validado / Encerrado"?new Date().toISOString():null;const note=card.querySelector('[data-action-field="auditorNote"]');if(note&&!note.value&&field.value==="Validado / Encerrado")note.focus();}persistActionPlan(index);syncActionPlanCard(card,index);});});
  bindPhotoInput(card);syncActionPlanCard(card,index);
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
   html+='<article class="question moradia-question" data-q="'+i+'"><div class="question-top"><div><span class="question-number">ITEM '+String(i+1).padStart(2,"0")+'</span><h4>'+esc(item.question)+'</h4></div><label class="status-field">Condição<select data-field="status"><option value="">Selecionar</option><option value="Conforme">Conforme</option><option value="Ajuste necessário">Ajuste necessário</option><option value="Não aplicável">Não aplicável</option></select></label></div><div class="question-details"><label>Observação / apontamento<input data-field="obs" placeholder="Descreva o problema ou detalhe relevante"></label><label>Evidências fotográficas<div class="photo-controls"><input data-field="foto-file" type="file" accept="image/*" multiple hidden><input data-field="foto-camera" type="file" accept="image/*" multiple capture="environment" hidden><button type="button" class="photo-action" data-photo-action="file">Escolher arquivo</button><button type="button" class="photo-action primary" data-photo-action="camera">Tirar fotografia</button></div><small class="photo-help">Até 5 imagens por item.</small></label><div class="photo-gallery" aria-live="polite"></div></div></article>';
  });html+='</section>';
 });
 $("#questionList").innerHTML=html;
 $("#roomCount").addEventListener("change",async e=>{const nextRoomCount=Number(e.target.value);if(!Number.isInteger(nextRoomCount)||nextRoomCount<1||nextRoomCount>4){e.target.value=String(state.roomCount);return;}if(nextRoomCount===state.roomCount)return;if(!confirm("Alterar a quantidade de quartos? Os registros e fotos desta vistoria serão reiniciados para evitar associação incorreta de evidências.")){e.target.value=String(state.roomCount);return;}const previousId=state.inspectionId;try{await clearSectorPhotos(previousId);}catch(err){console.error("Não foi possível limpar as fotos da vistoria:",err);alert("Não foi possível reiniciar as evidências desta vistoria. A quantidade de quartos não foi alterada. Tente novamente.");e.target.value=String(state.roomCount);return;}localStorage.removeItem(DRAFT_PREFIX+previousId);try{const legacyKey=DRAFT_PREFIX+state.sector.id,legacy=JSON.parse(localStorage.getItem(legacyKey)||"null");if(legacy?.inspectionId===previousId)localStorage.removeItem(legacyKey);}catch(err){console.warn("Não foi possível verificar o rascunho legado:",err);}state.files={};state.ratings={};state.inspectionId=newInspectionId();state.reportIntegrity=null;renderMoradia(nextRoomCount);updateScore();});
 document.querySelectorAll("[data-q]").forEach(bindPhotoInput);
 document.querySelectorAll("[data-field=status]").forEach(sel=>sel.addEventListener("change",updateScore));
}
function updateScore(){
 if(state.sector?.mode==="moradia"){const total=state.sector.items.length,done=Array.from(document.querySelectorAll("[data-field=status]")).filter(x=>x.value).length;$("#scoreCaption").textContent=done+" de "+total+" itens registrados";$("#progressBar").style.width=(total?done/total*100:0)+"%";return;}
 const result=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length),done=result.evaluated+result.counts.na,total=state.sector.items.length;
 $("#scoreValue").textContent=result.score===null?"—":result.score.toFixed(2).replace(".",",")+"%";const coverage=AuditoriaScore.calculateCoverage(state.ratings,total);$("#scoreCaption").textContent=coverage.evaluated+" de "+coverage.applicable+" aplicáveis · "+(coverage.coverage===null?"—":coverage.coverage.toFixed(2).replace(".",",")+"% de cobertura");$("#progressBar").style.width=(coverage.applicable?coverage.evaluated/coverage.applicable*100:0)+"%";
}
const APP_VERSION="2.6.0";
function canonicalize(value){if(Array.isArray(value))return"["+value.map(canonicalize).join(",")+"]";if(value&&typeof value==="object")return"{"+Object.keys(value).sort().map(k=>JSON.stringify(k)+":"+canonicalize(value[k])).join(",")+"}";return JSON.stringify(value);}
async function hashValue(value){const bytes=new TextEncoder().encode(typeof value==="string"?value:canonicalize(value));const digest=await window.crypto.subtle.digest("SHA-256",bytes);return Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,"0")).join("");}
async function buildIntegrity(data){const generatedAt=new Date().toISOString();if(!window.crypto?.subtle)return{generatedAt,hash:null,version:APP_VERSION};try{const photoHashes={};for(const [i,list] of Object.entries(state.files)){photoHashes[i]=[];for(const p of list||[])photoHashes[i].push({name:p.name,sha256:await hashValue(p.dataUrl)});}const payload={inspectionId:state.inspectionId,sector:state.sector.id,form:data,ratings:state.ratings,items:Array.from(document.querySelectorAll("[data-q]")).map(card=>({index:card.dataset.q,observation:card.querySelector('[data-field="obs"]')?.value||"",status:card.querySelector('[data-field="status"]')?.value||""})),actionPlans:state.actionPlans,gps:state.gps,photoHashes,generatedAt,version:APP_VERSION};return{generatedAt,hash:await hashValue(payload),version:APP_VERSION};}catch(e){return{generatedAt,hash:null,version:APP_VERSION};}}
function integrityFooterMarkup(){const x=state.reportIntegrity||{};return '<section style="margin-top:28px;padding-top:10px;border-top:1px solid #ccd6d8;font:9px Arial;overflow-wrap:anywhere"><b>Integridade do relatório</b><br>Gerado em: '+esc(x.generatedAt||"—")+'<br>Versão: '+esc(x.version||APP_VERSION)+' · Código: '+esc(state.reportCode||"—")+' · ID: '+esc(state.inspectionId)+'<br>SHA-256: '+esc(x.hash||"Hash indisponível neste navegador")+'<br><small>A análise, classificação, validação das evidências e aprovação permanecem sob responsabilidade dos profissionais competentes.</small></section>';}
function formData(){const f=new FormData($("#inspectionForm"));return Object.fromEntries(f.entries())}
async function waitForReportAssets(container,timeoutMs=10000){const images=Array.from(container.querySelectorAll("img"));await Promise.all(images.map(img=>new Promise(resolve=>{let settled=false;const finish=()=>{if(settled)return;settled=true;resolve();};const timer=setTimeout(finish,timeoutMs);if(typeof img.decode==="function"){img.decode().catch(()=>{}).finally(()=>{clearTimeout(timer);finish();});}else if(img.complete){clearTimeout(timer);finish();}else{img.addEventListener("load",()=>{clearTimeout(timer);finish();},{once:true});img.addEventListener("error",()=>{clearTimeout(timer);finish();},{once:true});}})));if(document.fonts?.ready)await Promise.race([document.fonts.ready.catch(()=>{}),new Promise(resolve=>setTimeout(resolve,timeoutMs))]);}
function closeReportViewer(){const viewer=$("#reportViewer");viewer.hidden=true;viewer.setAttribute("aria-hidden","true");$("#reportPrint").blur();}
async function reportHtml(data){
 const logoUrl=new URL("logo-fg.png",location.href).href;reportCodeForInspection(data);state.reportIntegrity=await buildIntegrity(data);
 if(state.sector.mode==="moradia"){
  const rows=await Promise.all(state.sector.items.map(async(item,i)=>{
   const card=document.querySelector('[data-q="'+i+'"]'),status=card.querySelector('[data-field="status"]').value||"Não preenchido",obs=card.querySelector('[data-field="obs"]').value,photos=state.files[i]||[],photoHtml=photos.length?'<div class="report-photos">'+photos.map(p=>'<figure><img src="'+p.dataUrl+'" alt="'+esc(p.name)+'"><figcaption>'+esc(p.name)+'</figcaption></figure>').join("")+'</div>':"—";
   return '<tr><td>'+esc(item.area)+'</td><td>'+esc(item.question)+'</td><td>'+esc(status)+'</td><td>'+esc(obs||"—")+'</td><td>'+photoHtml+'</td></tr>';
  }));
  return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>FG Moradia - Vistoria de Entrega</title><style>.report-toolbar{display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:18px;background:#eef4f5;border:1px solid #d9e2e3;border-radius:8px;font:13px Arial}.report-toolbar button{background:#135c6c;color:#fff;border:0;border-radius:5px;padding:9px 14px;cursor:pointer}.report-toolbar span{color:#52666b}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}}body{font:11px Arial;color:#24383d;margin:28px}h1{font-size:22px;color:#135c6c}.report-header{display:flex;align-items:center;gap:20px;border-bottom:3px solid #135c6c;padding:0 0 14px;margin-bottom:18px}.report-header img{display:block;flex:0 0 auto;width:190px;height:82px;max-height:none;box-sizing:border-box;object-fit:contain;padding:10px 14px;background:#135c6c;border:0;border-radius:0;print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header h1{margin:0;line-height:1.2}h2{font-size:15px;color:#135c6c;margin-top:24px}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f1f5f5;padding:12px;margin:14px 0}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #d9e2e3;padding:7px;text-align:left;vertical-align:top}th{background:#eaf1f2}.report-photos{display:flex;flex-wrap:wrap;gap:6px}.report-photos figure{margin:0;width:105px;break-inside:avoid}.report-photos img{width:100%;height:80px;object-fit:contain;border:1px solid #d9e2e3}.report-photos figcaption{font-size:8px;overflow-wrap:anywhere}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}body{margin:12mm}tr{break-inside:avoid}}</style></head><body><div class="report-toolbar no-print"><button type="button" onclick="window.print()">Imprimir / Salvar em PDF</button><span>Na janela de impressão, selecione “Salvar como PDF”.</span></div><header class="report-header"><img src="'+logoUrl+'" alt="FG Empreendimentos"><h1>FG MORADIA | VISTORIA DE ENTREGA</h1><div class="report-code">'+esc(state.reportCode)+'</div></header><div class="meta"><div><b>ID da inspeção:</b> '+esc(state.inspectionId)+'</div><div><b>Empreendimento / unidade:</b> '+esc(data.obra)+'</div><div><b>Empresa:</b> '+esc(data.empresa||"—")+'</div><div><b>Data da vistoria:</b> '+esc(data.data)+'</div><div><b>Responsável:</b> '+esc(data.responsavel)+'</div><div><b>Colaborador:</b> '+esc(data.colaborador||"—")+'</div><div><b>Localização da unidade:</b> '+esc(data.local||"—")+'</div><div><b>Quantidade de quartos:</b> '+state.roomCount+'</div>'+gpsReportMarkup()+'</div><h2>Checklist de entrega do apartamento</h2><table class="t-moradia"><thead><tr><th>Ambiente</th><th>Item verificado</th><th>Condição</th><th>Observação / apontamento</th><th>Fotos</th></tr></thead><tbody>'+rows.join("")+'</tbody></table><h2>Considerações gerais</h2><p>'+esc(data.consideracoes||"Não informado.")+'</p><p style="margin-top:35px">________________________________________<br>Responsável pela vistoria</p><p style="margin-top:35px">________________________________________<br>Colaborador(a) recebedor(a)</p>'+integrityFooterMarkup()+'</body></html>';
 }
 const order=["IM","OM","PI","NI","NA"],records=state.sector.items.map((q,i)=>({i,q,r:(state.ratings[i]==="IM/OM"?"IM":(state.ratings[i]||"PENDENTE")),card:document.querySelector('[data-q="'+i+'"]')}));
 const rows=(await Promise.all(order.flatMap(r=>records.filter(x=>x.r===r).map(async x=>{const obs=x.card.querySelector('[data-field="obs"]').value,photos=state.files[x.i]||[],photoHtml=photos.length?'<div class="report-photos">'+photos.map(p=>'<figure><img src="'+p.dataUrl+'" alt="'+esc(p.name)+'"><figcaption>'+esc(p.name)+'</figcaption></figure>').join("")+'</div>':"—";return '<tr><td>'+(x.i+1)+'</td><td>'+esc(x.q[0])+'<br><small>'+esc(x.q[1])+'</small></td><td>'+r+'</td><td>'+esc(obs||"—")+'</td><td>'+photoHtml+'</td></tr>';})))).join("");
 const actionRows=records.filter(x=>["PI","NI"].includes(x.r)).map(x=>{const p=actionPlanFor(x.i);return "<tr><td>"+(x.i+1)+"</td><td>"+esc(x.q[0])+"</td><td>"+x.r+"</td><td>"+esc(p.criticality||"Não definida")+"</td><td>"+esc(p.responsible||"—")+"</td><td>"+esc(p.deadline||"—")+"</td><td>"+esc(p.action||"—")+"</td><td>"+esc(p.evidence||"—")+"</td><td>"+esc(actionPlanDisplayStatus(p))+"</td><td>"+esc(p.auditorNote||"—")+(p.validatedAt?"<br><small>Registro: "+esc(new Date(p.validatedAt).toLocaleString("pt-BR"))+"</small>":"")+"</td></tr>";}).join("");
 const actionHistoryRows=records.filter(x=>["PI","NI"].includes(x.r)).flatMap(x=>actionPlanFor(x.i).history.map(h=>"<tr><td>"+(x.i+1)+"</td><td>"+esc(x.q[0])+"</td><td>"+esc(new Date(h.at).toLocaleString("pt-BR"))+"</td><td>"+esc(h.field)+"</td><td>"+esc(h.from)+"</td><td>"+esc(h.to)+"</td></tr>")).join("");
 const actionPlanReport=actionRows?'<h2>Plano de ação e acompanhamento</h2><p>Critérios classificados como PI ou NI. A criticidade é definida pelo auditor e não altera a pontuação de conformidade.</p><table class="t-plan"><thead><tr><th>#</th><th>Critério</th><th>Class.</th><th>Criticidade</th><th>Responsável</th><th>Prazo</th><th>Ação corretiva</th><th>Evidência / referência</th><th>Situação</th><th>Validação do auditor</th></tr></thead><tbody>'+actionRows+'</tbody></table>'+(actionHistoryRows?'<h3>Histórico de alterações do plano de ação</h3><table class="t-hist"><thead><tr><th>#</th><th>Critério</th><th>Data / hora</th><th>Campo</th><th>Valor anterior</th><th>Valor atualizado</th></tr></thead><tbody>'+actionHistoryRows+'</tbody></table>':'<p>Não há alterações de plano registradas nesta inspeção.</p>'):'';
 const vals=Object.values(state.ratings),scoreResult=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length),coverageResult=AuditoriaScore.calculateCoverage(state.ratings,state.sector.items.length),score=scoreResult.score;
 return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório Auditoria 360</title><style>.report-toolbar{display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:18px;background:#eef4f5;border:1px solid #d9e2e3;border-radius:8px;font:13px Arial}.report-toolbar button{background:#135c6c;color:#fff;border:0;border-radius:5px;padding:9px 14px;cursor:pointer}.report-toolbar span{color:#52666b}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}}body{font:11px Arial;color:#24383d;margin:28px}h1{font-size:22px;color:#135c6c}.report-header{display:flex;align-items:center;gap:20px;border-bottom:3px solid #135c6c;padding:0 0 14px;margin-bottom:18px}.report-header img{display:block;flex:0 0 auto;width:190px;height:82px;max-height:none;box-sizing:border-box;object-fit:contain;padding:10px 14px;background:#135c6c;border:0;border-radius:0;print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header h1{margin:0;line-height:1.2}.report-header h1{margin:0}h2{font-size:15px;margin-top:24px;color:#135c6c}p{line-height:1.5}.meta{display:grid;grid-template-columns:1fr 1fr;gap:8px;background:#f1f5f5;padding:12px}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #d9e2e3;padding:7px;text-align:left;vertical-align:top}th{background:#eaf1f2}.report-photos{display:flex;flex-wrap:wrap;gap:6px}.report-photos figure{margin:0;width:calc(50% - 6px);max-width:calc(50% - 6px);break-inside:avoid}.report-photos img{height:145px;object-fit:contain}.report-photos img{width:100%;height:85px;object-fit:contain;border:1px solid #d9e2e3}.report-photos figcaption{font-size:8px;overflow-wrap:anywhere}small{color:#64777c}.score{font-size:22px;font-weight:bold;color:#135c6c}@page{size:A4;margin:12mm}@media print{.no-print{display:none!important}.report-header,.report-header img{print-color-adjust:exact;-webkit-print-color-adjust:exact}.report-header{break-inside:avoid;page-break-inside:avoid}body{margin:0}table{width:100%;break-inside:auto}thead{display:table-header-group}tfoot{display:table-footer-group}tr,figure,img{break-inside:avoid;page-break-inside:avoid}h2{break-after:avoid-page}a{color:inherit;text-decoration:none}}</style></head><body><div class="report-toolbar no-print"><button type="button" onclick="window.print()">Imprimir / Salvar em PDF</button><span>Na janela de impressão, selecione “Salvar como PDF”.</span></div><header class="report-header"><img src="'+logoUrl+'" alt="FG Empreendimentos"><h1>AUDITORIA 360 | RELATÓRIO DE INSPEÇÃO</h1><div class="report-code">'+esc(state.reportCode)+'</div></header><p><b>Setor:</b> '+state.sector.name+'</p><div class="meta"><div><b>ID da inspeção:</b> '+esc(state.inspectionId)+'</div><div><b>Obra:</b> '+esc(data.obra)+'</div><div><b>Empresa:</b> '+esc(data.empresa||"—")+'</div><div><b>Data:</b> '+esc(data.data)+'</div><div><b>Responsável:</b> '+esc(data.responsavel)+'</div><div><b>Local:</b> '+esc(data.local||"—")+'</div>'+gpsReportMarkup()+'</div><h2>Resultado da avaliação</h2><p class="score">'+(score===null?"Não calculável":score.toFixed(2).replace(".",",")+"%")+' de conformidade</p><p>Cobertura do checklist: '+(coverageResult.coverage===null?"Não calculável":coverageResult.coverage.toFixed(2).replace(".",",")+"%")+' · '+coverageResult.evaluated+' de '+coverageResult.applicable+' critérios aplicáveis avaliados (NA excluídos). A cobertura é indicador de abrangência e não altera a conformidade.</p><p>Critérios avaliados: '+scoreResult.evaluated+'/'+state.sector.items.length+' · Pontos: '+scoreResult.pointsTotal.toFixed(2).replace(".",",")+' / '+scoreResult.evaluated+' · IM: '+scoreResult.counts.im+' · OM: '+scoreResult.counts.om+' · PI: '+scoreResult.counts.pi+' · NI: '+scoreResult.counts.ni+' · NA: '+scoreResult.counts.na+' · Pendentes: '+scoreResult.pending+'</p><p>Metodologia: IM = 1,00 ponto; OM = 1,00 ponto; PI = 0,65 ponto; NI = 0,00 ponto; NA não contabilizado. Percentual = pontos obtidos ÷ critérios considerados × 100.</p><h2>Detalhamento dos critérios</h2><table class="t-detail"><thead><tr><th>#</th><th>Critério / referência</th><th>Classificação</th><th>Observação</th><th>Arquivos de evidência</th></tr></thead><tbody>'+rows+'</tbody></table>'+actionPlanReport+'<h2>Considerações gerais</h2><p>'+esc(data.consideracoes||"Não informado.")+'</p><p style="margin-top:35px">________________________________________<br>Responsável pela inspeção</p>'+integrityFooterMarkup()+'</body></html>';
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
$("#saveDraft").addEventListener("click",()=>{if(saveCurrentDraft()){alert("Rascunho salvo neste dispositivo. As fotos permanecem vinculadas a esta inspeção.");}else{alert("Não foi possível salvar o rascunho neste navegador.");}});
$("#dashboardModule").addEventListener("change",renderDashboard);$("#dashboardPeriod").addEventListener("change",renderDashboard);
$("#reportPrint").addEventListener("click",async()=>{try{await waitForReportAssets($("#reportContent"));}catch(err){console.warn("Não foi possível aguardar todos os recursos do relatório:",err);}requestAnimationFrame(()=>window.print());});$("#reportFinalize").addEventListener("click",async()=>{if(!confirm("Finalizar este relatório? Os PDFs Completo e Executivo serão gerados e arquivados automaticamente neste navegador."))return;const button=$("#reportFinalize"),model=$("#pdfModelChoice")?.value||"complete";button.disabled=true;button.textContent="Gerando PDF…";button.setAttribute("aria-busy","true");let finalized=false;try{const pdfName=await generateAndArchivePdfVersion(state.inspectionId,model);const alternateModel=model==="executive"?"complete":"executive";const alternatePdfName=await generateAndArchivePdfVersion(state.inspectionId,alternateModel);const finalizedAt=new Date().toISOString();if(!saveCurrentDraft("finalizado",finalizedAt))throw new Error("O PDF foi arquivado, mas não foi possível salvar os dados da inspeção. O relatório não foi finalizado.");if(!updateHistoryStatus(state.inspectionId,"finalizado",finalizedAt))throw new Error("O PDF foi arquivado, mas não foi possível confirmar a finalização no histórico. Tente novamente.");renderDashboard();renderCompletedInspections();$("#dashboardUpdated").textContent="Relatório finalizado em "+new Date(finalizedAt).toLocaleString("pt-BR")+". "+"PDFs Completo e Executivo arquivados: "+pdfName+" e "+alternatePdfName;finalized=true;closeReportViewer();renderHome();renderFinalizedReports();renderCompletedInspections();renderHistoryList();alert("Relatório finalizado. Os PDFs Completo e Executivo foram gerados e arquivados automaticamente. Acesse Histórico de inspeções para baixar qualquer versão.");}catch(err){console.error("Falha ao finalizar relatório:",err);alert("Não foi possível concluir a finalização: "+(err?.message||err)+". O relatório permanece aberto para nova tentativa.");}finally{if(!finalized){button.disabled=false;button.textContent="Finalizar e gerar PDF";button.removeAttribute("aria-busy");}}});$("#reportClose").addEventListener("click",closeReportViewer);$("#clearDashboard").addEventListener("click",()=>{if(confirm("Excluir todo o histórico de indicadores salvo neste navegador? Essa ação não poderá ser desfeita.")){localStorage.removeItem(HISTORY_KEY);renderDashboard();renderFinalizedReports();renderCompletedInspections();}});window.addEventListener("storage",e=>{if(e.key===HISTORY_KEY)renderDashboard();});
$("#backHome").addEventListener("click",renderHome);$("#homeLink").addEventListener("click",e=>{e.preventDefault();renderHome()});migrateLegacyDrafts();migrateLegacyPhotos();requestStoragePersistence();renderHome();renderFinalizedReports();renderCompletedInspections();

/* Fase 3: identificação documental, índice de evidências e anexos técnicos. */

function reportCodeForInspection(data={}) {
 if(state.reportCode)return state.reportCode;
 const prefixes={auditoria:"AI",engenharia:"ENG",qualidade:"QUA",almoxarifado:"ALM",sesmt:"SST","fg-moradia":"FG"};
 const prefix=prefixes[state.sector?.id]||"AI",year=String(data.data||new Date().toISOString().slice(0,10)).slice(0,4);
 const key="auditoria360-sequence-"+prefix+"-"+year;
 const historyMax=readHistory().reduce((max,item)=>{const match=String(item.reportCode||"").match(new RegExp("^"+prefix+"-(\\d{3,})/"+year+"$"));return match?Math.max(max,Number(match[1])):max;},0);
 const next=Math.max(Number(localStorage.getItem(key)||0),historyMax)+1;
 try{localStorage.setItem(key,String(next));}catch(e){throw new Error("Não foi possível reservar o número sequencial do relatório neste navegador.");}
 state.reportCode=prefix+"-"+String(next).padStart(3,"0")+"/"+year;return state.reportCode;
}
async function saveReportPdf(id,file,name,model="complete"){
 if(!file||file.type!=="application/pdf")throw new Error("O gerador não retornou um arquivo PDF válido.");
 const filename=name||file.name||((state.reportCode||"Relatorio")+".pdf"),entry={blob:file,name:filename,type:"application/pdf",model,savedAt:new Date().toISOString()};
 const db=await openPhotoDB();await new Promise((resolve,reject)=>{const tx=db.transaction("reports","readwrite"),store=tx.objectStore("reports");let settled=false;const finish=error=>{if(settled)return;settled=true;db.close();error?reject(error):resolve();};const get=store.get(id);get.onsuccess=()=>{const previous=get.result||{},files={...(previous.files||{})};files[model]=entry;store.put({...previous,...entry,files},id);};get.onerror=()=>finish(get.error||new Error("Não foi possível recuperar os PDFs anteriores."));tx.oncomplete=()=>finish();tx.onerror=()=>finish(tx.error||new Error("Falha ao gravar o PDF no armazenamento local."));tx.onabort=()=>finish(tx.error||new Error("A gravação do PDF foi cancelada pelo navegador."));});
 const records=readHistory(),item=records.find(x=>x.id===id);if(item){item.pdfName=filename;item.pdfModel=model;item.pdfSavedAt=new Date().toISOString();item.pdfModels=["complete","executive"];localStorage.setItem(HISTORY_KEY,JSON.stringify(records));}return filename;
}
async function readReportPdf(id,model){
 const db=await openPhotoDB();return new Promise((resolve,reject)=>{const req=db.transaction("reports","readonly").objectStore("reports").get(id);req.onsuccess=()=>{db.close();const saved=req.result||null;resolve(model?(saved?.files?.[model]||((saved?.model===model)?saved:null)):saved);};req.onerror=()=>{db.close();reject(req.error);};});
}
async function renderFinalizedReports(){
 const host=$("#finalizedReports");if(!host)return;
 const records=readHistory().filter(x=>x.status==="finalizado").sort((a,b)=>String(b.finalizedAt||"").localeCompare(String(a.finalizedAt||"")));
 if(!records.length){host.innerHTML='<p class="muted">Nenhum relatório finalizado neste navegador.</p>';return;}
 host.innerHTML=records.map(x=>'<article class="archive-item"><div><strong>'+esc(x.reportCode||"Sem código")+'</strong><span>'+esc(x.sectorName||x.sector)+' · '+esc(x.obra||"Obra não informada")+'</span><small>Finalizado: '+esc(x.finalizedAt?new Date(x.finalizedAt).toLocaleString("pt-BR"):"—")+'</small><small>PDFs Completo e Executivo arquivados neste navegador.</small></div><div class="archive-actions"><button type="button" data-pdf-download="'+esc(x.id)+'" data-pdf-model="complete">Baixar Completo</button><button type="button" data-pdf-download="'+esc(x.id)+'" data-pdf-model="executive">Baixar Executivo</button></div></article>').join("");
 host.querySelectorAll("[data-pdf-download]").forEach(button=>button.addEventListener("click",async()=>{try{const saved=await readReportPdf(button.dataset.pdfDownload,button.dataset.pdfModel);if(!saved?.blob){alert("O modelo solicitado não está disponível neste navegador.");return;}const url=URL.createObjectURL(saved.blob),a=document.createElement("a");a.href=url;a.download=saved.name||"relatorio.pdf";a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}catch(e){alert("Não foi possível baixar o PDF: "+e.message);}}));
}
async function showReportInPage(html) {
 const parsed=new DOMParser().parseFromString(html,"text/html"),viewer=$("#reportViewer"),content=$("#reportContent");
 const oldStyle=$("#generatedReportStyle");if(oldStyle)oldStyle.remove();
 const reportCss=Array.from(parsed.head.querySelectorAll("style")).map(x=>x.textContent).join("\n").replace(/\bbody(?=\s*[{.#[:])/g,"#reportContent");
 const style=document.createElement("style");style.id="generatedReportStyle";
 style.textContent=reportCss+"\n.report-code{margin-left:auto;padding:9px 12px;border:2px solid #135c6c;border-radius:6px;color:#135c6c;font:bold 16px Arial;white-space:nowrap}.report-print-footer{display:none}@page{size:A4;margin:14mm 12mm 18mm}@media print{.report-print-footer{display:block;position:fixed;left:0;right:0;bottom:4mm;text-align:center;font:8px Arial;color:#617277;z-index:9999;white-space:nowrap}#reportContent thead{display:table-header-group}#reportContent tr,#reportContent figure,#reportContent img{break-inside:avoid;page-break-inside:avoid}}";
 document.head.appendChild(style);
 content.innerHTML=parsed.body.innerHTML;content.querySelector(".report-toolbar")?.remove();
 const code=state.reportCode||reportCodeForInspection(formData());
 const footer=document.createElement("div");footer.className="report-print-footer";
 footer.innerHTML="AUDITORIA 360 · "+esc(code)+" · Página <span class='page-number'></span>";content.append(footer);
 viewer.hidden=false;viewer.setAttribute("aria-hidden","false");const finalizeButton=$("#reportFinalize");finalizeButton.hidden=false;finalizeButton.style.display="inline-flex";finalizeButton.disabled=false;finalizeButton.textContent="Finalizar e gerar PDF";finalizeButton.removeAttribute("aria-busy");$("#reportPrint").focus();
 await waitForReportAssets(content);content.scrollTop=0;viewer.scrollTop=0;
}


/* Experiência executiva: histórico separado, visualizador fotográfico e PDF executivo. */
const photoViewerState={photos:[],index:0,criterionIndex:0,returnFocus:null,overlay:null};
function openPhotoViewer(criterionIndex,photoIndex,photosOverride){
 const photos=photosOverride||state.files[criterionIndex]||[];
 if(!photos.length||!photos[photoIndex])return;
 closePhotoViewer();
 photoViewerState.photos=photos;photoViewerState.index=photoIndex;photoViewerState.criterionIndex=criterionIndex;photoViewerState.returnFocus=document.activeElement;
 const overlay=document.createElement("dialog");overlay.className="photo-viewer-overlay";overlay.setAttribute("role","dialog");overlay.setAttribute("aria-modal","true");overlay.setAttribute("aria-label","Visualizador de evidências fotográficas");
 overlay.innerHTML='<button type="button" class="photo-viewer-close" aria-label="Fechar visualizador">×</button><button type="button" class="photo-viewer-nav photo-viewer-prev" aria-label="Foto anterior">‹</button><figure class="photo-viewer-figure"><img class="photo-viewer-image" alt=""><figcaption class="photo-viewer-caption"></figcaption></figure><button type="button" class="photo-viewer-nav photo-viewer-next" aria-label="Próxima foto">›</button><div class="photo-viewer-counter" aria-live="polite"></div>';
 overlay.addEventListener("click",e=>{if(e.target===overlay||(!e.target.closest(".photo-viewer-image,.photo-viewer-nav,.photo-viewer-close")))closePhotoViewer();});
 overlay.querySelector(".photo-viewer-close").addEventListener("click",closePhotoViewer);
 overlay.querySelector(".photo-viewer-prev").addEventListener("click",showPreviousPhoto);
 overlay.querySelector(".photo-viewer-next").addEventListener("click",showNextPhoto);
 document.body.appendChild(overlay);photoViewerState.overlay=overlay;overlay.showModal();document.body.classList.add("photo-viewer-open");document.addEventListener("keydown",handlePhotoViewerKeys);renderPhotoViewerImage();overlay.querySelector(".photo-viewer-close").focus();
}
function renderPhotoViewerImage(){
 const overlay=photoViewerState.overlay,p=photoViewerState.photos[photoViewerState.index];if(!overlay||!p)return;
 const image=overlay.querySelector(".photo-viewer-image");image.src=p.dataUrl;image.alt=p.name||"Evidência fotográfica";
 overlay.querySelector(".photo-viewer-caption").textContent=p.name||"Evidência fotográfica";
 overlay.querySelector(".photo-viewer-counter").textContent=(photoViewerState.index+1)+" de "+photoViewerState.photos.length;
 overlay.querySelector(".photo-viewer-prev").disabled=photoViewerState.index<=0;
 overlay.querySelector(".photo-viewer-next").disabled=photoViewerState.index>=photoViewerState.photos.length-1;
}
function closePhotoViewer(){
 const overlay=photoViewerState.overlay;if(!overlay)return;
 document.removeEventListener("keydown",handlePhotoViewerKeys);if(overlay.open)overlay.close();overlay.remove();photoViewerState.overlay=null;photoViewerState.photos=[];document.body.classList.remove("photo-viewer-open");
 if(photoViewerState.returnFocus?.isConnected)photoViewerState.returnFocus.focus();photoViewerState.returnFocus=null;
}
function showNextPhoto(){if(photoViewerState.index<photoViewerState.photos.length-1){photoViewerState.index++;renderPhotoViewerImage();}}
function showPreviousPhoto(){if(photoViewerState.index>0){photoViewerState.index--;renderPhotoViewerImage();}}
function handlePhotoViewerKeys(e){if(!photoViewerState.overlay)return;if(e.key==="Escape"){e.preventDefault();closePhotoViewer();}else if(e.key==="ArrowRight"){e.preventDefault();showNextPhoto();}else if(e.key==="ArrowLeft"){e.preventDefault();showPreviousPhoto();}}

function formatHistoryDate(value){if(!value)return"—";const d=new Date(value.length===10?value+"T12:00:00":value);return Number.isNaN(d.getTime())?String(value):d.toLocaleDateString("pt-BR");}
function historyScore(record){if(record.mode==="moradia")return"Sem pontuação";const n=Number(record.conformity);return Number.isFinite(n)?n.toFixed(2).replace(".",",")+"%":"Não calculada";}
function renderHistoryList(){
 const host=$("#historyList");if(!host)return;
 const module=$("#historyModule")?.value||"all",term=($("#historySearch")?.value||"").trim().toLocaleLowerCase("pt-BR");
 const records=readHistory().filter(r=>(module==="all"||r.sector===module)&&(!term||[r.reportCode,r.obra,r.responsavel,r.sectorName].some(v=>String(v||"").toLocaleLowerCase("pt-BR").includes(term)))).sort((a,b)=>String(b.completedAt||b.savedAt||"").localeCompare(String(a.completedAt||a.savedAt||"")));
 if(!records.length){host.innerHTML='<div class="history-empty"><strong>Nenhuma inspeção encontrada</strong><p>Os registros concluídos neste navegador aparecerão aqui.</p></div>';return;}
 host.innerHTML=records.map(r=>'<article class="history-card"><div class="history-card-main"><div class="history-card-title"><strong>'+esc(r.reportCode||"Inspeção sem código")+'</strong><span class="history-status '+(r.status==="finalizado"?"is-finalized":"")+'">'+esc(r.status==="finalizado"?"Finalizada":r.status==="reaberto"?"Reaberta":"Gerada")+'</span></div><h3>'+esc(r.obra||"Empreendimento não informado")+'</h3><div class="history-card-meta"><span><small>Módulo</small>'+esc(r.sectorName||r.sector||"—")+'</span><span><small>Data</small>'+esc(formatHistoryDate(r.date))+'</span><span><small>Responsável</small>'+esc(r.responsavel||"Não informado")+'</span><span><small>Pontuação</small>'+esc(historyScore(r))+'</span></div></div><div class="history-card-actions"><button type="button" class="btn secondary" data-history-open="'+esc(r.id)+'">Abrir</button><button type="button" class="btn secondary" data-history-pdf="'+esc(r.id)+'" '+(!r.pdfName?"disabled":"")+'>PDF</button><button type="button" class="btn danger" data-history-delete="'+esc(r.id)+'">Excluir</button></div></article>').join("");
 host.querySelectorAll("[data-history-open]").forEach(b=>b.addEventListener("click",()=>showHistoryDetails(b.dataset.historyOpen)));
 host.querySelectorAll("[data-history-pdf]").forEach(b=>b.addEventListener("click",()=>downloadHistoryPdf(b.dataset.historyPdf)));
 host.querySelectorAll("[data-history-delete]").forEach(b=>b.addEventListener("click",()=>deleteHistoryInspection(b.dataset.historyDelete)));
}
async function downloadHistoryPdf(id,model){
 try{const saved=await readReportPdf(id,model);if(!saved?.blob){alert("Este modelo de PDF não está disponível neste navegador.");return;}const url=URL.createObjectURL(saved.blob),a=document.createElement("a");a.href=url;a.download=saved.name||"relatorio.pdf";a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}catch(e){alert("Não foi possível baixar o PDF: "+e.message);}
}
async function showHistoryDetails(id){
 const record=readHistory().find(r=>r.id===id);if(!record)return;
 const sector=sectors.find(s=>s.id===record.sector),draft=getDraft(id)||{},form=record.form||draft.form||{},ratings=record.ratings||draft.ratings||{},plans=record.actionPlans||draft.actionPlans||{},items=record.mode==="moradia"?buildMoradiaItems(draft.roomCount||record.roomCount||1):(sector?.items||[]),draftItems=draft.items||[];
 const photos=await readInspectionPhotos(id).catch(()=>({}));
 $("#historyDetailTitle").textContent=(record.reportCode||"Inspeção")+" · "+(record.obra||"Obra não informada");
 const general='<section class="history-detail-section"><h3>Dados gerais</h3><div class="history-detail-grid"><div><small>Empreendimento</small><strong>'+esc(form.obra||record.obra||"—")+'</strong></div><div><small>Data</small><strong>'+esc(formatHistoryDate(record.date))+'</strong></div><div><small>Módulo</small><strong>'+esc(record.sectorName||sector?.name||"—")+'</strong></div><div><small>Responsável</small><strong>'+esc(form.responsavel||record.responsavel||"—")+'</strong></div><div><small>Conformidade</small><strong>'+esc(historyScore(record))+'</strong></div><div><small>Status</small><strong>'+esc(record.status||"Gerada")+'</strong></div></div></section>';
 const criteria=items.map((item,index)=>{const rating=ratings[index]||draftItems[index]?.status||"Não classificado",obs=draftItems[index]?.obs||"",plan=plans[index],criterion=Array.isArray(item)?item[0]:(item.question||item.area||("Critério "+(index+1))),evidence=photos[index]||[];return '<article class="history-criterion"><div class="history-criterion-head"><strong>'+(index+1)+'. '+esc(criterion)+'</strong><span class="legend '+String(rating).toLowerCase().replace(/[^a-z]/g,"")+'">'+esc(rating)+'</span></div><p>'+esc(obs||"Sem observação registrada.")+'</p>'+(plan?'<div class="history-plan"><b>Plano de ação · '+esc(plan.criticality||"Criticidade não definida")+'</b><p>'+esc(plan.action||plan.correctiveAction||"Ação não informada")+'</p><small>Responsável: '+esc(plan.responsible||"—")+' · Prazo: '+esc(formatHistoryDate(plan.deadline))+' · Situação: '+esc(actionPlanDisplayStatus(plan))+'</small></div>':"")+(evidence.length?'<div class="history-evidence">'+evidence.map((p,n)=>'<button type="button" class="history-evidence-thumb" data-history-photo-criterion="'+index+'" data-history-photo-index="'+n+'"><img src="'+p.dataUrl+'" alt="'+esc(p.name)+'"><span>'+esc(p.name)+'</span></button>').join("")+'</div>':'')+'</article>';}).join("");
 $("#historyDetailContent").innerHTML=general+'<section class="history-detail-section"><h3>Critérios avaliados e evidências</h3>'+(criteria||'<p>Não há critérios detalhados para este módulo.</p>')+'</section>';
 $("#historyDetailContent").querySelectorAll("[data-history-photo-criterion]").forEach(b=>b.addEventListener("click",()=>{const index=Number(b.dataset.historyPhotoCriterion),n=Number(b.dataset.historyPhotoIndex);openPhotoViewer(index,n,photos[index]||[]);}));
 const dialog=$("#historyDetailDialog");if(!dialog.open)dialog.showModal();
}
async function deleteHistoryInspection(id){
 const record=readHistory().find(r=>r.id===id);if(!record)return;
 if(!confirm("Excluir a inspeção "+(record.reportCode||id)+" deste navegador? O registro, o rascunho associado, as evidências e o PDF arquivado serão removidos localmente. Esta ação não poderá ser desfeita."))return;
 try{
  localStorage.setItem(HISTORY_KEY,JSON.stringify(readHistory().filter(r=>r.id!==id)));
  localStorage.removeItem(DRAFT_PREFIX+id);
  let legacyPhotoPrefix=null;try{const legacyKey=DRAFT_PREFIX+record.sector,legacy=JSON.parse(localStorage.getItem(legacyKey)||"null");if(legacy?.inspectionId===id){localStorage.removeItem(legacyKey);legacyPhotoPrefix=String(record.sector)+":";}}catch(e){}
  try{const idx=JSON.parse(localStorage.getItem(DRAFT_INDEX_KEY)||"[]");localStorage.setItem(DRAFT_INDEX_KEY,JSON.stringify(idx.filter(x=>x.inspectionId!==id)));}catch(e){}
  const db=await openPhotoDB();await new Promise((resolve,reject)=>{const tx=db.transaction(["photos","reports"],"readwrite"),photoStore=tx.objectStore("photos"),keys=photoStore.getAllKeys();keys.onsuccess=()=>keys.result.filter(k=>String(k).startsWith(id+":")||(legacyPhotoPrefix&&String(k).startsWith(legacyPhotoPrefix))).forEach(k=>photoStore.delete(k));tx.objectStore("reports").delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error("Exclusão local cancelada"));});db.close();
  renderHistoryList();renderDashboard();renderFinalizedReports();renderCompletedInspections();alert("Inspeção excluída do armazenamento local deste navegador.");
 }catch(e){console.error("Falha ao excluir inspeção:",e);alert("Não foi possível concluir a exclusão local: "+e.message);}
}

function buildExecutiveReportHtml(data){
 const isMoradia=state.sector.mode==="moradia",score=AuditoriaScore.calculateScore(state.ratings,state.sector.items.length),coverage=AuditoriaScore.calculateCoverage(state.ratings,state.sector.items.length),counts=score.counts;
 const allPlans=Object.entries(state.actionPlans||{}).filter(([i,p])=>p&&(!isMoradia&&["PI","NI"].includes(state.ratings[i])));
 const openPlans=allPlans.filter(([i,p])=>p.status!=="Validado / Encerrado");
 const critical=allPlans.filter(([i,p])=>["PI","NI"].includes(state.ratings[i]));
 const pct=score.score===null?"Não calculável":score.score.toFixed(2).replace(".",",")+"%";
 const logo=new URL("logo-fg.png",location.href).href;
 const rows=critical.map(([i,p])=>{const item=state.sector.items[Number(i)],question=Array.isArray(item)?item[0]:(item?.question||"Critério "+(Number(i)+1));return '<tr><td>'+esc("C"+(Number(i)+1))+'</td><td>'+esc(question)+'</td><td><b class="class-'+esc(state.ratings[i])+'">'+esc(state.ratings[i])+'</b></td><td>'+esc(p.criticality||"Não definida")+'</td><td>'+esc(p.responsible||"Não definido")+'</td><td>'+esc(p.action||p.correctiveAction||"Ação não informada")+'</td></tr>';}).join("");
 const bar=(label,value,total)=>'<div class="exec-bar-row"><span>'+label+'</span><div><i style="width:'+(total?Math.max(0,Math.min(100,value/total*100)):0)+'%"></i></div><b>'+value+'</b></div>';
 const evidence=state.sector.items.flatMap((item,index)=>(state.files[index]||[]).map(p=>({item,index,p})));
 const gallery=evidence.map(x=>'<figure><img src="'+x.p.dataUrl+'" alt="'+esc(x.p.name)+'"><figcaption><b>Critério '+(x.index+1)+'</b> · '+esc(Array.isArray(x.item)?x.item[0]:(x.item?.question||x.item?.area||"Evidência"))+'<br>'+esc(x.p.name)+'</figcaption></figure>').join("");
 const footer='<div class="exec-footer">AUDITORIA 360 · '+esc(state.reportCode||"")+' · Documento gerado localmente</div>';
 const header='<header class="exec-header"><img src="'+logo+'" alt="FG Empreendimentos"><div><b>AUDITORIA 360</b><span>RESUMO EXECUTIVO DE INSPEÇÃO</span></div><strong>'+esc(state.reportCode||"")+'</strong></header>';
 const styles='<style>.exec-page{font:10px Arial,sans-serif;color:#263b40;min-height:970px;position:relative;padding:0 0 26px;box-sizing:border-box;break-after:page;page-break-after:always}.exec-page:last-child{break-after:auto;page-break-after:auto}.exec-header{display:flex;align-items:center;gap:14px;border-bottom:3px solid #135c6c;padding:0 0 12px;margin-bottom:16px}.exec-header img{width:112px;height:48px;object-fit:contain;background:#135c6c;padding:6px;box-sizing:border-box}.exec-header div{display:grid;gap:3px;color:#135c6c}.exec-header div b{font-size:15px}.exec-header div span{font-size:8px;letter-spacing:1.2px}.exec-header>strong{margin-left:auto;color:#135c6c;font-size:13px}.exec-title{font-size:20px;color:#135c6c;margin:12px 0 4px}.exec-subtitle{color:#687a7e;margin:0 0 14px}.exec-meta{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;background:#f0f5f5;padding:12px;border-radius:7px}.exec-meta div{min-width:0}.exec-meta small,.exec-meta b{display:block}.exec-meta small{color:#65777b;font-size:8px;margin-bottom:4px}.exec-meta b{font-size:10px;overflow-wrap:anywhere}.exec-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin:13px 0}.exec-kpi{border:1px solid #d9e4e5;border-radius:7px;padding:10px}.exec-kpi small{display:block;color:#617579;font-size:8px}.exec-kpi b{display:block;color:#135c6c;font-size:19px;margin-top:4px}.exec-section-title{font-size:12px;color:#135c6c;border-bottom:1px solid #dce5e6;padding-bottom:5px;margin:14px 0 8px}.exec-chart{display:grid;grid-template-columns:1fr 1fr;gap:12px}.exec-bars{display:grid;gap:7px}.exec-bar-row{display:grid;grid-template-columns:35px 1fr 22px;align-items:center;gap:7px;font-size:9px}.exec-bar-row>div{height:8px;background:#e7eeee;border-radius:8px;overflow:hidden}.exec-bar-row i{display:block;height:100%;background:#135c6c}.exec-summary{font-size:10px;line-height:1.5}.exec-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:8px}.exec-table th,.exec-table td{border:1px solid #dce5e6;padding:5px;text-align:left;vertical-align:top;overflow-wrap:anywhere}.exec-table th{background:#eaf1f2;color:#135c6c}.exec-footer{position:absolute;bottom:0;left:0;right:0;border-top:1px solid #dce5e6;padding-top:6px;text-align:center;color:#718186;font-size:8px}.exec-plan-list{display:grid;gap:8px}.exec-plan{border:1px solid #dce5e6;border-left:4px solid #c58a19;padding:9px;border-radius:5px;break-inside:avoid}.exec-plan h3{margin:0 0 5px;font-size:10px;color:#135c6c}.exec-plan p{margin:3px 0;line-height:1.4}.exec-plan small{color:#62767a}.exec-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.exec-gallery figure{margin:0;border:1px solid #dce5e6;padding:7px;break-inside:avoid}.exec-gallery img{display:block;width:100%;height:210px;object-fit:contain;background:#f5f7f7}.exec-gallery figcaption{font-size:8px;line-height:1.4;margin-top:6px}.exec-empty{padding:20px;background:#f2f6f6;color:#607277;border-radius:6px;font-size:10px}.class-PI{color:#a16d00}.class-NI{color:#b13d3b}@page{size:A4;margin:10mm}@media print{.exec-page{min-height:270mm}}</style>';
 const page1=header+'<h1 class="exec-title">Resumo Executivo</h1><p class="exec-subtitle">Leitura gerencial da inspeção · '+esc(state.sector.name)+'</p><div class="exec-meta"><div><small>Empreendimento</small><b>'+esc(data.obra||"—")+'</b></div><div><small>Data</small><b>'+esc(data.data||"—")+'</b></div><div><small>Responsável</small><b>'+esc(data.responsavel||"—")+'</b></div><div><small>Módulo</small><b>'+esc(state.sector.name)+'</b></div></div><div class="exec-kpis"><div class="exec-kpi"><small>Conformidade</small><b>'+pct+'</b></div><div class="exec-kpi"><small>Cobertura</small><b>'+(coverage.coverage===null?"—":coverage.coverage.toFixed(2).replace(".",",")+"%")+'</b></div><div class="exec-kpi"><small>IM / OM</small><b>'+(counts.im+counts.om)+'</b></div><div class="exec-kpi"><small>PI / NI</small><b>'+counts.pi+' / '+counts.ni+'</b></div></div><h2 class="exec-section-title">Distribuição das classificações</h2><div class="exec-chart"><div class="exec-bars">'+bar("IM",counts.im,score.evaluated)+bar("OM",counts.om,score.evaluated)+bar("PI",counts.pi,score.evaluated)+bar("NI",counts.ni,score.evaluated)+bar("NA",counts.na,state.sector.items.length)+'</div><div class="exec-summary"><b>Leitura executiva</b><p>'+(isMoradia?"A vistoria FG Moradia não possui cálculo de conformidade. Consulte os registros por ambiente e as evidências no relatório completo.":'Foram avaliados '+score.evaluated+' de '+coverage.applicable+' critérios aplicáveis. Há '+counts.pi+' ocorrência(s) PI e '+counts.ni+' ocorrência(s) NI que exigem tratamento e acompanhamento.')+'</p><p><b>Achados críticos identificados:</b> '+critical.length+'.</p></div></div><h2 class="exec-section-title">Achados PI e NI</h2>'+(rows?'<table class="exec-table"><thead><tr><th style="width:7%">Critério</th><th style="width:34%">Achado</th><th style="width:8%">Class.</th><th style="width:13%">Criticidade</th><th style="width:15%">Responsável</th><th style="width:23%">Ação</th></tr></thead><tbody>'+rows+'</tbody></table>':'<div class="exec-empty">Não foram registrados achados classificados como PI ou NI.</div>')+footer;
 const plans=allPlans.map(([i,p])=>'<article class="exec-plan"><h3>Critério '+(Number(i)+1)+' · '+esc(state.ratings[i])+' · '+esc(p.criticality||"Criticidade não definida")+'</h3><p><b>Ação:</b> '+esc(p.action||p.correctiveAction||"Não informada")+'</p><p><b>Responsável:</b> '+esc(p.responsible||"Não definido")+' · <b>Prazo:</b> '+esc(p.deadline||"Não definido")+'</p><p><b>Situação:</b> '+esc(actionPlanDisplayStatus(p))+' · <b>Evidência:</b> '+esc(p.evidence||"Não informada")+'</p></article>').join("");
 const page2=header+'<h1 class="exec-title">Plano de Ação</h1><p class="exec-subtitle">Síntese dos encaminhamentos associados aos critérios PI e NI.</p><div class="exec-kpis"><div class="exec-kpi"><small>Planos registrados</small><b>'+allPlans.length+'</b></div><div class="exec-kpi"><small>Em aberto</small><b>'+openPlans.length+'</b></div><div class="exec-kpi"><small>PI</small><b>'+counts.pi+'</b></div><div class="exec-kpi"><small>NI</small><b>'+counts.ni+'</b></div></div>'+(plans?'<div class="exec-plan-list">'+plans+'</div>':'<div class="exec-empty">Não há planos de ação PI/NI registrados nesta inspeção.</div>')+footer;
 const page3=header+'<h1 class="exec-title">Galeria de Evidências</h1><p class="exec-subtitle">Evidências fotográficas consolidadas e agrupadas por critério · '+evidence.length+' imagem(ns).</p>'+(gallery?'<div class="exec-gallery">'+gallery+'</div>':'<div class="exec-empty">Não foram anexadas evidências fotográficas nesta inspeção.</div>')+footer;
 return styles+'<section class="exec-page">'+page1+'</section><section class="exec-page">'+page2+'</section><section class="exec-page">'+page3+'</section>';
}
const legacyRenderHome=renderHome;
renderHome=function(){const history=$("#historyView");if(history)history.classList.add("hidden");$("#homeView")?.classList.remove("hidden");$("#inspectionView")?.classList.add("hidden");$("#navDashboard")?.classList.add("active");$("#navHistory")?.classList.remove("active");legacyRenderHome();};
const legacyOpenSector=openSector;
openSector=function(id){$("#historyView")?.classList.add("hidden");$("#homeView")?.classList.add("hidden");$("#inspectionView")?.classList.remove("hidden");$("#navDashboard")?.classList.remove("active");$("#navHistory")?.classList.remove("active");legacyOpenSector(id);};
const legacyRenderCompletedInspections=renderCompletedInspections;
renderCompletedInspections=function(){renderHistoryList();};
function showHistoryView(){if(!$("#inspectionView")?.classList.contains("hidden")&&state.sector&&!saveCurrentDraft("rascunho")){alert("Não foi possível salvar o rascunho antes de abrir o histórico.");return;}closeReportViewer();$("#homeView")?.classList.add("hidden");$("#inspectionView")?.classList.add("hidden");$("#historyView")?.classList.remove("hidden");$("#navDashboard")?.classList.remove("active");$("#navHistory")?.classList.add("active");renderHistoryList();renderFinalizedReports();}
$("#navDashboard")?.addEventListener("click",()=>{if(!$("#inspectionView")?.classList.contains("hidden")&&state.sector&&!saveCurrentDraft("rascunho")){alert("Não foi possível salvar o rascunho antes de sair da inspeção.");return;}renderHome();});
$("#navHistory")?.addEventListener("click",showHistoryView);
$("#historyBack")?.addEventListener("click",renderHome);
$("#historyModule")?.addEventListener("change",renderHistoryList);
$("#historySearch")?.addEventListener("input",renderHistoryList);
$("#historyDetailClose")?.addEventListener("click",()=>$("#historyDetailDialog")?.close());
$("#historyDetailDialog")?.addEventListener("click",e=>{if(e.target===$("#historyDetailDialog"))$("#historyDetailDialog").close();});
renderHistoryList();

/* Ajustes do gerador A4 e wrappers de navegação — preserva a aplicação principal. */
function buildPdfPhotoGrid(photos, limit = 4) {
  const items = Array.isArray(photos) ? photos.slice(0, limit) : [];
  if (!items.length) return '<div class="pdf-empty">Sem evidências fotográficas anexadas.</div>';
  return '<div class="pdf-photo-grid">' + items.map((photo) => '<figure class="pdf-photo"><img src="' + (photo.dataUrl || '') + '" alt="' + esc(photo.name || 'Evidência') + '"><figcaption>' + esc(photo.name || 'Evidência') + '</figcaption></figure>').join('') + '</div>';
}

function buildStandardReportHtml(data = {}) {
  const sector = state.sector || { name: 'Inspeção', items: [] };
  const form = data && Object.keys(data).length ? data : formData();
  const logo = new URL('logo-fg.png', location.href).href;
  const scoreResult = sector.mode === 'moradia' ? { score: null, evaluated: 0, counts: { im: 0, om: 0, pi: 0, ni: 0, na: 0 } } : AuditoriaScore.calculateScore(state.ratings, sector.items.length);
  const coverageResult = sector.mode === 'moradia' ? { coverage: 0 } : AuditoriaScore.calculateCoverage(state.ratings, sector.items.length);
  const actionItems = Object.entries(state.actionPlans || {}).filter(([index, plan]) => plan && ['PI', 'NI'].includes(state.ratings[index]));
  const evidenceRows = sector.items.map((item, index) => {
    const rating = state.ratings[index] || 'PENDENTE';
    const obs = document.querySelector('[data-q="' + index + '"] [data-field="obs"]')?.value || '';
    const photos = state.files[index] || [];
    const question = Array.isArray(item) ? item[0] : (item && item.question) || 'Critério ' + (index + 1);
    return '<tr><td>' + (index + 1) + '</td><td>' + esc(question) + '</td><td>' + esc(rating) + '</td><td>' + esc(obs || '—') + '</td><td>' + buildPdfPhotoGrid(photos, 2) + '</td></tr>';
  }).join('');
  const actionRows = actionItems.map(([index, plan]) => {
    const question = Array.isArray(sector.items[Number(index)]) ? sector.items[Number(index)][0] : (sector.items[Number(index)] && sector.items[Number(index)].question) || 'Critério ' + (Number(index) + 1);
    return '<tr><td>' + (Number(index) + 1) + '</td><td>' + esc(question) + '</td><td>' + esc(state.ratings[index] || '—') + '</td><td>' + esc(plan.criticality || 'Não definida') + '</td><td>' + esc(plan.responsible || '—') + '</td><td>' + esc(plan.deadline || '—') + '</td></tr>';
  }).join('');
  const reportCode = state.reportCode || '—';
  const ratingCards = [
    ['IM', scoreResult.counts?.im || 0],
    ['OM', scoreResult.counts?.om || 0],
    ['PI', scoreResult.counts?.pi || 0],
    ['NI', scoreResult.counts?.ni || 0],
    ['NA', scoreResult.counts?.na || 0]
  ].map(([label, value]) => '<div class="pdf-kpi"><span>' + label + '</span><strong>' + value + '</strong></div>').join('');

  return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório Auditoria 360</title><style>' +
    '@page { size: A4 portrait; margin: 12mm; }' +
    'html, body { margin: 0; padding: 0; background: #fff; color: #1d2f35; font-family: Arial, sans-serif; }' +
    '.pdf-page { width: 100%; min-height: 277mm; box-sizing: border-box; padding: 0; page-break-after: always; }' +
    '.pdf-page:last-child { page-break-after: auto; }' +
    '.pdf-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; border-bottom: 2px solid #dfe7ea; padding-bottom: 10px; margin-bottom: 16px; }' +
    '.pdf-brand { display: flex; align-items: center; gap: 12px; }' +
    '.pdf-brand img { width: 58px; height: 58px; object-fit: contain; }' +
    '.pdf-brand strong { display: block; font-size: 16px; color: #135c6c; }' +
    '.pdf-brand span { font-size: 10px; color: #57707b; letter-spacing: 1.2px; }' +
    '.pdf-code { border: 2px solid #135c6c; color: #135c6c; font-weight: 700; font-size: 20px; border-radius: 8px; padding: 7px 10px; }' +
    '.pdf-meta { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; margin: 18px 0; }' +
    '.pdf-meta-card { background: #f5f9f9; border: 1px solid #dfe7ea; border-radius: 8px; padding: 10px 12px; }' +
    '.pdf-meta-card small { display: block; color: #60777d; font-size: 9px; text-transform: uppercase; letter-spacing: .8px; margin-bottom: 4px; }' +
    '.pdf-meta-card b { display: block; font-size: 11px; line-height: 1.35; overflow-wrap: anywhere; }' +
    '.pdf-summary { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; margin: 18px 0 10px; }' +
    '.pdf-kpi { background: #edf4f5; border: 1px solid #dfe7ea; border-radius: 8px; padding: 10px; text-align: center; }' +
    '.pdf-kpi span { display: block; font-size: 9px; color: #60777d; text-transform: uppercase; }' +
    '.pdf-kpi strong { display: block; font-size: 21px; margin-top: 4px; color: #135c6c; }' +
    '.pdf-section { margin-top: 20px; }' +
    '.pdf-section h2 { margin: 0 0 10px; font-size: 15px; color: #135c6c; border-bottom: 1px solid #dfe7ea; padding-bottom: 8px; }' +
    '.pdf-table { width: 100%; border-collapse: collapse; font-size: 9px; }' +
    '.pdf-table th, .pdf-table td { border: 1px solid #dfe7ea; padding: 7px 6px; text-align: left; vertical-align: top; }' +
    '.pdf-table th { background: #edf4f5; color: #254951; font-size: 9px; text-transform: uppercase; }' +
    '.pdf-table td:nth-child(1) { width: 5%; }' +
    '.pdf-table td:nth-child(2) { width: 30%; }' +
    '.pdf-table td:nth-child(3) { width: 8%; }' +
    '.pdf-table td:nth-child(4) { width: 25%; }' +
    '.pdf-table td:nth-child(5) { width: 32%; }' +
    '.pdf-photo-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }' +
    '.pdf-photo { margin: 0; padding: 6px; border: 1px solid #dfe7ea; border-radius: 8px; background: #fafcfc; }' +
    '.pdf-photo img { display: block; width: 100%; height: 88px; object-fit: cover; border-radius: 6px; }' +
    '.pdf-photo figcaption { display: block; margin-top: 5px; font-size: 8px; color: #51696d; overflow-wrap: anywhere; }' +
    '.pdf-empty { background: #f7fafb; border: 1px dashed #d5dfe1; border-radius: 7px; color: #647a80; font-size: 10px; padding: 10px; }' +
    '.pdf-capsule { display: inline-block; border-radius: 999px; background: #edf4f5; color: #1d2f35; font-size: 9px; font-weight: 700; padding: 5px 8px; }' +
    '@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }' +
    '</style></head><body>' +
    '<article class="pdf-page"><div class="pdf-header"><div class="pdf-brand"><img src="' + logo + '" alt="FG Empreendimentos"><div><strong>AUDITORIA 360</strong><span>INSPEÇÃO INTEGRADA DE OBRAS</span></div></div><div class="pdf-code">' + esc(reportCode) + '</div></div>' +
    '<div class="pdf-meta"><div class="pdf-meta-card"><small>Obra</small><b>' + esc(form.obra || 'Não informado') + '</b></div><div class="pdf-meta-card"><small>Empresa</small><b>' + esc(form.empresa || 'Não informado') + '</b></div><div class="pdf-meta-card"><small>Data</small><b>' + esc(form.data || 'Não informado') + '</b></div><div class="pdf-meta-card"><small>Responsável</small><b>' + esc(form.responsavel || 'Não informado') + '</b></div></div>' +
    '<div class="pdf-summary">' + ratingCards + '</div>' +
    '<div class="pdf-meta"><div class="pdf-meta-card"><small>Setor</small><b>' + esc(sector.name) + '</b></div><div class="pdf-meta-card"><small>Local / pavimento</small><b>' + esc(form.local || 'Não informado') + '</b></div><div class="pdf-meta-card"><small>Conformidade</small><b>' + (sector.mode === 'moradia' ? 'Sem pontuação' : (scoreResult.score == null ? '—' : Number(scoreResult.score).toFixed(2).replace('.', ',') + '%')) + '</b></div><div class="pdf-meta-card"><small>Cobertura</small><b>' + (sector.mode === 'moradia' ? 'N/A' : (Number(coverageResult.coverage || 0).toFixed(2).replace('.', ',') + '%')) + '</b></div></div>' +
    '<div class="pdf-section"><h2>Critérios avaliados</h2><table class="pdf-table"><thead><tr><th>#</th><th>Critério</th><th>Class.</th><th>Observações</th><th>Evidências</th></tr></thead><tbody>' + evidenceRows + '</tbody></table></div>' +
    '</article>' +
    '<article class="pdf-page"><div class="pdf-header"><div class="pdf-brand"><img src="' + logo + '" alt="FG Empreendimentos"><div><strong>AUDITORIA 360</strong><span>PLANO DE AÇÃO</span></div></div><div class="pdf-code">' + esc(reportCode) + '</div></div>' +
    '<div class="pdf-section"><h2>Plano de ação</h2><table class="pdf-table"><thead><tr><th>#</th><th>Critério</th><th>Class.</th><th>Criticidade</th><th>Responsável</th><th>Prazo</th></tr></thead><tbody>' + (actionRows || '<tr><td colspan="6"><div class="pdf-empty">Nenhum item com plano de ação vinculado.</div></td></tr>') + '</tbody></table></div>' +
    '</article>' +
    '</body></html>';
}

function buildExecutiveReportHtml(data) {
  const isMoradia = state.sector?.mode === 'moradia';
  const score = isMoradia ? null : AuditoriaScore.calculateScore(state.ratings, state.sector.items.length);
  const coverage = isMoradia ? null : AuditoriaScore.calculateCoverage(state.ratings, state.sector.items.length);
  const allPlans = Object.entries(state.actionPlans || {}).filter(([index, plan]) => plan && (!isMoradia && ['PI', 'NI'].includes(state.ratings[index])));
  const openPlans = allPlans.filter(([index, plan]) => plan.status !== 'Validado / Encerrado');
  const critical = allPlans.filter(([index, plan]) => ['PI', 'NI'].includes(state.ratings[index]));
  const pct = score ? (score.score == null ? 'Não calculável' : score.score.toFixed(2).replace('.', ',') + '%') : 'Sem pontuação';
  const logo = new URL('logo-fg.png', location.href).href;
  const reportCode = state.reportCode || '—';
  const programSummary = [
    ['Inspeção', state.sector?.name || '—'],
    ['Obra / empreendimento', (data && data.obra) || '—'],
    ['Responsável', (data && data.responsavel) || '—'],
    ['Data', (data && data.data) || '—'],
    ['Cobertura', coverage ? Number(coverage.coverage || 0).toFixed(2).replace('.', ',') + '%' : 'N/A'],
    ['Conformidade', pct]
  ].map(([label, value]) => '<div class="exec-metric"><small>' + label + '</small><strong>' + esc(value) + '</strong></div>').join('');
  const rows = critical.map(([index, plan]) => {
    const item = state.sector.items[Number(index)];
    const question = Array.isArray(item) ? item[0] : (item && item.question) || 'Critério ' + (Number(index) + 1);
    return '<tr><td>' + (Number(index) + 1) + '</td><td>' + esc(question) + '</td><td>' + esc(state.ratings[index] || '—') + '</td><td>' + esc(plan.criticality || 'Não definida') + '</td><td>' + esc(plan.responsible || '—') + '</td><td>' + esc(plan.deadline || '—') + '</td></tr>';
  }).join('') || '<tr><td colspan="6"><div class="pdf-empty">Nenhuma ação crítica registrada.</div></td></tr>';
  const evidence = state.sector.items.flatMap((item, index) => (state.files[index] || []).map((photo) => ({ item, index, photo })));
  const gallery = evidence.length ? evidence.slice(0, 6).map((entry) => '<figure class="exec-photo"><img src="' + (entry.photo.dataUrl || '') + '" alt="' + esc(entry.photo.name || 'Evidência') + '"><figcaption><b>Critério ' + (entry.index + 1) + '</b> · ' + esc(Array.isArray(entry.item) ? entry.item[0] : (entry.item && entry.item.question) || 'Critério ' + (entry.index + 1)) + '</figcaption></figure>').join('') : '<div class="pdf-empty">Sem evidências fotográficas para compor a galeria.</div>';
  return '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Resumo executivo — Auditoria 360</title><style>' +
    '@page { size: A4 portrait; margin: 12mm; }' +
    'html, body { margin: 0; padding: 0; background: #fff; color: #1d2f35; font-family: Arial, sans-serif; }' +
    '.exec-page { width: 100%; min-height: 0; height: auto; box-sizing: border-box; page-break-after: always; padding: 0; margin: 0; }' +
    '.exec-page:last-child { page-break-after: auto; break-after: auto; }' +
    '.exec-header { display: flex; align-items: center; justify-content: space-between; gap: 12px; border-bottom: 2px solid #dfe7ea; padding-bottom: 10px; margin-bottom: 14px; }' +
    '.exec-brand { display: flex; align-items: center; gap: 12px; }' +
    '.exec-brand img { width: 58px; height: 58px; object-fit: contain; }' +
    '.exec-brand strong { display: block; font-size: 16px; color: #135c6c; }' +
    '.exec-brand span { display: block; font-size: 10px; color: #57707b; letter-spacing: 1px; }' +
    '.exec-code { border: 2px solid #135c6c; color: #135c6c; font-size: 18px; font-weight: 700; padding: 7px 10px; border-radius: 8px; }' +
    '.exec-title { font-size: 18px; color: #135c6c; margin: 18px 0 10px; }' +
    '.exec-subtitle { font-size: 10px; color: #60777d; margin: 0 0 12px; }' +
    '.exec-metrics { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin: 14px 0 16px; }' +
    '.exec-metric { background: #f5f9f9; border: 1px solid #dfe7ea; border-radius: 8px; padding: 10px 12px; }' +
    '.exec-metric small { display: block; font-size: 9px; text-transform: uppercase; color: #60777d; margin-bottom: 6px; }' +
    '.exec-metric strong { display: block; font-size: 13px; color: #1d2f35; overflow-wrap: anywhere; }' +
    '.exec-table { width: 100%; border-collapse: collapse; font-size: 9px; }' +
    '.exec-table th, .exec-table td { border: 1px solid #dfe7ea; padding: 7px 6px; text-align: left; vertical-align: top; }' +
    '.exec-table th { background: #edf4f5; text-transform: uppercase; }' +
    '.exec-photo-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 14px; }' +
    '.exec-photo { margin: 0; border: 1px solid #dfe7ea; border-radius: 8px; background: #fafcfc; padding: 7px; }' +
    '.exec-photo img { display: block; width: 100%; height: 110px; object-fit: cover; border-radius: 6px; }' +
    '.exec-photo figcaption { font-size: 8px; color: #51696d; line-height: 1.35; padding-top: 5px; overflow-wrap: anywhere; }' +
    '.pdf-empty { background: #f7fafb; border: 1px dashed #d5dfe1; border-radius: 7px; color: #647a80; font-size: 10px; padding: 10px; }' +
    '@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }' +
    '</style></head><body>' +
    '<article class="exec-page"><div class="exec-header"><div class="exec-brand"><img src="' + logo + '" alt="FG Empreendimentos"><div><strong>AUDITORIA 360</strong><span>RESUMO EXECUTIVO</span></div></div><div class="exec-code">' + esc(reportCode) + '</div></div>' +
    '<h1 class="exec-title">Resumo executivo da inspeção</h1>' +
    '<p class="exec-subtitle">Setor: ' + esc(state.sector?.name || '—') + ' · Empreendimento: ' + esc(data && data.obra ? data.obra : 'Não informado') + '</p>' +
    '<div class="exec-metrics">' + programSummary + '</div>' +
    '<div class="pdf-section"><h2>Panorama das ações críticas</h2><table class="exec-table"><thead><tr><th>#</th><th>Critério</th><th>Class.</th><th>Criticidade</th><th>Responsável</th><th>Prazo</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '</article>' +
    '<article class="exec-page"><div class="exec-header"><div class="exec-brand"><img src="' + logo + '" alt="FG Empreendimentos"><div><strong>AUDITORIA 360</strong><span>PLANO DE AÇÃO</span></div></div><div class="exec-code">' + esc(reportCode) + '</div></div>' +
    '<h1 class="exec-title">Ações prioritárias</h1>' +
    '<p class="exec-subtitle">Quantidade de itens críticos: ' + critical.length + ' · Ações abertas: ' + openPlans.length + '</p>' +
    '<div class="pdf-section"><table class="exec-table"><thead><tr><th>#</th><th>Critério</th><th>Class.</th><th>Criticidade</th><th>Responsável</th><th>Prazo</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '</article>' +
    '<article class="exec-page"><div class="exec-header"><div class="exec-brand"><img src="' + logo + '" alt="FG Empreendimentos"><div><strong>AUDITORIA 360</strong><span>GALERIA DE EVIDÊNCIAS</span></div></div><div class="exec-code">' + esc(reportCode) + '</div></div>' +
    '<h1 class="exec-title">Evidências fotográficas</h1>' +
    '<p class="exec-subtitle">Total de imagens: ' + evidence.length + '</p>' +
    '<div class="exec-photo-grid">' + gallery + '</div>' +
    '</article>' +
    '</body></html>';
}

/* Gerador versionado explícito: evita colisão com declarações legadas homônimas. */
async 
async function generateAndArchivePdf(id, model = "complete") { return generateAndArchivePdfVersion(id, model); }

async function pdfImageData(src) {
  if (!src) return null;
  if (/^data:image\//i.test(src)) return src;
  try {
    const response = await fetch(src);
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) { console.warn("Imagem não incluída no PDF:", error); return null; }
}

async function generateAndArchivePdfVersion(id, model = "complete") {
  const JsPDF = window.jspdf && window.jspdf.jsPDF;
  if (typeof JsPDF !== "function") throw new Error("Biblioteca local jsPDF indisponível.");
  const selectedModel = model === "executive" ? "executive" : "complete";
  const form = formData();
  const sector = state.sector || { name: "Inspeção", items: [] };
  const isMoradia = sector.mode === "moradia";
  const score = isMoradia ? null : AuditoriaScore.calculateScore(state.ratings, sector.items.length);
  const coverage = isMoradia ? null : AuditoriaScore.calculateCoverage(state.ratings, sector.items.length);
  const counts = score && score.counts ? score.counts : { im: 0, om: 0, pi: 0, ni: 0, na: 0 };
  const doc = new JsPDF({ orientation: "portrait", unit: "mm", format: "a4", compress: true, precision: 16 });
  const page = { width: 210, height: 297, left: 14, right: 14, top: 30, bottom: 17 };
  const usable = page.width - page.left - page.right;
  let y = page.top;
  let pageNumber = 1;
  const logo = await pdfImageData(new URL("logo-fg.png", location.href).href);
  const colors = { brand: [19, 92, 108], ink: [34, 52, 58], muted: [91, 112, 119], line: [215, 226, 229], pale: [239, 246, 247], white: [255, 255, 255] };
  const reportCode = state.reportCode || "—";
  const safeWork = String(form.obra || "Inspecao").replace(/[^a-zA-Z0-9_ -]/g, "").trim().replace(/\s+/g, "_").slice(0, 40) || "Inspecao";
  const filename = ((reportCode || "Relatorio") + "_" + safeWork + (selectedModel === "executive" ? "_EXECUTIVO" : "_COMPLETO") + ".pdf").replace(/_+/g, "_");

  function setText(color, size, style) {
    doc.setTextColor(...color); doc.setFont("helvetica", style || "normal"); doc.setFontSize(size);
  }
  function newPage() { doc.addPage("a4", "portrait"); pageNumber++; y = page.top; drawHeader(); }
  function ensure(height) { if (y + height > page.height - page.bottom) newPage(); }
  function drawHeader() {
    doc.setFillColor(...colors.white); doc.rect(0, 0, page.width, 25, "F");
    if (logo) doc.addImage(logo, "PNG", page.left, 5, 28, 14, undefined, "FAST");
    setText(colors.brand, 12, "bold");
    doc.text("AUDITORIA 360", logo ? page.left + 33 : page.left, 11);
    setText(colors.muted, 7, "normal");
    doc.text(selectedModel === "executive" ? "RELATÓRIO EXECUTIVO" : "RELATÓRIO COMPLETO DE INSPEÇÃO", logo ? page.left + 33 : page.left, 16);
    doc.setDrawColor(...colors.brand); doc.setLineWidth(0.7); doc.line(page.left, 23, page.width - page.right, 23);
    setText(colors.brand, 8, "bold");
    doc.text(reportCode, page.width - page.right, 12, { align: "right" });
  }
  function drawFooters() {
    const total = doc.getNumberOfPages();
    for (let p = 1; p <= total; p++) {
      doc.setPage(p);
      doc.setDrawColor(...colors.line); doc.setLineWidth(0.35);
      doc.line(page.left, page.height - 12, page.width - page.right, page.height - 12);
      setText(colors.muted, 7, "normal");
      doc.text("AUDITORIA 360 · " + reportCode, page.left, page.height - 7);
      doc.text("Página " + p + " de " + total, page.width / 2, page.height - 7, { align: "center" });
      doc.text(new Date().toLocaleDateString("pt-BR"), page.width - page.right, page.height - 7, { align: "right" });
    }
  }
  function section(title) {
    ensure(13);
    y += 3; doc.setFillColor(...colors.pale); doc.roundedRect(page.left, y, usable, 8, 1.2, 1.2, "F");
    setText(colors.brand, 9, "bold"); doc.text(title, page.left + 3, y + 5.4); y += 12;
  }
  function wrapped(text, width, size = 8, style = "normal", color = colors.ink, x = page.left) {
    const lines = doc.splitTextToSize(String(text == null || text === "" ? "—" : text), width);
    const lineHeight = size * 0.42 + 1.1;
    for (const line of lines) {
      if (y + lineHeight > page.height - page.bottom) newPage();
      setText(color, size, style);
      doc.text(String(line), x, y);
      y += lineHeight;
    }
    return lines.length * lineHeight;
  }
  function field(label, value, x, yy, width) {
    setText(colors.muted, 6.5, "bold"); doc.text(String(label).toUpperCase(), x, yy);
    setText(colors.ink, 8, "normal");
    const lines = doc.splitTextToSize(String(value || "Não informado"), width);
    doc.text(lines, x, yy + 4);
    return Math.max(10, lines.length * 3.5 + 5);
  }
  function metadata() {
    section("IDENTIFICAÇÃO DA INSPEÇÃO");
    const fields = [
      ["Setor / módulo", sector.name], ["Obra / empreendimento", form.obra],
      ["Empresa", form.empresa], ["Data", form.data],
      ["Responsável", form.responsavel], ["Local / pavimento", form.local],
      ["Colaborador", form.colaborador], ["ID da inspeção", state.inspectionId]
    ].filter(x => x[1] || x[0] !== "Colaborador");
    const gap = 5, colW = (usable - gap) / 2;
    for (let i = 0; i < fields.length; i += 2) {
      const h1 = field(fields[i][0], fields[i][1], page.left, y, colW - 4);
      const h2 = fields[i + 1] ? field(fields[i + 1][0], fields[i + 1][1], page.left + colW + gap, y, colW - 4) : 0;
      y += Math.max(h1, h2) + 2;
      ensure(12);
    }
    if (isMoradia) {
      ensure(12);
      wrapped("Quantidade de quartos: " + (state.roomCount || 1), usable, 8, "bold");
    }
    if (state.gps) wrapped("Localização registrada: " + state.gps.latitude + ", " + state.gps.longitude + " · Precisão aproximada: " + Math.round(state.gps.accuracy || 0) + " m", usable, 7, "normal", colors.muted);
  }
  function summary() {
    section("SÍNTESE DOS RESULTADOS");
    if (isMoradia) {
      wrapped("Vistoria de entrega de unidade residencial. A avaliação é qualitativa e não utiliza pontuação de conformidade.", usable, 8);
      return;
    }
    const labels = [["IM", counts.im || 0], ["OM", counts.om || 0], ["PI", counts.pi || 0], ["NI", counts.ni || 0], ["NA", counts.na || 0]];
    const boxW = (usable - 4 * 2) / 5;
    labels.forEach((entry, i) => {
      const x = page.left + i * (boxW + 2);
      doc.setFillColor(...colors.pale); doc.roundedRect(x, y, boxW, 15, 1.2, 1.2, "F");
      setText(colors.muted, 6.5, "bold"); doc.text(entry[0], x + boxW / 2, y + 5, { align: "center" });
      setText(colors.brand, 12, "bold"); doc.text(String(entry[1]), x + boxW / 2, y + 11.5, { align: "center" });
    });
    y += 19;
    const pct = score && score.score != null ? Number(score.score).toFixed(2).replace(".", ",") + "%" : "Não calculável";
    const cov = coverage && coverage.coverage != null ? Number(coverage.coverage).toFixed(2).replace(".", ",") + "%" : "Não calculável";
    wrapped("Conformidade: " + pct + " · Cobertura: " + cov + " · Critérios avaliados: " + (score?.evaluated || 0) + "/" + sector.items.length + " · Pontos: " + (score?.pointsTotal ?? 0), usable, 8, "bold", colors.brand);
    wrapped("Metodologia: IM = 1,00; OM = 1,00; PI = 0,65; NI = 0,00; NA não contabilizado. A cobertura mede a abrangência do checklist e não altera o percentual de conformidade.", usable, 7, "normal", colors.muted);
  }
  function criterionTitle(index, title, reference, rating, observation) {
    const titleText = title || "Critério " + (index + 1);
    const titleLines = doc.splitTextToSize(String(titleText), usable - 15);
    const titleLineHeight = 8.5 * 0.42 + 1.1;
    const maxKeepHeight = page.height - page.top - page.bottom;
    // Reserva o bloco completo do título antes de desenhar o marcador.
    // Assim, marcador e título não se separam quando o texto quebra linhas.
    ensure(Math.max(14, Math.min(maxKeepHeight, titleLines.length * titleLineHeight + 2)));
    doc.setFillColor(...colors.pale); doc.roundedRect(page.left, y - 2, 9, 8, 1, 1, "F");
    setText(colors.brand, 8, "bold"); doc.text(String(index + 1), page.left + 4.5, y + 3.3, { align: "center" });
    wrapped(titleText, usable - 15, 8.5, "bold", colors.ink, page.left + 12);
    if (reference) wrapped("Referência: " + reference, usable - 15, 6.8, "italic", colors.muted, page.left + 12);
    wrapped("CLASSIFICAÇÃO: " + (rating || "—"), usable - 15, 7, "bold", colors.brand, page.left + 12);
    wrapped("OBSERVAÇÕES: " + (observation || "Sem observações registradas."), usable - 15, 7.5, "normal", colors.ink, page.left + 12);
    y += 2;
  }
  async function addPhotos(photos, captionPrefix) {
    if (!photos || !photos.length) return;
    const gap = 4, colW = (usable - gap) / 2, imageH = 34, cardH = 44;
    for (let i = 0; i < photos.length; i += 2) {
      ensure(cardH + 2);
      for (let j = 0; j < 2 && i + j < photos.length; j++) {
        const photo = photos[i + j], x = page.left + j * (colW + gap);
        doc.setDrawColor(...colors.line); doc.setFillColor(250, 252, 252); doc.roundedRect(x, y, colW, cardH, 1, 1, "FD");
        const dataUrl = await pdfImageData(photo.dataUrl);
        if (dataUrl) {
          try {
            const props = doc.getImageProperties(dataUrl);
            const scale = Math.min((colW - 4) / props.width, imageH / props.height);
            const iw = props.width * scale, ih = props.height * scale;
            doc.addImage(dataUrl, (dataUrl.indexOf("image/png") >= 0 ? "PNG" : "JPEG"), x + (colW - iw) / 2, y + 2 + (imageH - ih) / 2, iw, ih, undefined, "FAST");
          } catch (error) { setText(colors.muted, 7); doc.text("Imagem indisponível", x + 4, y + 17); }
        } else { setText(colors.muted, 7); doc.text("Imagem indisponível", x + 4, y + 17); }
        setText(colors.muted, 6.2, "normal");
        doc.text(String(captionPrefix || "Evidência") + " " + (i + j + 1) + " · " + String(photo.name || "Foto").slice(0, 60), x + 3, y + 41);
      }
      y += cardH + 3;
    }
  }
  function actionPlan(index, item, plan) {
    const title = Array.isArray(item) ? item[0] : item?.question || item?.title || "Critério " + (index + 1);
    ensure(22);
    doc.setDrawColor(...colors.line); doc.roundedRect(page.left, y, usable, 1, 0.5, 0.5, "F");
    y += 4;
    wrapped((index + 1) + ". " + title + " · " + (state.ratings[index] || "—"), usable, 8, "bold", colors.brand);
    const rows = [
      ["Criticidade", plan.criticality || "Não definida"], ["Responsável", plan.responsible || "Não definido"],
      ["Prazo", plan.deadline || "Não definido"], ["Ação corretiva", plan.action || "Não registrada"],
      ["Evidência / referência", plan.evidence || "Não informada"], ["Situação", actionPlanDisplayStatus(plan)],
      ["Validação do auditor", plan.auditorNote || "Não registrada"]
    ];
    rows.forEach(row => { ensure(10); wrapped(row[0] + ": " + row[1], usable - 4, 7.3); });
    if (plan.validatedAt) wrapped("Data da validação: " + new Date(plan.validatedAt).toLocaleString("pt-BR"), usable - 4, 6.8, "normal", colors.muted);
    (plan.history || []).forEach(h => {
      ensure(9);
      wrapped("Histórico · " + new Date(h.at).toLocaleString("pt-BR") + " · " + h.field + ": " + (h.from || "—") + " para " + (h.to || "—"), usable - 4, 6.5, "normal", colors.muted);
    });
    y += 3;
  }
  function addGeneralNotes() {
    section("CONSIDERAÇÕES GERAIS");
    wrapped(form.consideracoes || "Não informado.", usable, 8);
    if (state.reportIntegrity) {
      y += 3; wrapped("Integridade do registro: SHA-256 " + (state.reportIntegrity.hash || state.reportIntegrity.sha256 || "calculado no registro da inspeção") + ". O hash apoia a verificação de integridade, mas não substitui validação técnica.", usable, 6.5, "normal", colors.muted);
    }
    ensure(24); y += 8;
    setText(colors.muted, 7); doc.line(page.left, y, page.left + 65, y); doc.text(isMoradia ? "Responsável pela vistoria" : "Responsável pela inspeção", page.left, y + 4);
    if (isMoradia) { doc.line(page.left + 82, y, page.left + 147, y); doc.text("Colaborador(a) recebedor(a)", page.left + 82, y + 4); }
  }

  drawHeader();
  metadata();
  if (selectedModel === "executive") {
    summary();
    if (!isMoradia) {
      section("PANORAMA DAS AÇÕES PRIORITÁRIAS");
      const critical = sector.items.map((item, index) => ({ item, index, plan: state.actionPlans[index] })).filter(x => ["PI", "NI"].includes(state.ratings[x.index]));
      if (!critical.length) wrapped("Não há critérios PI/NI com plano de ação nesta inspeção.", usable, 8);
      for (const entry of critical) {
        actionPlan(entry.index, entry.item, entry.plan || {});
        const photos = state.files[entry.index] || [];
        if (photos.length) await addPhotos(photos, "Evidência do critério " + (entry.index + 1));
      }
    }
    if (isMoradia) {
      section("PENDÊNCIAS DA VISTORIA");
      for (let i = 0; i < sector.items.length; i++) {
        const item = sector.items[i], card = document.querySelector('[data-q="' + i + '"]');
        const status = card?.querySelector('[data-field="status"]')?.value || "Não preenchido";
        const obs = card?.querySelector('[data-field="obs"]')?.value || "";
        if (status !== "Conforme" || obs) {
          wrapped((item.area || "Ambiente") + " · " + (item.question || "Item") + " · " + status + (obs ? " · " + obs : ""), usable, 7.5);
          await addPhotos(state.files[i] || [], "Foto");
        }
      }
    }
    const evidence = sector.items.flatMap((item, index) => (state.files[index] || []).map(photo => ({ item, index, photo })));
    if (evidence.length && !isMoradia) {
      section("EVIDÊNCIAS RELEVANTES");
      for (const entry of evidence.slice(0, 6)) {
        wrapped("Critério " + (entry.index + 1) + " · " + (Array.isArray(entry.item) ? entry.item[0] : entry.item?.question || "Critério"), usable, 7, "bold");
        await addPhotos([entry.photo], "Foto");
      }
    }
    addGeneralNotes();
  } else {
    summary();
    section(isMoradia ? "CHECKLIST DE ENTREGA DO APARTAMENTO" : "DETALHAMENTO DOS CRITÉRIOS");
    for (let index = 0; index < sector.items.length; index++) {
      const item = sector.items[index], card = document.querySelector('[data-q="' + index + '"]');
      if (isMoradia) {
        const status = card?.querySelector('[data-field="status"]')?.value || "Não preenchido";
        const obs = card?.querySelector('[data-field="obs"]')?.value || "";
        criterionTitle(index, (item.area || "Ambiente") + " · " + (item.question || "Item verificado"), "", status, obs);
      } else {
        const rating = state.ratings[index] || "PENDENTE";
        const obs = card?.querySelector('[data-field="obs"]')?.value || "";
        criterionTitle(index, Array.isArray(item) ? item[0] : item?.question || item?.title || "Critério " + (index + 1), Array.isArray(item) ? item[1] : item?.reference || "", rating, obs);
      }
      await addPhotos(state.files[index] || [], "Foto");
      y += 3;
    }
    if (!isMoradia) {
      section("PLANO DE AÇÃO E ACOMPANHAMENTO");
      const plans = sector.items.map((item, index) => ({ item, index, plan: state.actionPlans[index] })).filter(x => x.plan && ["PI", "NI"].includes(state.ratings[x.index]));
      if (!plans.length) wrapped("Nenhum plano de ação vinculado a critérios PI ou NI.", usable, 8);
      for (const entry of plans) actionPlan(entry.index, entry.item, entry.plan);
    }
    addGeneralNotes();
  }

  drawFooters();
  const blob = doc.output("blob");
  if (!blob || blob.type !== "application/pdf" || blob.size < 1000) throw new Error("O PDF nativo gerado está vazio ou inválido.");
  return await saveReportPdf(id, blob, filename, selectedModel);
}
