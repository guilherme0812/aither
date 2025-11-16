# 🌿 Aither — Plataforma de Créditos de Carbono focada em ODS 3 e 11

Bem-vindo ao **Aither**, uma plataforma moderna e intuitiva para compra de créditos de carbono, com foco direto nos Objetivos de Desenvolvimento Sustentável **ODS 3 (Saúde e Bem-Estar)** e **ODS 11 (Cidades e Comunidades Sustentáveis)**.

Este projeto foi desenvolvido com **Next.js**, **TailwindCSS**, **shadcn/ui** e **React Icons**, seguindo um design profissional, moderno e totalmente responsivo.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 14 (App Router)**
- **React 18**
- **TailwindCSS**
- **shadcn/ui**
- **React Icons**
- **Framer Motion** (animações)

---

## 🎯 Funcionalidades Principais

### Homepage completa contendo:

- Hero banner de página inteira
- Texto motivacional e institucional
- Informações sobre impactos da poluição do ar na sociedade
- Sessão com diversos cards de créditos de carbono disponíveis para compra
- Cards com exibem:

  - Nome do projeto
  - ODS vinculada
  - Preço do crédito
  - Botão de compra funcional

- Navbar profissional
- Footer institucional
- Design inspirado em marketplaces modernos

---

## 🏛️ Objetivo do Projeto

O **Aither** tem como missão conectar pessoas e empresas a iniciativas que:

- Reduzem diretamente a emissão de CO₂
- Apoiam comunidades urbanas
- Melhoram a qualidade do ar
- Incentivam práticas sustentáveis alinhadas à ONU

---

## 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/seuusuario/carbon-air.git
cd carbon-air
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

Configure o shadcn/ui:

```bash
npx shadcn init
```

Instale os componentes necessários (exemplo):

```bash
npx shadcn add button card badge input navigation-menu
```

Inicie o servidor:

```bash
npm run dev
```

---

## 📁 Estrutura do Projeto

```
project
│── app
│   ├── page.tsx        # Página Home
│   ├── layout.tsx      # Layout base
│
│── components          # Componentes reutilizáveis
│── lib                 # Utilitários
│── public              # Imagens
│── styles              # Estilos globais
│
└── README.md
```

---

## 💳 Fluxo de Compra

O fluxo de compra foi estruturado para permitir:

- Seleção de um projeto
- Escolha da quantidade de créditos
- Cálculo automático do valor
- Checkout (pode integrar com Stripe / API real futuramente)

---

## 📌 Melhorias Futuras

- Integração real com APIs de créditos de carbono
- Dashboard para acompanhar créditos comprados
- Sistema de login (NextAuth)
- Página de detalhes de cada projeto
- Integração com banco de dados via Prisma

---

## 🤝 Contribuição

Sinta-se livre para abrir PRs ou issues com sugestões de melhoria.

---

## 📜 Licença

Este projeto está licenciado sob **MIT License**.

---

## 🌱 Sobre o Aither

Criado para incentivar um futuro mais limpo, sustentável e saudável.

> "Respirar ar puro é um direito, não um privilégio."
