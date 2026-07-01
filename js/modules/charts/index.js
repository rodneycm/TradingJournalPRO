/* ==========================================================
   TRADING JOURNAL PRO
   CHARTS
   INDEX.JS
========================================================== */

import * as CapitalChart from "./capital.js";
import * as PerformanceChart from "./performance.js";
import * as Helpers from "./helpers.js";

import { State } from "../state.js";

/* ==========================================================
   CHARTS
========================================================== */

export const Charts = {

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

        const capital =
            this.execute(
                CapitalChart,
                [
                    "render",
                    "generate",
                    "calculateCapitalChart",
                    "calculate"
                ],
                trades
            );

        const performance =
            this.execute(
                PerformanceChart,
                [
                    "render",
                    "generate",
                    "calculatePerformanceChart",
                    "calculate"
                ],
                trades
            );

        return {

            capital,

            performance

        };

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        return this.render();

    },

    /* ======================================================
       HELPERS
    ====================================================== */

    helpers: Helpers,

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
            "Charts: nenhuma função encontrada em",
            module
        );

        return null;

    }

};