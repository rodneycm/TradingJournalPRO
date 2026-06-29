/* ==========================================================
   TRADING JOURNAL PRO
   HISTORY
   INDEX.JS
========================================================== */

import { Trade } from "../trade/index.js";

import { HistoryFilters } from "./filters.js";
import { HistoryActions } from "./actions.js";
import { HistoryRender } from "./render.js";

/* ==========================================================
   HISTORY
========================================================== */

export const History = {

    /* ======================================================
       INICIALIZAÇÃO
    ====================================================== */

    init() {

        HistoryActions.init();

        this.render();

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        const trades = Trade.getAll();

        const filteredTrades = HistoryFilters.apply(trades);

        HistoryRender.render(filteredTrades);

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    },

    /* ======================================================
       FILTROS
    ====================================================== */

    clearFilters() {

        HistoryFilters.clear();

        this.render();

    },

    applyFilters(filters) {

        HistoryFilters.set(filters);

        this.render();

    }

};