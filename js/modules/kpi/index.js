/* ==========================================================
   TRADING JOURNAL PRO
   KPI
   INDEX.JS
========================================================== */

import { Statistics } from "../statistics/index.js";

import { KPICards } from "./cards.js";
import { KPIRender } from "./render.js";

/* ==========================================================
   KPI
========================================================== */

export const KPI = {

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

        KPICards.update(dashboard);

        KPIRender.render(dashboard);

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    }

};