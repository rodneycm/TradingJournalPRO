# PROJECT_GUIDE.md

# Trading Journal Pro – Guia Oficial de Continuidade

## Objetivo

Este documento define a arquitetura oficial, as regras de desenvolvimento e o fluxo de trabalho do projeto Trading Journal Pro.

Todo desenvolvimento futuro deve seguir este documento.

Nenhuma IA ou desenvolvedor deve alterar a arquitetura antes de concluir a versão 1.0.

---

# Filosofia do projeto

O Trading Journal Pro é um sistema web de página única (SPA) desenvolvido em HTML, CSS e JavaScript puro (Vanilla JS).

Não serão utilizados frameworks.

O projeto deve ser simples, rápido, modular e extremamente legível.

O objetivo é construir uma ferramenta profissional para análise operacional de trades.

O sistema não executa operações.

O sistema apenas registra, organiza, calcula estatísticas e apresenta informações.

---

# Objetivo da versão 1.0

A versão 1.0 deve conter apenas:

* Cadastro de trades
* Histórico
* Calendário
* KPIs
* Resumo mensal
* Curva de capital
* Performance
* Coach estatístico
* Controle de Prop Firm
* Backup JSON

Nada além disso.

Qualquer funcionalidade extra deve ser considerada apenas após a versão 1.0.

---

# Arquitetura

A arquitetura é modular.

Cada pasta representa um domínio do sistema.

Cada arquivo possui uma única responsabilidade.

Nenhum módulo deve assumir responsabilidades de outro.

---

# Estrutura oficial

(usar exatamente a estrutura de pastas definida no projeto)

---

# Regras obrigatórias

## Uma responsabilidade por arquivo

Cada arquivo resolve apenas um problema.

Exemplos:

crud.js apenas cadastro.

filters.js apenas consultas.

render.js apenas renderização.

validation.js apenas validações.

---

## Não duplicar código

Qualquer cálculo utilizado por dois módulos deve existir apenas uma vez.

Exemplo:

Win Rate

Payoff

Profit Factor

Drawdown

Health Score

Todos pertencem ao módulo Statistics.

Nenhum outro módulo pode recalcular essas métricas.

---

## Comunicação

A comunicação entre módulos deve ocorrer através do módulo Events.

Evitar chamadas diretas entre módulos sempre que possível.

---

## Estado

O estado global da aplicação deve existir em apenas um lugar.

Nenhum módulo pode manter cópias independentes dos dados.

---

## LocalStorage

Apenas o módulo Storage manipula o LocalStorage.

Nenhum outro módulo deve acessar localStorage diretamente.

---

## App

app.js é apenas o orquestrador.

Ele inicializa os módulos.

Ele não contém regras de negócio.

---

# Fluxo de dados

Form

↓

Trade

↓

Storage

↓

Statistics

↓

Events

↓

Interface

↓

Calendar

History

KPI

Summary

Charts

Coach

PropFirm

---

# Ordem oficial de desenvolvimento

1. Estado

2. Storage

3. Events

4. Utils

5. Statistics

6. Trade

7. Form

8. Calendar

9. History

10. KPI

11. Summary

12. Charts

13. Coach

14. PropFirm

15. App

Nenhum módulo deve ser implementado fora dessa ordem.

---

# Como trabalhar

Sempre gerar arquivos completos.

Nunca gerar apenas trechos.

Nunca pedir para localizar linhas.

Nunca pedir para editar pequenos pedaços.

Sempre informar:

Arquivo

Ação

Conteúdo completo

---

# Tamanho dos arquivos

Preferencialmente entre 80 e 200 linhas.

Caso um módulo cresça além disso, criar novos arquivos.

---

# Convenções

Código em JavaScript moderno (ES Modules).

Funções pequenas.

Comentários apenas quando necessários.

Nomes claros.

Sem abreviações desnecessárias.

---

# CSS

Cada arquivo CSS possui apenas um domínio.

base.css

layout.css

calendar.css

cards.css

charts.css

form.css

table.css

responsive.css

---

# HTML

O index.html deve conter apenas a estrutura da interface.

Nenhuma regra de negócio deve existir no HTML.

---

# JavaScript

Cada módulo deve ser independente.

Sempre importar apenas o necessário.

Evitar dependências circulares.

---

# Objetivo final

Ao concluir a versão 1.0, o projeto deverá possuir:

Cadastro rápido de trades.

Calendário inteligente.

Histórico completo.

KPIs profissionais.

Resumo mensal.

Curva de capital.

Análise estatística.

Coach baseado em dados.

Controle de Prop Firm.

Backup JSON.

Todo o sistema funcionando em uma única página.

Sem backend.

Sem frameworks.

Sem duplicação de código.

Arquitetura simples, legível e modular.
