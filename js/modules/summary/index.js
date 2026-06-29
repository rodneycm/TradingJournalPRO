/* ==========================================================
   TRADING JOURNAL PRO
   SUMMARY
   INDEX.JS
========================================================== */

import * as MonthlySummary from "./monthly.js";
import * as YearlySummary from "./yearly.js";

import { State } from "../state.js";

/* ==========================================================
   SUMMARY
========================================================== */

export const Summary = {

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

        this.#execute(
            MonthlySummary,
            [
                "render",
                "renderMonthly",
                "calculate",
                "calculateMonthlySummary",
                "generate"
            ],
            trades
        );

        this.#execute(
            YearlySummary,
            [
                "render",
                "renderYearly",
                "calculate",
                "calculateYearlySummary",
                "generate"
            ],
            trades
        );

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        this.render();

    },

    /* ======================================================
       EXECUTOR
    ====================================================== */

    #execute(module, methods, trades) {

        for (const method of methods) {

            if (typeof module[method] === "function") {

                return module[method](trades);

            }

        }

        console.warn(
            "Summary: nenhuma função encontrada em",
            module
        );

        return null;

    }

};