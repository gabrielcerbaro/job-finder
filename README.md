# 💼 Job Finder

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Express-Framework-black?logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Sequelize-ORM-blue?logo=sequelize&logoColor=white">
  <img src="https://img.shields.io/badge/SQLite-Banco%20de%20Dados-lightgrey?logo=sqlite">
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-orange">
</p>

---

## 👤 Sobre o Projeto

Este projeto consiste no desenvolvimento de um **site de vagas de emprego (Job Finder)**, criado para praticar o desenvolvimento de uma aplicação full stack com Node.js, integrando backend, banco de dados e views renderizadas no servidor.

Atualmente, o sistema está com seu **fluxo principal funcionando**: é possível cadastrar vagas, listá-las na página inicial e buscá-las por título, com as vagas mais recentes sendo destacadas.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma aplicação capaz de **centralizar vagas de emprego**, permitindo que empresas divulguem oportunidades e que candidatos encontrem a vaga ideal através de uma busca simples.

Como evolução do projeto, está prevista a criação de uma **página de detalhes de cada vaga**, além de melhorias visuais e de usabilidade.

---

## 🛠️ Tecnologias

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Node.js-Runtime-green?logo=node.js">
  <img src="https://img.shields.io/badge/Express-Framework-black?logo=express">
  <img src="https://img.shields.io/badge/Handlebars-Template%20Engine-orange?logo=handlebarsdotjs">
  <img src="https://img.shields.io/badge/Sequelize-ORM-blue?logo=sequelize">
  <img src="https://img.shields.io/badge/SQLite-Banco%20de%20Dados-lightgrey?logo=sqlite">
  <img src="https://img.shields.io/badge/Bootstrap-5-purple?logo=bootstrap">
</p>

### Atualmente

* Node.js
* Express
* Express-Handlebars (views server-side)
* Sequelize
* SQLite
* Bootstrap 5
* HTML5 / CSS3

### Planejado

* Página de detalhes da vaga
* Validações mais robustas no formulário
* Paginação da listagem de vagas
* Deploy em produção

---

## 🚀 Funcionalidades Implementadas

### 📋 Listagem de Vagas

A página inicial busca as vagas cadastradas no banco de dados e as exibe em cards, com empresa, título, salário e um ícone de identificação.

---

### 🔎 Busca de Vagas

É possível pesquisar vagas pelo título diretamente na página inicial, através de uma busca por texto parcial (`LIKE`).

---

### 📝 Cadastro de Vagas

A aplicação possui um formulário para divulgar uma nova vaga, com os campos:

* Título da vaga
* Descrição
* Empresa
* Email
* Salário

Ao ser cadastrada, a vaga é salva no banco de dados e passa a aparecer na listagem.

---

### 🏷️ Destaque de Vagas Novas

Vagas recém-cadastradas recebem automaticamente a tag **"Nova Vaga"**, destacando-as visualmente das demais na listagem.

---

## 🧠 Estrutura do Projeto

O projeto é dividido em três camadas principais: backend (API e regras de negócio), frontend (arquivos estáticos) e views (templates renderizados pelo servidor).

```text
📦 Job Finder
│
├── backend/
│   ├── app.js               → configuração do Express, rotas e conexão com o banco
│   ├── db/
│   │   └── connections.js   → conexão do Sequelize com o SQLite
│   ├── models/
│   │   └── Job.js           → model da vaga
│   └── routes/
│       └── jobs.js          → rotas de cadastro de vagas
│
├── frontend/
│   └── public/
│       ├── css/styles.css   → estilos da aplicação
│       └── img/             → imagens (banner e ícones)
│
└── views/
    ├── layouts/
    │   └── main.hbs         → layout base (header, nav, scripts)
    ├── index.hbs            → página inicial (listagem + busca)
    └── add.hbs              → formulário de cadastro de vaga
```

---

## 💻 Exemplo de Vaga

As vagas são estruturadas como registros do model `Job`, no Sequelize:

```javascript
{
    title: "Dev Fullstack",
    description: "React e Node",
    salary: "10000",
    company: "Empresa Exemplo",
    email: "contato@empresa.com",
    new_job: true
}
```

---

## 🔮 Próximas Etapas

### Funcionalidades

* [x] Listagem de vagas vindas do banco
* [x] Busca por título
* [x] Cadastro de novas vagas
* [x] Destaque de vagas novas
* [ ] Página de detalhes da vaga
* [ ] Edição e remoção de vagas

### Estrutura e Qualidade

* [x] Organização em backend / frontend / views
* [x] Correção de rotas, caminhos e nomes de campos inconsistentes
* [ ] Validações de formulário no backend
* [ ] Testes automatizados

### Deploy

* [ ] Configurar variáveis de ambiente
* [ ] Publicar em produção

---

## 📚 Objetivo de Aprendizado

Este projeto está sendo desenvolvido como parte do meu processo de evolução como **desenvolvedor em formação**.

Através dele, estou colocando em prática conceitos de **Node.js, Express, ORM (Sequelize) e renderização server-side com Handlebars**, além de aprender na prática a organizar e depurar uma aplicação full stack real.

---

## 👨‍💻 Desenvolvedor

**Gabriel Cerbaro**

📈 Desenvolvedor em formação | ADS | Full Stack em construção | JavaScript • Node.js | Técnico em Informática

<p>
  <a href="https://github.com/gabrielcerbaro">
    <img src="https://img.shields.io/badge/GitHub-Perfil-black?logo=github">
  </a>
  <a href="https://www.linkedin.com/in/gabriel-cerbaro-4703b4239/">
    <img src="https://img.shields.io/badge/LinkedIn-Conectar-blue?logo=linkedin">
  </a>
</p>
