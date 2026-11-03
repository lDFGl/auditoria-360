# Auditoria 360 — Inspeção Integrada de Obras

Aplicação web estática para inspeções multidisciplinares em obras.

## Módulos
- Auditoria Interna
- Engenharia
- Qualidade
- Almoxarifado
- SESMT

Cada módulo contém 20 critérios iniciais, com classificação IM/OM, NA, PI e NI, observação, localização e seleção de evidências fotográficas.

## Cálculo de conformidade
- IM/OM = 100 pontos
- PI = 50 pontos
- NI = 0 ponto
- NA = excluído do denominador

**Conformidade = soma dos pontos dos itens aplicáveis ÷ quantidade de itens aplicáveis.**

A classificação NA não pontua e não reduz o percentual. Critérios ainda não avaliados não entram no cálculo; o relatório informa a quantidade pendente.

## Executar
Abra `index.html` em um navegador ou publique a raiz do repositório pelo GitHub Pages.

## Relatórios e armazenamento — limitações da versão inicial
O relatório é preparado para impressão/salvamento em PDF pelo navegador. Os rascunhos ficam no armazenamento local do navegador. Os nomes dos arquivos de evidência são listados no relatório, mas os arquivos não são enviados nem incorporados ao PDF nesta versão.

Esta versão não oferece autenticação, controle de acesso, numeração global sequencial, sincronização entre usuários ou banco de dados. Esses recursos exigem backend, autenticação e armazenamento centralizado. Não utilize esta versão estática como repositório oficial de evidências sensíveis.

## Referências
As referências apresentadas em cada critério são orientativas. A aplicabilidade, edição vigente, requisitos legais locais e critérios de aceitação devem ser validados pelos responsáveis técnicos e pelo SESMT antes do uso operacional. Não substitui projetos, procedimentos internos, laudos ou avaliação profissional.

## Publicação
Em **Settings → Pages**, selecionar a branch `main` e a pasta `/ (root)`, se o plano e as configurações do repositório permitirem a publicação de Pages em repositório privado.
