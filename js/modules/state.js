/* ==========================================================
   TRADING JOURNAL PRO
   STATE.JS
========================================================== */

/*
    Responsabilidade:
    - Armazenar todo o estado da aplicação.
    - Não renderiza HTML.
    - Não salva dados.
    - Não faz cálculos.

    Compatibilidade:
    - API moderna (getters/setters)
    - API legada (State.trades, State.currentMonth...)
*/

export const State = {

    /* ======================================================
       ESTADO
    ====================================================== */

    data: {

        /* ==========================================
           TRADES
        ========================================== */

        trades: [],

        /* ==========================================
           CALENDÁRIO
        ========================================== */

        selectedDate: null,

        currentMonth: new Date().getMonth(),

        currentYear: new Date().getFullYear(),

        /* ==========================================
           GRÁFICOS
        ========================================== */

        performanceView: "capital",

        /* ==========================================
           HISTÓRICO
        ========================================== */

        historyFilter: null,

        /* ==========================================
           FORMULÁRIO
        ========================================== */

        editingTradeId: null,

        /* ==========================================
           PROP FIRM
        ========================================== */

        propFirm: {

            enabled: false,

            account: "",

            target: 0,

            trailingDrawdown: 0,

            currentBalance: 0,

            daysTraded: 0

        }

    },

    /* ======================================================
       GETTERS (API NOVA)
    ====================================================== */

    get() {

        return this.data;

    },

    getTrades() {

        return this.data.trades;

    },

    getSelectedDate() {

        return this.data.selectedDate;

    },

    getCurrentMonth() {

        return this.data.currentMonth;

    },

    getCurrentYear() {

        return this.data.currentYear;

    },

    getPerformanceView() {

        return this.data.performanceView;

    },

    /* ======================================================
       SETTERS (API NOVA)
    ====================================================== */

    setTrades(trades) {

        this.data.trades = trades;

    },

    setSelectedDate(date) {

        this.data.selectedDate = date;

    },

    setCurrentMonth(month) {

        this.data.currentMonth = month;

    },

    setCurrentYear(year) {

        this.data.currentYear = year;

    },

    setPerformanceView(view) {

        this.data.performanceView = view;

    },

    setEditingTrade(id) {

        this.data.editingTradeId = id;

    },

    clearEditingTrade() {

        this.data.editingTradeId = null;

    }

};

/* ==========================================================
   CAMADA DE COMPATIBILIDADE
========================================================== */

/*
    Permite utilizar:

    State.trades
    State.currentMonth
    State.currentYear
    State.selectedDate
    State.performanceView
    State.historyFilter
    State.editingTradeId
    State.propFirm

    sem quebrar a API moderna.
*/

[
    "trades",
    "selectedDate",
    "currentMonth",
    "currentYear",
    "performanceView",
    "historyFilter",
    "editingTradeId",
    "propFirm"
].forEach(property => {

    Object.defineProperty(State, property, {

        get() {

            return State.data[property];

        },

        set(value) {

            State.data[property] = value;

        },

        enumerable: true,

        configurable: false

    });

});