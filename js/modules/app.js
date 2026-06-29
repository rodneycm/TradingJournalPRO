/* ==========================================================
   TRADING JOURNAL PRO
   APP.JS
========================================================== */


import { Storage } from "./storage.js";
import { Clock } from "./clock.js";


import { initFormEvents } from "./modules/form/events.js";



/* ==========================================================
   APP
========================================================== */


export const App = {



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



        Storage.load();



        Clock.start();



        initFormEvents();



        this.events();



        this.refresh();



        console.log(
            "Aplicação iniciada com sucesso."
        );


    },





    /* ======================================================
       REFRESH
    ====================================================== */


    refresh() {



        /*
            Future modules:

            History.render();

            Calendar.render();

            KPI.render();

            Summary.render();

            Charts.render();

            Coach.render();

            PropFirm.render();

        */



        console.log(
            "Interface atualizada."
        );


    },






    /* ======================================================
       EVENTS
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






document.addEventListener(
    "DOMContentLoaded",
    () => {

        App.init();

    }
);