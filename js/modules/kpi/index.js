/* ==========================================================
   TRADING JOURNAL PRO
   KPI
   INDEX.JS
========================================================== */

import * as KPICards from "./cards.js";
import * as KPIRender from "./render.js";

import { State } from "../state.js";

/* ==========================================================
   KPI
========================================================== */

export const KPI = {

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

        this.execute(
            KPICards,
            [
                "render",
                "renderCards",
                "update",
                "calculate",
                "calculateKPI"
            ],
            trades
        );

        this.execute(
            KPIRender,
            [
                "render",
                "update",
                "refresh"
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

    execute(module, methods, trades) {

        for (const method of methods) {

            if (typeof module[method] === "function") {

                return module[method](trades);

            }

        }

        console.warn(
            "KPI: nenhuma função encontrada em",
            module
        );

        return null;

    }

};