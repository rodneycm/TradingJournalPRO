# Trading Journal Pro
# MODULES

Versão 1.0

---

# Objetivo

Este documento define a responsabilidade de cada módulo do sistema.

Nenhum módulo poderá executar tarefas pertencentes a outro módulo.

Sempre consultar este documento antes de criar novas funções.

---

# Estrutura Geral

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

---

# STATE

Responsabilidade

Guardar todos os dados da aplicação.

Nunca realiza cálculos.

Nunca altera HTML.

Nunca acessa LocalStorage.

### Dados

trades

selectedDate

currentMonth

currentYear

performanceView

futureFilters

---

# STORAGE

Responsabilidade

Salvar e carregar dados.

### Métodos

load()

save()

clear()

backup()

restore()

Nunca altera HTML.

Nunca calcula indicadores.

---

# UTILS

Responsabilidade

Funções auxiliares.

### Métodos previstos

id()

currency()

date()

today()

clone()

sortTrades()

groupByDate()

sum()

average()

percentage()

formatNumber()

Nunca altera State.

Nunca desenha telas.

---

# TRADE

Responsabilidade

É o cérebro do sistema.

Todo cálculo ficará aqui.

### Cadastro

add()

remove()

edit()

duplicate()

### Consulta

getAll()

getById()

getByDate()

getByMonth()

getByYear()

### Resultados

getTodayResult()

getWeekResult()

getMonthResult()

getTotalResult()

### Estatísticas

getWinRate()

getPayoff()

getProfitFactor()

getDrawdown()

getAverageGain()

getAverageLoss()

getLargestGain()

getLargestLoss()

### Dias

getDayData()

getPositiveDays()

getNegativeDays()

getOffDays()

### Setup

getBestSetup()

getWorstSetup()

### Conta

getBestAccount()

getWorstAccount()

### Mercado

getBestMarket()

getWorstMarket()

### Ativo

getBestAsset()

getWorstAsset()

Nunca altera HTML.

---

# CLOCK

Responsabilidade

Atualizar data e hora.

### Métodos

start()

update()

---

# FORM

Responsabilidade

Receber dados do usuário.

### Métodos

events()

save()

clear()

fill()

validate()

Nunca calcula indicadores.

---

# CALENDAR

Responsabilidade

Mostrar calendário.

Selecionar dias.

### Métodos

render()

renderHeader()

renderDays()

nextMonth()

prevMonth()

selectDay()

clearSelection()

events()

Nunca calcula resultados.

---

# HISTORY

Responsabilidade

Mostrar tabela.

### Métodos

render()

renderRow()

edit()

remove()

filter()

sort()

---

# KPI

Responsabilidade

Mostrar indicadores.

### KPIs

PNL Hoje

PNL Semana

PNL Mês

PNL Total

Win Rate

Payoff

Profit Factor

Drawdown

### Métodos

render()

update()

clear()

---

# SUMMARY

Responsabilidade

Mostrar resumo mensal.

### Indicadores

Dias positivos

Dias negativos

Dias OFF

Trades

Maior Gain

Maior Loss

### Métodos

render()

update()

---

# CHARTS

Responsabilidade

Desenhar gráficos.

### Gráficos

Curva de Capital

Performance

### Métodos

render()

updateCapital()

updatePerformance()

destroy()

---

# COACH

Responsabilidade

Gerar recomendações.

Nunca gerar sinais.

### Informações

Melhor Setup

Pior Setup

Maior sequência de ganhos

Maior sequência de perdas

Melhor dia

Pior dia

Horário mais lucrativo

---

# PROPFIRM

Responsabilidade

Calcular métricas da mesa.

### Indicadores

Meta

Trailing Drawdown

Buffer

Dias Operados

Dias Restantes

Consistência

Status

---

# REFRESH

Responsabilidade

Atualizar toda a tela.

Fluxo oficial

refresh()

↓

calendar.render()

↓

history.render()

↓

kpi.render()

↓

summary.render()

↓

charts.render()

↓

coach.render()

↓

propFirm.render()

Nenhum módulo poderá atualizar outro módulo diretamente.

Sempre utilizar refresh().

---

# INIT

Responsabilidade

Inicializar a aplicação.

Fluxo

storage.load()

↓

clock.start()

↓

form.events()

↓

calendar.events()

↓

refresh()

---

# Regra Principal

Se surgir uma nova funcionalidade durante o desenvolvimento, a primeira pergunta será:

"Ela pertence a qual módulo?"

Somente depois disso o código poderá ser escrito.

Este documento define oficialmente a divisão de responsabilidades do Trading Journal Pro.