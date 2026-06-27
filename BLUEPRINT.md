TRADING JOURNAL PRO
Blueprint v2.0

Autor: Miriam Rodrigues + ChatGPT

Objetivo: Construir um Dashboard de Performance Profissional para Traders de Mercado Futuro Americano e Prop Firms.

1. MISSÃO

Criar um Dashboard único, rápido e extremamente organizado que concentre todas as informações importantes sobre a performance do trader em uma única tela.

O sistema não executa operações.

O sistema não gera sinais.

O sistema não analisa mercado.

O sistema apenas organiza e apresenta informações para análise da performance operacional.

2. FILOSOFIA

O projeto deve seguir cinco princípios.

Simples

Abrir.

Lançar.

Consultar.

Nada além disso.

Rápido

Cadastrar um trade deve levar menos de 20 segundos.

Consultar qualquer informação deve levar menos de 5 segundos.

Visual

Quase todas as informações importantes devem aparecer em gráficos, indicadores ou cores.

Pouco texto.

Muita leitura visual.

Objetivo

Cada informação exibida deve responder uma pergunta.

Exemplos:

Quanto ganhei hoje?

Qual meu melhor setup?

Qual conta performou melhor?

Quanto falta para atingir a meta?

Como está minha curva?

Tudo em uma página

Nunca haverá:

segunda página
menu lateral
telas escondidas
abas complexas

Todo o sistema ficará em uma única tela com rolagem vertical.

3. TECNOLOGIAS

Apenas:

HTML

CSS

JavaScript

Chart.js

LocalStorage

Nada mais.

Sem backend.

Sem banco SQL.

Sem React.

Sem Vue.

Sem Bootstrap.

Sem Tailwind.

4. ESTRUTURA DO PROJETO
TradingJournal/

index.html

style.css

script.js

blueprint.md

Apenas quatro arquivos.

5. LAYOUT

A página será composta nesta ordem.

HEADER

↓

KPIs

↓

Resumo Mensal

↓

Calendário

↓

Curva de Capital

↓

Performance

↓

Cadastro Trade

↓

Coach

↓

Histórico

↓

Prop Firm

Sempre nessa sequência.

6. HEADER

Deve conter:

Nome do sistema

Data

Hora

Botão Exportar Backup

Botão Importar Backup

Nada mais.

7. KPIs

Sempre visíveis.

Serão:

Health Score

FTAR

PNL Hoje

PNL Semana

PNL Mês

PNL Total

Win Rate

Payoff

Profit Factor

Drawdown

Meta

Status Prop Firm

Esses KPIs nunca terão edição manual.

Serão sempre calculados.

8. RESUMO MENSAL

Mostrar:

Dias positivos

Dias negativos

Dias OFF

Resultado acumulado

Maior Gain

Maior Loss

Quantidade de Trades

9. CALENDÁRIO

Este será o coração do sistema.

Cada dia mostrará:

15

+$420

3 Trades

ou

15

-$180

2 Trades

ou

15

OFF

Cores:

🟢 lucro

🔴 prejuízo

⚪ OFF

Ao clicar em um dia:

Seleciona aquele dia.

Atualiza o dashboard.

Abre o formulário já preenchido.

10. CURVA DE CAPITAL

Sempre mostrará a evolução financeira.

Filtros:

Diário

Semanal

Mensal

Anual

11. PERFORMANCE

Um único gráfico.

Com seletor.

Exemplo:

Capital

Win Rate

Health

Payoff

Profit Factor

Drawdown

Setup

Conta

O gráfico muda conforme a seleção.

12. CADASTRO DE TRADE

Campos mínimos:

Data

Conta

Mercado

Ativo

Setup

Compra/Venda

Contratos

Resultado $

Resultado Pontos

Resultado R

Observação

Botão Salvar

Nada além disso.

13. HISTÓRICO

Tabela.

Colunas:

Data

Conta

Mercado

Setup

Resultado

Editar

Excluir

Filtros:

Data

Conta

Mercado

Setup

14. COACH

Nunca dará sinais.

Apenas mostrará estatísticas.

Exemplo:

Maior lucro ocorreu no setup ORB.

Seu Win Rate aumentou.

Seu melhor dia continua sendo terça-feira.

Seu maior drawdown foi em junho.

15. PROP FIRM

Mostrar apenas informações importantes.

Exemplo:

Meta

Trailing Drawdown

Dias Operados

Dias Restantes

Consistência

Status

16. LOCAL STORAGE

Todos os dados ficarão apenas no navegador.

Não haverá login.

17. BACKUP

Botão:

Exportar JSON

Importar JSON

Assim você nunca perde seus dados.

18. DESIGN

Tema escuro.

Visual inspirado em Bloomberg Terminal, TradingView e painéis profissionais.

Muito espaço.

Poucas cores.

Verde somente para lucro.

Vermelho somente para prejuízo.

Azul para ações.

Cinza para informações neutras.

19. REGRAS DE DESENVOLVIMENTO

Nunca escrever código duplicado.

Cada função deve ter apenas uma responsabilidade.

Nome das funções em português.

Comentários apenas quando realmente necessários.

Código simples.

Código legível.

20. ROADMAP
Sprint 1 (MVP)
Estrutura HTML
Layout CSS
Calendário
Cadastro
LocalStorage
Histórico
KPIs básicos

Objetivo: sistema utilizável.

Sprint 2
Gráficos
Resumo Mensal
Filtros
Estatísticas

Objetivo: análise completa.

Sprint 3
Health Score
FTAR
Coach
Prop Firm
Backup JSON

Objetivo: versão 1.0.

21. O QUE NÃO FAREMOS

Para manter o projeto simples e concluí-lo rapidamente, ficam fora da versão 1.0:

❌ Login de usuários
❌ Banco de dados
❌ Backend
❌ API de corretoras
❌ Atualização em tempo real
❌ Integração com plataformas de trading
❌ Inteligência artificial
❌ Sistema multiusuário
❌ Várias páginas
❌ Frameworks JavaScript

Esses itens só serão considerados em versões futuras, se realmente fizerem sentido.