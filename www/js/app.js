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
    '.exec-page { width: 100%; min-height: 277mm; box-sizing: border-box; page-break-after: always; padding: 0; }' +
    '.exec-page:last-child { page-break-after: auto; }' +
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

async function generateAndArchivePdf(id, model = 'complete') {
  if (typeof window.html2pdf !== 'function') throw new Error('Biblioteca local de geração de PDF indisponível.');
  const content = $('#reportContent');
  if (!content) throw new Error('Área de relatório indisponível.');
  const selectedModel = model || window.__a360PdfModel || 'complete';
  const previous = content.innerHTML;
  window.__a360PdfModel = selectedModel;
  try {
    content.innerHTML = selectedModel === 'executive' ? buildExecutiveReportHtml(formData()) : buildStandardReportHtml(formData());
    content.classList.add('pdf-capturing');
    await waitForReportAssets(content);
    const filenameBase = (state.reportCode || 'Relatorio') + '_' + String(formData().obra || 'Inspecao').replace(/[^a-zA-Z0-9_\- ]/g, '').replace(/\s+/g, '_').slice(0, 40);
    const suffix = selectedModel === 'executive' ? '_EXECUTIVO' : '_COMPLETO';
    const filename = (filenameBase + suffix + '.pdf').replace(/_+/g, '_');
    const renderPromise = window.html2pdf().set({
      margin: [8, 8, 10, 8],
      filename,
      image: { type: 'jpeg', quality: 0.85 },
      html2canvas: { scale: 1.8, useCORS: true, backgroundColor: '#ffffff', scrollX: 0, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
    let timeoutId;
    const blob = await Promise.race([
      renderPromise,
      new Promise((_, reject) => {
        timeoutId = setTimeout(() => reject(new Error('A geração do PDF excedeu 120 segundos. Reduza a quantidade de fotos ou o tamanho das imagens.')), 120000);
      })
    ]);
    if (timeoutId) clearTimeout(timeoutId);
    if (!blob || blob.type !== 'application/pdf' || blob.size < 1000) throw new Error('O PDF gerado está vazio ou inválido.');
    return await saveReportPdf(id, blob, filename, selectedModel);
  } finally {
    content.classList.remove('pdf-capturing');
    content.innerHTML = previous;
    delete window.__a360PdfModel;
  }
}

const generateAndArchivePdfOriginal = generateAndArchivePdf;
async function generateAndArchivePdf(id, model = 'complete') {
  const content = $('#reportContent');
  if (!content) throw new Error('Área de relatório indisponível.');
  const previous = content.innerHTML;
  const selectedModel = model || window.__a360PdfModel || 'complete';
  window.__a360PdfModel = selectedModel;
  try {
    if (selectedModel === 'executive') {
      content.innerHTML = buildExecutiveReportHtml(formData());
    } else {
      content.innerHTML = buildStandardReportHtml(formData());
    }
    content.classList.add('pdf-capturing');
    return await generateAndArchivePdfOriginal(id, selectedModel);
  } finally {
    content.innerHTML = previous;
    content.classList.remove('pdf-capturing');
    delete window.__a360PdfModel;
  }
}

const legacyRenderHome = renderHome;
renderHome = function() { const history = $('#historyView'); if (history) history.classList.add('hidden'); $('#homeView')?.classList.remove('hidden'); $('#inspectionView')?.classList.add('hidden'); $('#navDashboard')?.classList.remove('active'); $('#navHistory')?.classList.remove('active'); };
const legacyOpenSector = openSector;
openSector = function(id) { $('#historyView')?.classList.add('hidden'); $('#homeView')?.classList.add('hidden'); $('#inspectionView')?.classList.remove('hidden'); $('#navDashboard')?.classList.remove('active'); $('#navHistory')?.classList.remove('active'); return legacyOpenSector(id); };
const legacyRenderCompletedInspections = renderCompletedInspections;
renderCompletedInspections = function() { renderHistoryList(); };
function showHistoryView() { if (!$('#inspectionView')?.classList.contains('hidden') && state.sector && !saveCurrentDraft('rascunho')) { alert('Não foi possível salvar o rascunho antes de abrir o histórico.'); return; } $('#historyView')?.classList.remove('hidden'); $('#homeView')?.classList.add('hidden'); $('#inspectionView')?.classList.add('hidden'); $('#navHistory')?.classList.add('active'); $('#navDashboard')?.classList.remove('active'); renderHistoryList(); }
$('#navDashboard')?.addEventListener('click', () => { if (!$('#inspectionView')?.classList.contains('hidden') && state.sector && !saveCurrentDraft('rascunho')) { alert('Não foi possível salvar o rascunho antes de abrir o dashboard.'); return; } renderHome(); $('#navDashboard')?.classList.add('active'); $('#navHistory')?.classList.remove('active'); });
$('#navHistory')?.addEventListener('click', showHistoryView);
$('#historyBack')?.addEventListener('click', renderHome);
$('#historyModule')?.addEventListener('change', renderHistoryList);
$('#historySearch')?.addEventListener('input', renderHistoryList);
$('#historyDetailClose')?.addEventListener('click', () => $('#historyDetailDialog')?.close());
$('#historyDetailDialog')?.addEventListener('click', e => { if (e.target === $('#historyDetailDialog')) $('#historyDetailDialog').close(); });
renderHistoryList();
