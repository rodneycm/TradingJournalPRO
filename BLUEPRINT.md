# TRADING JOURNAL PRO

## Project Blueprint v1.0

---

# 1. Visão do Projeto

O **Trading Journal Pro** é um Dashboard de Performance para Traders.

Seu objetivo não é gerar sinais de entrada, indicar operações ou acompanhar o mercado em tempo real.

O objetivo do sistema é reunir, em uma única tela, todas as informações necessárias para que o trader analise sua evolução operacional, financeira e comportamental de forma rápida, organizada e intuitiva.

Todo o projeto será desenvolvido pensando em simplicidade, velocidade e facilidade de uso.

O sistema deverá abrir diretamente no navegador e apresentar todas as informações sem necessidade de navegar entre páginas.

---

# 2. Filosofia do Projeto

O sistema não é um site.

O sistema não é um CRUD.

O sistema não é um ERP.

O sistema é um **Terminal de Performance**.

Ao abrir a aplicação o usuário deve enxergar imediatamente toda sua situação operacional.

Cada informação exibida deve responder uma pergunta importante sobre sua performance.

O foco nunca será apenas lucro.

O foco será compreender como esse lucro foi construído.

---

# 3. Objetivo Principal

Criar um Dashboard único capaz de concentrar todas as informações importantes do trader em uma única página.

Ao abrir o sistema o usuário deverá visualizar:

* Resultado financeiro.
* Performance.
* Evolução.
* Consistência.
* Drawdown.
* Histórico.
* Curva de Capital.
* Calendário mensal.
* Indicadores comportamentais.
* Estatísticas dos setups.

Sem trocar de página.

---

# 4. Estrutura do Projeto

O projeto permanecerá extremamente simples.

```text
TradingJournal/

index.html

style.css

script.js
```

Nenhum framework será utilizado.

Não haverá React.

Não haverá Angular.

Não haverá Vue.

Não haverá backend.

Não haverá banco de dados.

Todos os dados serão armazenados utilizando LocalStorage.

---

# 5. Tecnologias

HTML5

CSS3

JavaScript Vanilla

Chart.js (via CDN)

LocalStorage

Nada além disso.

---

# 6. Layout

Todo o sistema funcionará em uma única página.

A estrutura será composta pelos seguintes blocos:

1. Cabeçalho
2. Cards principais
3. Calendário mensal
4. Gráfico Curva de Capital
5. Gráfico de Performance
6. Formulário Novo Trade
7. Histórico
8. Coach
9. Rodapé

Todos os blocos permanecerão visíveis na mesma página.

---

# 7. Cabeçalho

O cabeçalho conterá:

Logo

Nome do sistema

Data

Hora

---

# 8. Cards Principais

Serão exibidos sempre no topo.

Indicadores:

Health Score

FTAR Score

PNL Hoje

PNL Semana

PNL Mês

PNL Total

Win Rate

Payoff

Profit Factor

Drawdown Diário

Drawdown Máximo

Meta

Status da Prop Firm

Melhor Trade

Pior Trade

Quantidade de Trades

Todos os indicadores deverão atualizar automaticamente.

---

# 9. Calendário Mensal

Este será um dos principais componentes do Dashboard.

Cada dia do mês será exibido em formato de calendário.

Exemplo:

01

+$250

02

-$120

03

+$90

04

OFF

Cada célula do calendário mostrará o resultado financeiro daquele dia.

Cores:

Verde

Dia positivo.

Vermelho

Dia negativo.

Cinza

Sem operações.

Ao clicar em um dia o sistema deverá:

Filtrar os trades.

Atualizar os gráficos.

Atualizar os indicadores.

Mostrar apenas os dados daquela sessão.

---

# 10. Curva de Capital

Gráfico principal.

Representará toda evolução financeira.

Possuirá filtros:

Diário

Semanal

Mensal

O usuário poderá alternar entre os períodos sem sair da página.

---

# 11. Gráfico de Performance

Além da curva financeira existirá um segundo gráfico.

Esse gráfico poderá mostrar:

Health Score

Win Rate

Drawdown

Performance por Setup

Performance por Conta

Performance por Ativo

Performance por Período

A escolha será feita através de um seletor.

---

# 12. Cadastro de Trade

O cadastro deverá ser extremamente rápido.

Campos:

Data

Conta

Ativo

Setup

Compra/Venda

Resultado $

Resultado Pontos

R:R

Observação

Botão Salvar

Após salvar:

Todo Dashboard será atualizado automaticamente.

---

# 13. Histórico

Tabela contendo todas as operações.

Colunas:

Data

Conta

Ativo

Setup

Resultado

R:R

Editar

Excluir

Filtros por:

Data

Conta

Setup

Ativo

---

# 14. Health Score

Representará a qualidade operacional do trader.

Será calculado automaticamente.

Escala:

0 até 100

Verde

Amarelo

Vermelho

Seu objetivo é mostrar a evolução comportamental ao longo do tempo.

---

# 15. FTAR Score

Cada operação poderá receber uma pontuação baseada no plano operacional.

Essa pontuação permitirá gerar estatísticas sobre:

Qual setup gera maior lucro.

Qual setup possui maior consistência.

Qual setup apresenta melhor expectativa.

---

# 16. Coach

Área responsável por apresentar mensagens automáticas.

Exemplos:

Maior lucro foi utilizando o setup PERM.

Seu Win Rate aumentou esta semana.

Seu Drawdown diminuiu.

Seu melhor dia foi terça-feira.

Seu melhor horário continua entre 9h30 e 11h.

O Coach apenas apresenta informações.

Ele não gera sinais de entrada.

---

# 17. Atualização Automática

Sempre que um trade for salvo o sistema atualizará automaticamente:

KPIs

Calendário

Gráficos

Histórico

Health Score

FTAR

Coach

Sem necessidade de recarregar a página.

---

# 18. Design

Tema escuro.

Visual moderno.

Inspirado em terminais profissionais.

Muito espaço entre elementos.

Cartões organizados.

Interface limpa.

Todas as informações visíveis sem necessidade de navegar entre páginas.

---

# 19. Objetivo Final

Ao abrir o Trading Journal Pro, o usuário deve encontrar um painel completo contendo toda sua performance em uma única tela.

O sistema deverá permitir compreender rapidamente:

Como está sua evolução financeira.

Como está sua consistência.

Qual setup apresenta melhor desempenho.

Qual conta está performando melhor.

Como está sua curva de capital.

Qual foi o resultado diário.

Qual foi o resultado semanal.

Qual foi o resultado mensal.

Como está seu Health Score.

Como está seu FTAR.

Tudo isso sem trocar de página.

---

# 20. Roadmap de Desenvolvimento

## Fase 1 — Estrutura

* Layout completo
* Tema escuro
* Cards
* Calendário mensal
* Gráficos
* Formulário
* Histórico

## Fase 2 — Funcionalidade

* LocalStorage
* Cadastro de trades
* Atualização automática
* KPIs
* Filtros
* Calendário dinâmico

## Fase 3 — Inteligência

* Health Score
* FTAR Score
* Coach
* Estatísticas
* Comparativos
* Relatórios

---

# 21. Princípios do Projeto

Toda nova funcionalidade deverá respeitar estes princípios:

* Apenas uma página.
* Interface limpa e organizada.
* Informações objetivas.
* Sem excesso de cliques.
* Cadastro rápido.
* Visual profissional.
* Dados atualizados automaticamente.
* Performance acima de complexidade.
* Código simples, legível e fácil de manter.

Qualquer nova funcionalidade deverá fortalecer esses princípios, nunca afastar o projeto de sua proposta original.
