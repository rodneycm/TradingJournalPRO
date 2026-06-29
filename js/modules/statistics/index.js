/* ==========================================================
   TRADING JOURNAL PRO
   STATISTICS
   INDEX.JS
========================================================== */

import { Profit } from "./profit.js";
import { Performance } from "./performance.js";
import { Drawdown } from "./drawdown.js";
import { Health } from "./health.js";

/* ==========================================================
   STATISTICS
========================================================== */

export const Statistics = {

    /* ======================================================
       DASHBOARD COMPLETO
    ====================================================== */

    getDashboard() {

        return {

            ...Profit.getMetrics(),

            ...Performance.getMetrics(),

            ...Drawdown.getMetrics(),

            ...Health.getMetrics()

        };

    },

    /* ======================================================
       ATUALIZA ESTATÍSTICAS
    ====================================================== */

    refresh() {

        return this.getDashboard();

    }

};