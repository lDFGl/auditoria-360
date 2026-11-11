# Auditoria 360 — Inspeção Integrada de Obras

Aplicação web estática para apoio a inspeções multidisciplinares em obras, publicada pelo GitHub Pages.

## Módulos
- Auditoria Interna
- Engenharia
- Qualidade
- Almoxarifado
- SESMT
- FG Moradia

Os cinco módulos de verificação utilizam 20 critérios iniciais, com classificações independentes IM, OM, PI, NI e NA. O FG Moradia possui checklist de entrega por ambiente, quantidade configurável de quartos e inventário de móveis e eletrodomésticos, sem cálculo de pontuação.

## Pontuação
- IM = 1,00 ponto; OM = 1,00 ponto.
- PI = 0,65 ponto.
- NI = 0,00 ponto.
- NA = não contabilizado: fica fora do numerador e do denominador.
- Critérios pendentes não entram no cálculo; são apresentados separadamente.
- Fórmula: (soma dos pontos obtidos ÷ quantidade de critérios classificados, excluídos os NA) × 100.
- O percentual é apresentado com duas casas decimais.
- A ordem visual e do relatório é IM → OM → PI → NI → NA.

## Recursos desta versão
- Identificador individual da inspeção nos relatórios.
- Salvamento e recuperação de rascunhos independentes por inspeção no navegador, incluindo dados gerais, classificações, observações, estados do FG Moradia, quantidade de quartos e localização registrada.
- Evidências fotográficas redimensionadas (lado máximo de 1.600 px, JPEG 0,82) e armazenadas no IndexedDB do dispositivo.
- Recuperação das fotos junto ao rascunho, desde que os dados locais do navegador não tenham sido apagados.
- No FG Moradia, o colaborador recebedor é obrigatório para emissão do relatório.
- Ao alterar a quantidade de quartos, o sistema solicita confirmação e reinicia os registros e as fotos da vistoria para evitar associação incorreta de evidências.
- Geração nativa de PDF A4 com jsPDF 2.5.2, texto vetorial, paginação, cabeçalho/rodapé e evidências fotográficas associadas aos critérios.
- Disponibilização dos modelos PDF Completo e PDF Executivo, ambos arquivados localmente no IndexedDB.
- PWA com cache versionado, atualização controlada e fallback offline para os arquivos da interface.

## Estrutura
```
.github/workflows/   automações de validação e publicação
tests/               testes automatizados
www/
  index.html         entrada da aplicação
  css/               estilos
  js/app.js          orquestração da aplicação
  js/storage.js      persistência local, rascunhos, histórico e PDFs
  js/photos.js       leitura, tratamento, galeria e visualizador de fotos
  logo-fg.png        identidade visual
  manifest.webmanifest
  sw.js              cache do shell para uso offline
```

## Limitações e proteção das informações
- Rascunhos, identificadores e metadados ficam no armazenamento local do navegador; as fotos ficam no IndexedDB do mesmo dispositivo.
- Não há sincronização entre dispositivos, banco de dados centralizado, autenticação, perfis de acesso, trilha de auditoria imutável ou backup corporativo.
- Limpar os dados do navegador, trocar de dispositivo ou usar navegação privada pode eliminar os rascunhos e as evidências.
- O identificador gerado é local e não constitui numeração global sequencial nem prova de autenticidade.
- O cache offline armazena apenas os arquivos da interface; não representa sincronização ou backup dos dados.
- Não utilizar esta versão estática como repositório oficial de evidências sensíveis ou dados pessoais. Para uso corporativo oficial, será necessária avaliação e aprovação de arquitetura, segurança da informação, privacidade, governança e infraestrutura.

As referências normativas dos critérios são orientativas e devem ser validadas pelos responsáveis técnicos antes do uso operacional.


## Painel de indicadores (versão GitHub Pages)
O painel inicial apresenta indicadores calculados a partir do histórico de relatórios gerados neste navegador:
- total de inspeções concluídas;
- conformidade média dos cinco módulos pontuados (IM = 1,00; OM = 1,00; PI = 0,65; NI = 0,00; NA fora do cálculo);
- quantidade de NI e pendências;
- distribuição IM/OM, NA, PI e NI;
- inspeções por módulo e por mês;
- filtros por módulo e período (todo o histórico, 30 dias, 90 dias ou 12 meses).

As vistorias FG Moradia são contabilizadas separadamente e não entram na conformidade média. O histórico registra um resumo ao gerar o relatório, limitado aos 500 registros mais recentes, sem armazenar cópias das fotos no painel. Os dados permanecem no navegador/dispositivo e podem ser apagados pelo próprio painel; não há consolidação corporativa, sincronização ou backup central.


## Proteção de rascunhos e evidências
- Cada inspeção usa um identificador próprio e um rascunho independente. Inspeções simultâneas do mesmo módulo deixam de sobrescrever umas às outras.
- Na primeira abertura, os rascunhos legados por módulo são copiados para chaves por inspectionId. As chaves antigas permanecem como salvaguarda.
- As fotos novas são armazenadas no IndexedDB com a chave `inspectionId:indiceDoCriterio`. A migração copia as fotos legadas correspondentes sem apagar os registros originais.
- A janela de recuperação permite continuar, descartar com confirmação própria ou iniciar uma nova inspeção. Fechar, pressionar Esc ou clicar fora não exclui dados.
- O aplicativo solicita armazenamento persistente quando o navegador oferece suporte; a concessão não é garantida e não substitui backups externos.
- O rascunho e as fotos só são limpos após confirmação explícita depois da geração do relatório ou após descarte explícito.

