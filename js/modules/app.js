/* ==========================================================
   TRADING JOURNAL PRO
   APP.JS
========================================================== */

/*
    Responsabilidade:

    - Inicializar toda a aplicação.
    - Coordenar os módulos.
    - Registrar eventos globais.
    - Atualizar a interface.

    Não contém regras de negócio.
*/

import { Storage } from "./storage.js";
import { Clock } from "./clock.js";

import { Form } from "./form/index.js";
import { Calendar } from "./calendar/index.js";
import { History } from "./history/index.js";
import { KPI } from "./kpi/index.js";
import { Summary } from "./summary/index.js";
import { Charts } from "./charts/index.js";
import { Coach } from "./coach/index.js";
import { PropFirm } from "./propFirm/index.js";

/* ==========================================================
   APP
========================================================== */

export const App = {

    /* ======================================================
       INIT
    ====================================================== */

    init() {

        console.clear();

        console.log("======================================");
        console.log(" Trading Journal Pro");
        console.log(" Inicializando...");
        console.log("======================================");

        Storage.load();

        Clock.start();

        Form.init();

        Calendar.init();

        History.init();

        KPI.init();

        Summary.init();

        Charts.init();

        Coach.init();

        PropFirm.init();

        this.registerEvents();

        this.refresh();

        console.log("Aplicação inicializada.");

    },

    /* ======================================================
       REFRESH
    ====================================================== */

    refresh() {

        Calendar.refresh();

        History.refresh();

        KPI.refresh();

        Summary.refresh();

        Charts.refresh();

        Coach.refresh();

        PropFirm.refresh();

    },

    /* ======================================================
       EVENTOS GLOBAIS
    ====================================================== */

    registerEvents() {

        const events = [

            "trade:added",

            "trade:updated",

            "trade:removed",

            "trade:duplicated"

        ];

        events.forEach(event => {

            document.addEventListener(

                event,

                () => {

                    this.refresh();

                }

            );

        });

    }

};

/* ==========================================================
   START
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    () => {

        App.init();

    }

);