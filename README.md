# Auditoria 360 — Inspeção Integrada de Obras

Aplicação web estática para apoio a inspeções multidisciplinares em obras, publicada pelo GitHub Pages.

## Módulos
- Auditoria Interna
- Engenharia
- Qualidade
- Almoxarifado
- SESMT
- FG Moradia

Os cinco módulos de verificação utilizam 20 critérios iniciais, com classificação IM/OM, NA, PI e NI. O FG Moradia possui checklist de entrega por ambiente, quantidade configurável de quartos e inventário de móveis e eletrodomésticos, sem cálculo de pontuação.

## Pontuação
- IM/OM = 100 pontos
- PI = 50 pontos
- NI = 0 ponto
- NA = excluído do denominador
- Critérios pendentes não entram no cálculo; são apresentados separadamente.
- A ordem do relatório é IM/OM → NA → PI → NI.

## Recursos desta versão
- Identificador individual da inspeção nos relatórios.
- Salvamento e recuperação de rascunhos por módulo no navegador, incluindo dados gerais, classificações, observações, estados do FG Moradia, quantidade de quartos e localização registrada.
- Evidências fotográficas redimensionadas (lado máximo de 1.600 px, JPEG 0,82) e armazenadas no IndexedDB do dispositivo.
- Recuperação das fotos junto ao rascunho, desde que os dados locais do navegador não tenham sido apagados.
- No FG Moradia, o colaborador recebedor é obrigatório para emissão do relatório.
- Ao alterar a quantidade de quartos, o sistema solicita confirmação e reinicia os registros e as fotos da vistoria para evitar associação incorreta de evidências.
- Relatório preparado para impressão ou salvamento em PDF pelo navegador.
- Cache dos arquivos da interface para acesso offline limitado.

## Estrutura
```
.github/workflows/   automações de validação e publicação
app/                 documentação da arquitetura da aplicação
www/
  index.html         entrada da aplicação
  css/               estilos
  js/app.js          lógica do navegador
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
- conformidade média dos cinco módulos pontuados (IM/OM = 100, PI = 50, NI = 0; NA fora do denominador);
- quantidade de NI e pendências;
- distribuição IM/OM, NA, PI e NI;
- inspeções por módulo e por mês;
- filtros por módulo e período (todo o histórico, 30 dias, 90 dias ou 12 meses).

As vistorias FG Moradia são contabilizadas separadamente e não entram na conformidade média. O histórico registra um resumo ao gerar o relatório, limitado aos 500 registros mais recentes, sem armazenar cópias das fotos no painel. Os dados permanecem no navegador/dispositivo e podem ser apagados pelo próprio painel; não há consolidação corporativa, sincronização ou backup central.
