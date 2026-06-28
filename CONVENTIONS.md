# Trading Journal Pro
# CODE CONVENTIONS

---

# Organização

Todo código ficará dentro do objeto App.

Não existirão funções globais.

Não existirão variáveis globais.

---

# Ordem dos módulos

state

storage

utils

trade

clock

form

calendar

history

kpi

summary

charts

coach

propFirm

init

refresh

---

# Nome dos métodos

Sempre utilizar camelCase.

Exemplos:

addTrade()

removeTrade()

getTodayResult()

renderCalendar()

calculateWinRate()

Nunca utilizar espaços.

Nunca utilizar hífen.

---

# Nome das variáveis

Sempre utilizar camelCase.

Correto:

currentMonth

selectedDate

tradeResult

Errado:

CurrentMonth

trade_result

trade-result

---

# Responsabilidade

Cada função possui apenas uma responsabilidade.

Uma função não deve calcular e desenhar ao mesmo tempo.

---

# Renderização

Todo módulo visual deverá possuir um método:

render()

Toda atualização da tela ocorrerá através do método refresh().

---

# Cálculos

Todos os cálculos ficarão no módulo Trade.

Nenhum outro módulo poderá calcular indicadores.

---

# LocalStorage

Somente o módulo Storage poderá acessar o LocalStorage.

---

# HTML

Evitar alterações estruturais.

Sempre reutilizar elementos existentes.

---

# CSS

Evitar alterações grandes.

Somente adicionar novas classes quando realmente necessário.

---

# Comentários

Todos os módulos iniciarão com:

/* ======================================================
   NOME DO MÓDULO
====================================================== */

---

# Objetivo

O código deve ser:

Simples

Legível

Modular

Reutilizável

Organizado

Sem duplicação.