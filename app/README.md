# Estrutura da aplicação

Esta pasta reserva a organização dos componentes de domínio da aplicação (configurações, regras de negócio e integrações futuras).

A interface publicada está em `www/`:
- `www/index.html`: entrada da aplicação.
- `www/css/`: estilos.
- `www/js/`: lógica do navegador.
- `www/manifest.webmanifest` e `www/sw.js`: instalação PWA e cache offline do shell.

A separação de autenticação, perfis, banco de dados, sincronização e numeração global deverá ser implementada em backend antes de uso multiusuário.