## PWA, fontes e integridade
- O Service Worker utiliza identificador do commit no deploy e network-first para navegação, HTML, CSS e JavaScript, com fallback de cache para uso offline.
- Os ícones vetoriais 192, 512 e maskable usam a marca FG existente sobre o fundo institucional #135c6c.
- As famílias locais DM Sans e Manrope são servidas por um WOFF2 variável cada, acompanhadas das respectivas licenças SIL Open Font License 1.1.
- A pontuação é centralizada em `www/js/score.js`; persistência e histórico estão em `www/js/storage.js`, e tratamento/visualização de evidências em `www/js/photos.js`. Os testes estão em `tests/score.test.js`, `tests/form.test.js` e `tests/pdf.integration.test.js`.
- Os relatórios registram timestamp ISO, versão, inspectionId e hash SHA-256 do conteúdo e das evidências fotográficas. Se Web Crypto não estiver disponível, o relatório informa a indisponibilidade do hash.
- O hash só permite detectar alterações se o valor original for registrado em meio externo confiável (por exemplo, e-mail corporativo, sistema documental ou ata). Não é assinatura digital, não comprova autoria e não garante, isoladamente, autenticidade jurídica.


## Relatórios e histórico local
- A conclusão da inspeção prepara o relatório dentro da própria aplicação. Os modelos **PDF Completo** e **PDF Executivo** são gerados nativamente em A4 com jsPDF 2.5.2, texto vetorial e arquivamento local no IndexedDB; não dependem de impressão do navegador nem de CDN.
- A geração do relatório não exclui o rascunho nem as fotografias. O usuário pode retornar ao checklist e continuar a inspeção.
- O painel geral consulta o histórico local em `auditoria360-inspection-history-v1`. O período dos indicadores considera a data de conclusão do registro; a data preenchida no formulário permanece como data da vistoria.
- O histórico é local ao navegador e dispositivo; não representa consolidação multiusuário.


## PDFs nativos e apresentação dos relatórios
- O código individual da inspeção é apresentado nos metadados e no cabeçalho/rodapé do PDF.
- O **PDF Completo** apresenta identificação, indicadores, critérios, classificações, referências, observações, planos de ação e considerações gerais.
- As evidências fotográficas são posicionadas junto ao respectivo critério, com legenda e preservação da proporção da imagem.
- O **PDF Executivo** consolida os resultados e as ações prioritárias PI/NI dos módulos pontuados. No FG Moradia, apresenta as pendências qualitativas, sem nota ou classificação PI/NI.
- Os documentos são gerados em A4, orientação retrato, com texto vetorial e paginação nativa. A reserva de espaço evita separar o marcador numerado do título do critério.
- A geração utiliza jsPDF 2.5.2 distribuído localmente; os PDFs ficam arquivados no IndexedDB do navegador e podem ser gerados sem CDN.
- O aviso de integridade esclarece que o hash SHA-256 não substitui assinatura digital nem registro externo confiável.
- Versão do aplicativo: **2.6.0**.

As melhorias de relatório não alteram a metodologia de pontuação, a cobertura, os planos de ação, a criticidade ou os registros históricos. O código legível organiza a identificação, mas permanece local e não representa protocolo central corporativo.


## Histórico, evidências e relatórios executivos

- O menu **Histórico de inspeções** concentra os registros concluídos, com consulta dos dados gerais, critérios, evidências fotográficas e planos de ação.
- Cada registro permite abrir a inspeção, baixar o PDF arquivado ou excluir os dados locais associados. A exclusão exige confirmação e remove o registro, rascunho, evidências e PDF daquele identificador.
- As evidências podem ser ampliadas em visualizador fullscreen, com navegação entre imagens do mesmo critério, fechamento por Esc ou clique no fundo.
- Na finalização, é possível escolher **PDF Executivo** ou **PDF Completo**. O executivo consolida resumo e indicadores, achados PI/NI, planos de ação e galeria fotográfica. No FG Moradia, apresenta pendências qualitativas sem classificações PI/NI ou cálculo de conformidade. O completo mantém o detalhamento operacional, com cabeçalho, rodapé e evidências agrupadas por critério.
- A biblioteca jsPDF 2.5.2 é distribuída localmente em `www/js/vendor/jspdf.umd.min.js`, acompanhada da licença MIT em `www/js/vendor/jspdf.LICENSE.txt`, permitindo gerar PDFs sem CDN.
- O dashboard prioriza indicadores de inspeções realizadas, conformidade média, planos em aberto, críticos em aberto e ações vencidas.

Os dados continuam locais ao navegador/dispositivo. A tela de histórico não representa uma base corporativa compartilhada, sincronização entre usuários ou backup central. A exclusão no histórico é permanente para os dados locais daquele registro.


## Testes automatizados

Requer Node.js 22. Execute:

```bash
npm install
npx playwright install chromium
npm test
```

A suíte mantém os testes funcionais existentes e inclui testes de integração em navegador para PDFs efetivamente gerados. Os testes extraem texto com PDF.js e verificam conteúdo, acentuação, paginação, consistência entre modelos, módulos e evidências. Eles não substituem uma revisão visual humana de cada relatório.
