# Bolso Jovem

Site de educação e controle financeiro para jovens, feito em HTML, CSS e JavaScript puro (Vanilla JS). Os dados ficam salvos no navegador com `localStorage`.

## Como abrir

Abra `index.html` no navegador. Para uma experiência melhor, use a extensão Live Server do VS Code.

## Funcionalidades

- Login demonstrativo (sem servidor; os dados ficam apenas neste navegador).
- Painel com saldo, receitas, despesas e resumo mensal.
- Cadastro, edição e exclusão de movimentações.
- Metas financeiras com acompanhamento.
- Relatórios por categoria.
- Conteúdo educativo sobre organização financeira.
- Configurações de nome, tema e tamanho do texto.

> **Atenção:** esta é uma aplicação demonstrativa. Não use senhas reais, dados bancários ou informações financeiras sensíveis. O login não oferece autenticação segura e os dados ficam no `localStorage` do navegador.

## Estrutura

```text
Bolso-Jovem/
├── index.html
├── pages/
│   ├── login.html
│   ├── inicio.html
│   ├── metas.html
│   ├── relatorios.html
│   ├── movimentacoes.html
│   ├── investimentos.html
│   ├── educacao.html
│   └── configuracoes.html
└── assets/
    ├── css/style.css
    └── js/
        ├── config.js
        ├── dados.js
        └── pages/
            ├── login.js
            ├── inicio.js
            ├── metas.js
            ├── relatorios.js
            ├── movimentacoes.js
            └── configuracoes.js
```

## Publicar no GitHub Pages

1. Crie um repositório chamado `bolso-jovem`.
2. Envie todos os arquivos e pastas deste projeto.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação. O endereço aparecerá na própria página do GitHub Pages.

O site usa caminhos relativos e pode ser publicado no GitHub Pages.
