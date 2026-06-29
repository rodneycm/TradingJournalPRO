/* ==========================================================
   TRADING JOURNAL PRO
   CHARTS
   INDEX.JS
========================================================== */

import { Statistics } from "../statistics/index.js";

import { CapitalChart } from "./capital.js";
import { PerformanceChart } from "./performance.js";

/* ==========================================================
   CHARTS
========================================================== */

export const Charts = {

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

        CapitalChart.render(dashboard);

        PerformanceChart.render(dashboard);

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    }

};