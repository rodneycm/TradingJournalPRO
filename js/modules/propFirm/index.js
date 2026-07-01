/* ==========================================================
   TRADING JOURNAL PRO
   PROPFIRM
   INDEX.JS
========================================================== */

import { PropFirmRules } from "./rules.js";
import { PropFirmCalculations } from "./calculations.js";
import { PropFirmRender } from "./render.js";

/* ==========================================================
   PROPFIRM
========================================================== */

export const PropFirm = {

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

        this.render();

    },

    /* ======================================================
       REGRAS
    ====================================================== */

    getRules() {

        return PropFirmRules;

    },

    /* ======================================================
       STATUS COMPLETO
    ====================================================== */

    getStatus() {

        return PropFirmCalculations.getStatus();

    },

    /* ======================================================
       LUCRO ATUAL
    ====================================================== */

    getCurrentProfit() {

        return PropFirmCalculations.getCurrentProfit();

    },

    /* ======================================================
       META RESTANTE
    ====================================================== */

    getRemainingTarget() {

        return PropFirmCalculations.getRemainingTarget();

    },

    /* ======================================================
       META ATINGIDA
    ====================================================== */

    isTargetReached() {

        return PropFirmCalculations.isTargetReached();

    },

    /* ======================================================
       DRAWDOWN
    ====================================================== */

    getCurrentDrawdown() {

        return PropFirmCalculations.getCurrentDrawdown();

    },

    getRemainingDrawdown() {

        return PropFirmCalculations.getRemainingDrawdown();

    },

    /* ======================================================
       LIMITE DIÁRIO
    ====================================================== */

    getTodayResult() {

        return PropFirmCalculations.getTodayResult();

    },

    isDailyLossExceeded() {

        return PropFirmCalculations.isDailyLossExceeded();

    },

    /* ======================================================
       DIAS OPERADOS
    ====================================================== */

    getTradingDays() {

        return PropFirmCalculations.getTradingDays();

    },

    hasMinimumDays() {

        return PropFirmCalculations.hasMinimumDays();

    },

    /* ======================================================
       RENDER
    ====================================================== */

    render() {

        PropFirmRender.render();

    }

};