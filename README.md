# Auditoria 360 — Inspeção Integrada de Obras

Aplicação web estática para inspeções multidisciplinares em obras.

## Setores
- Auditoria Interna
- Engenharia
- Qualidade
- Almoxarifado
- SESMT

Cada setor possui 20 critérios iniciais (100 no total), com classificação IM/OM, NA, PI e NI, observação, localização e seleção de evidências fotográficas.

## Pontuação
- IM/OM = 100 pontos
- PI = 50 pontos
- NI = 0 ponto
- NA = excluído do denominador

Os critérios pendentes não entram no cálculo. A ordem do relatório é IM/OM → NA → PI → NI.

## Estrutura
```
.github/workflows/   automações de validação e publicação
app/                 documentação da arquitetura da aplicação
www/
  index.html         entrada da aplicação
  css/               estilos
  js/                lógica do navegador
  manifest.webmanifest
  sw.js              cache do shell para uso offline
```

## Publicação
O workflow `Publicar Auditoria 360 no GitHub Pages` publica automaticamente o conteúdo de `www/` após push na branch `main`.

No GitHub, acesse **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação. A primeira execução também pode ser iniciada em **Actions → Publicar Auditoria 360 no GitHub Pages → Run workflow**.

## Limitações desta fase
- Rascunhos permanecem no armazenamento local do navegador.
- Evidências fotográficas: até 5 imagens por critério, redimensionadas para reduzir o armazenamento, mantidas localmente no IndexedDB do navegador e incorporadas ao relatório para impressão/salvamento em PDF. Não há sincronização ou backup centralizado das fotos.
- Não há autenticação, controle de acesso por setor, sincronização multiusuário, banco de dados ou numeração global sequencial.
- O cache offline armazena os arquivos da interface; não representa sincronização nem backup centralizado dos dados.

Não utilize a versão estática como repositório oficial de evidências sensíveis. As referências normativas dos critérios são orientativas e devem ser validadas pelos responsáveis técnicos antes do uso operacional.
