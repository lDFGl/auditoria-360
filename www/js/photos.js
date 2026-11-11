function imageAsDataURL(file){return new Promise((resolve,reject)=>{if(!file.type.startsWith("image/")){reject(new Error("Selecione somente arquivos de imagem."));return;}const reader=new FileReader();reader.onerror=()=>reject(new Error("Não foi possível ler "+file.name));reader.onload=()=>{const img=new Image();img.onerror=()=>reject(new Error("Imagem inválida: "+file.name));img.onload=()=>{const max=1600,scale=Math.min(1,max/Math.max(img.width,img.height)),canvas=document.createElement("canvas");canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);resolve({name:file.name,dataUrl:canvas.toDataURL("image/jpeg",0.82)});};img.src=reader.result;};reader.readAsDataURL(file);});}
function renderPhotoGallery(card,index){const host=card.querySelector(".photo-gallery");if(!host)return;host.innerHTML="";(state.files[index]||[]).forEach((p,n)=>{const item=document.createElement("div");item.className="photo-thumb";const img=document.createElement("img");img.src=p.dataUrl;img.alt=p.name;img.tabIndex=0;img.setAttribute("role","button");img.setAttribute("aria-label","Ampliar evidência: "+p.name);img.addEventListener("click",()=>openPhotoViewer(index,n));img.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openPhotoViewer(index,n);}});const name=document.createElement("span");name.textContent=p.name;const remove=document.createElement("button");remove.type="button";remove.textContent="×";remove.setAttribute("aria-label","Remover "+p.name);remove.addEventListener("click",async()=>{state.files[index].splice(n,1);renderPhotoGallery(card,index);try{await storePhotos(state.inspectionId,index,state.files[index]);}catch(e){alert("Não foi possível atualizar o armazenamento das fotos.");}});item.append(img,name,remove);host.append(item);});}


function bindPhotoInput(card){
 const inputs=[card.querySelector('[data-field="foto-file"]'),card.querySelector('[data-field="foto-camera"]')].filter(Boolean);
 if(!inputs.length)return;
 card.querySelectorAll("[data-photo-action]").forEach(button=>button.addEventListener("click",()=>{const input=card.querySelector('[data-field="foto-'+button.dataset.photoAction+'"]');if(input)input.click();}));
 inputs.forEach(input=>input.addEventListener("change",async e=>{const i=+card.dataset.q,selected=Array.from(e.target.files||[]),current=state.files[i]||[],remaining=5-current.length;if(!selected.length)return;if(remaining<=0){alert("Limite de 5 fotos por item.");input.value="";return;}try{const added=await Promise.all(selected.slice(0,remaining).map(imageAsDataURL));state.files[i]=current.concat(added);renderPhotoGallery(card,i);await storePhotos(state.inspectionId,i,state.files[i]);}catch(err){alert(err.message||"Falha ao adicionar as fotos.");}input.value="";}));
}

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

