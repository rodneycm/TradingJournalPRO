/* ==========================================================
   TRADING JOURNAL PRO
   SUMMARY
   INDEX.JS
========================================================== */

import { Statistics } from "../statistics/index.js";

import { MonthlySummary } from "./monthly.js";
import { YearlySummary } from "./yearly.js";

/* ==========================================================
   SUMMARY
========================================================== */

export const Summary = {

    /* ======================================================
       INICIALIZAÇÃO
    ====================================================== */

    init() {

        this.render();

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        const dashboard = Statistics.getDashboard();

        MonthlySummary.render(dashboard);

        YearlySummary.render(dashboard);

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    },

    /* ======================================================
       DADOS
    ====================================================== */

    getDashboard() {

        return Statistics.getDashboard();

    }

};