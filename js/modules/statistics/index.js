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

            profit: {

                total: Profit.getTotal(),

                today: Profit.getToday(),

                week: Profit.getWeek(),

                month: Profit.getMonth(),

                year: Profit.getYear(),

                averageTrade: Profit.getAverageTrade(),

                ...Profit.getMetrics()

            },

            performance: Performance.getMetrics(),

            drawdown: Drawdown.getMetrics(),

            health: Health.getMetrics()

        };

    },

    /* ======================================================
       ATUALIZA ESTATÍSTICAS
    ====================================================== */

    refresh() {

        return this.getDashboard();

    }

};