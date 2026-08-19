### React - TypeScript - Vite

# 💰 Educa.Finança

> Um educador financeiro pessoal desenvolvido com React e Inteligência Artificial Generativa.

O **Educa.Finança** é uma aplicação web de planejamento financeiro pessoal que utiliza **Inteligência Artificial Generativa** para transformar informações financeiras do usuário em um diagnóstico personalizado, sugestões práticas e um plano de ação.

A aplicação permite que o usuário informe sua **renda, gastos, objetivos financeiros e metas**, como uma viagem ou a compra de um bem. A partir dessas informações, a inteligência artificial analisa o cenário e apresenta recomendações personalizadas para ajudar o usuário a alcançar seu objetivo.

Toda a aplicação funciona diretamente no navegador, utilizando **localStorage** para persistência dos dados e a **API do Google Gemini** para geração das análises.

---

## ✨ Funcionalidades

- 💰 Cadastro de informações de renda e gastos
- 🎯 Definição de metas financeiras
- 🤖 Diagnóstico financeiro utilizando IA Generativa
- 📊 Análise personalizada da situação financeira
- 💡 Sugestões práticas para economia
- 💼 Ideias de renda extra
- 📋 Plano de ação personalizado
- 📚 Histórico das análises realizadas
- 💾 Persistência de dados utilizando `localStorage`
- ⚡ Geração de análises em tempo real
- 📱 Interface responsiva
- 🎨 Interface construída com Tailwind CSS
- 🔄 Navegação entre páginas utilizando React Router

---

## 🧠 Como funciona

O fluxo principal da aplicação funciona da seguinte maneira:

┌──────────────────────┐
│  Usuário informa     │
│  dados financeiros   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Educa.Finança      │
│                      │
│ Processa os dados    │
│ e prepara o contexto │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Google Gemini     │
│                      │
│ Analisa as           │
│ informações          │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Diagnóstico          │
│ financeiro           │
│                      │
│ • Sugestões          │
│ • Renda extra        │
│ • Plano de ação      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      Histórico       │
│                      │
│ Dados armazenados    │
│ no localStorage      │
└──────────────────────┘

## 🛠️ Stacks do Projeto

### 📦 Dependências de Produção

| Pacote | Versão | Finalidade |
|---|---|---|
| `react` | `^19.2.4` | Biblioteca principal de UI |
| `react-dom` | `^19.2.4` | Renderização React no DOM |
| `react-router-dom` | `^7.13.2` | Roteamento client-side (SPA) |
| `tailwindcss` | `^4.2.2` | Framework de CSS utilitário |
| `@tailwindcss/vite` | `^4.2.2` | Plugin Tailwind para Vite |
| `@fontsource/inter` | `^5.2.8` | Fonte Inter auto-hospedada |
| `lucide-react` | `^1.5.0` | Biblioteca de ícones SVG |
| `react-loading-skeleton` | `^3.5.0` | Skeletons de carregamento |

### 🛠️ Dependências de Desenvolvimento

| Pacote | Versão | Finalidade |
|---|---|---|
| `vite` | `^8.0.1` | Build tool e dev server |
| `typescript` | `~5.9.3` | Tipagem estática |
| `@vitejs/plugin-react` | `^6.0.1` | Suporte a React no Vite (Fast Refresh) |
| `eslint` | `^9.39.4` | Linter de código |
| `prettier` | `^3.8.1` | Formatação de código |
| `eslint-plugin-simple-import-sort` | `^12.1.1` | Ordenação automática de imports |
| `eslint-plugin-unused-imports` | `^4.4.1` | Identificação de imports não utilizados |
| `prettier-plugin-tailwindcss` | `^0.7.2` | Ordenação automática de classes Tailwind |
