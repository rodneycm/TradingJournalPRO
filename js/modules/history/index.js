/* ==========================================================
   TRADING JOURNAL PRO
   HISTORY
   INDEX.JS
========================================================== */

import { State } from "../state.js";

import * as HistoryRender from "./render.js";
import * as HistoryFilters from "./filters.js";
import * as HistoryActions from "./actions.js";

/* ==========================================================
   HISTORY
========================================================== */

export const History = {

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        this.render();

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        const trades = State.getTrades();

        if (typeof HistoryRender.render === "function") {

            HistoryRender.render(trades);

            return;

        }

        if (typeof HistoryRender.renderHistory === "function") {

            HistoryRender.renderHistory(trades);

            return;

        }

        console.warn("History: nenhuma função de render encontrada.");

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    },

    /* ======================================================
       FILTERS
    ====================================================== */

    filters: HistoryFilters,

    /* ======================================================
       ACTIONS
    ====================================================== */

    actions: HistoryActions

};