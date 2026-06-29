/* ==========================================================
   TRADING JOURNAL PRO
   APP.JS
========================================================== */


import { Storage } from "./storage.js";
import { Clock } from "./clock.js";


import { initFormEvents } from "./modules/form/events.js";


import { History } from "./modules/history/index.js";



/* ==========================================================
   APP
========================================================== */


export const App = {



    /* ======================================================
       INITIALIZATION
    ====================================================== */


    init() {


        console.clear();



        console.log(
            "======================================="
        );

        console.log(
            " Trading Journal Pro"
        );

        console.log(
            " Inicializando aplicação..."
        );

        console.log(
            "======================================="
        );



        /*
            Load stored data
        */

        Storage.load();



        /*
            Start clock
        */

        Clock.start();



        /*
            Initialize form module
        */

        initFormEvents();



        /*
            Global events
        */

        this.events();



        /*
            First render
        */

        this.refresh();



        console.log(
            "Aplicação iniciada com sucesso."
        );


    },





    /* ======================================================
       GLOBAL REFRESH
    ====================================================== */


    refresh() {



        /*
            History module
        */


        if (History && History.render) {


            History.render();


        }



        /*
            Future modules:

            Calendar.render();
            KPI.render();
            Summary.render();
            Charts.render();
            Coach.render();
            PropFirm.render();

        */


    },







    /* ======================================================
       GLOBAL EVENTS
    ====================================================== */


    events() {



        document.addEventListener(
            "trade:added",
            () => {


                this.refresh();


            }
        );



        document.addEventListener(
            "trade:updated",
            () => {


                this.refresh();


            }
        );



        document.addEventListener(
            "trade:removed",
            () => {


                this.refresh();


            }
        );



        document.addEventListener(
            "trade:duplicated",
            () => {


                this.refresh();


            }
        );



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