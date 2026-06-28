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
*/

export const State = {

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
       GETTERS
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
       SETTERS
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