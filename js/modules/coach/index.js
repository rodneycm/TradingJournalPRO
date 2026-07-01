/* ==========================================================
   TRADING JOURNAL PRO
   COACH
   INDEX.JS
========================================================== */

import { generateAlerts } from "./alerts.js";
import { generateInsights } from "./insights.js";
import { calculateScore } from "./score.js";

import { State } from "../state.js";

/* ==========================================================
   COACH
========================================================== */

export const Coach = {

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        this.refresh();

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        return this.getDashboard(

            State.getTrades()

        );

    },

    /* ======================================================
       DASHBOARD
    ====================================================== */

    getDashboard(trades = []) {

        return {

            score: calculateScore(trades),

            alerts: generateAlerts(trades),

            insights: generateInsights(trades)

        };

    },

    /* ======================================================
       SCORE
    ====================================================== */

    getScore(trades = []) {

        return calculateScore(trades);

    },

    /* ======================================================
       ALERTAS
    ====================================================== */

    getAlerts(trades = []) {

        return generateAlerts(trades);

    },

    /* ======================================================
       INSIGHTS
    ====================================================== */

    getInsights(trades = []) {

        return generateInsights(trades);

    }

};