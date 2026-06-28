# Trading Journal Pro

# MASTER ARCHITECTURE

Versão 1.0

---

# 1. Objetivo

Construir um Dashboard Profissional para acompanhamento de performance em Day Trade utilizando apenas:

* HTML
* CSS
* JavaScript
* LocalStorage
* Chart.js

Sem backend.

Sem banco de dados.

Sem frameworks.

Todo o sistema funcionará em apenas uma página.

---

# 2. Filosofia

Todo módulo deverá possuir apenas uma responsabilidade.

Nenhum módulo poderá realizar tarefas de outro módulo.

Todo cálculo será centralizado.

Toda renderização será independente.

Toda atualização ocorrerá automaticamente.

---

# 3. Arquitetura Geral

```
Usuário

↓

Form

↓

Trade

↓

Storage

↓

Refresh

↓

Dashboard
```

O usuário nunca altera diretamente o Dashboard.

O Dashboard apenas exibe informações.

---

# 4. Camadas do Sistema

## Fundação

Responsável pelos dados.

```
State
Storage
Utils
```

---

## Motor

Responsável pelas regras de negócio.

```
Trade
```

Nenhum cálculo ficará fora deste módulo.

---

## Dashboard

Responsável apenas pela visualização.

```
Calendar

History

KPI

Summary

Charts
```

Esses módulos nunca calcularão informações.

Sempre perguntarão ao módulo Trade.

---

## Inteligência

Responsável pelas análises.

```
Coach

PropFirm
```

Também não calcularão diretamente.

Consumirão informações produzidas pelo módulo Trade.

---

## Interface

Responsável apenas pela interação com o usuário.

```
Clock

Form

Refresh
```

---

# 5. Estrutura do App

```
App

├── state
├── storage
├── utils

├── trade

├── clock
├── form

├── calendar
├── history

├── kpi
├── summary
├── charts

├── coach
├── propFirm

├── refresh()
└── init()
```

Essa estrutura nunca deverá ser alterada.

---

# 6. Fluxo Oficial

Salvar Trade

↓

Trade.add()

↓

Storage.save()

↓

Refresh()

↓

Calendar.render()

↓

History.render()

↓

KPI.render()

↓

Summary.render()

↓

Charts.render()

↓

Coach.render()

↓

PropFirm.render()

Esse será o único fluxo permitido.

---

# 7. Responsabilidades

## State

Guardar todos os dados temporários.

Jamais realizar cálculos.

---

## Storage

Conversar apenas com o LocalStorage.

Jamais desenhar telas.

---

## Utils

Conter apenas funções auxiliares.

Não possuir estado.

---

## Trade

Ser o cérebro do sistema.

Responder perguntas.

Jamais alterar HTML.

---

## Calendar

Mostrar o mês.

Selecionar dias.

Exibir lucro, prejuízo e OFF.

Jamais calcular resultados.

---

## History

Mostrar operações.

Editar.

Excluir.

Filtrar.

Jamais calcular indicadores.

---

## KPI

Mostrar:

PNL Hoje

PNL Semana

PNL Mês

PNL Total

Win Rate

Payoff

Profit Factor

Drawdown

---

## Summary

Mostrar:

Dias positivos

Dias negativos

Dias OFF

Trades

Maior Gain

Maior Loss

---

## Charts

Desenhar:

Curva de Capital

Performance

Jamais calcular dados.

---

## Coach

Mostrar apenas recomendações.

Nunca gerar sinais.

---

## PropFirm

Calcular:

Meta

Trailing

Buffer

Dias

Status

---

# 8. Comunicação

Os módulos nunca conversarão entre si.

Sempre utilizarão:

Trade

ou

State

Como fonte de informação.

---

# 9. Convenções

Todo módulo inicia com:

```
/* ======================================================
   NOME
====================================================== */
```

Nenhuma variável global.

Nenhuma função global.

Todo código ficará dentro do objeto App.

---

# 10. Ordem Oficial de Construção

1. State

2. Storage

3. Utils

4. Trade

5. Clock

6. Form

7. Refresh

8. History

9. Calendar

10. KPI

11. Summary

12. Charts

13. Coach

14. PropFirm

Nenhum módulo será iniciado antes do anterior estar concluído.

---

# 11. Objetivo Final

Ao término do projeto, o usuário deverá conseguir:

* cadastrar trades em segundos;

* visualizar toda a performance em uma única tela;

* identificar padrões por setup, ativo e conta;

* acompanhar evolução financeira;

* monitorar métricas de Prop Firm;

* utilizar o sistema totalmente offline.

Este documento é considerado a planta estrutural oficial do Trading Journal Pro.
