/**
 * HISTORY MODULE
 *
 * Main controller for trade history
 */



import { Storage } from "../../storage.js";


import { renderHistory } from "./render.js";


import { filterTrades } from "./filters.js";


import {
    deleteTrade,
    duplicateHistoryTrade,
    editTrade

} from "./actions.js";







export const History = {




    /*
        Current filters
    */

    filters: {},








    /**
     * Initialize history module
     */
    init() {



        this.bindEvents();



        this.render();



    },









    /**
     * Render history
     */
    render() {



        const trades =
            this.getTrades();




        const filteredTrades =
            filterTrades(
                trades,
                this.filters
            );



        renderHistory(
            filteredTrades
        );



    },









    /**
     * Get trades from storage
     */
    getTrades() {



        if (Storage.get) {


            return Storage.get(
                "trades"
            ) || [];


        }





        if (

            Storage.data &&
            Storage.data.trades

        ) {


            return Storage.data.trades;


        }




        return [];



    },









    /**
     * Update filters
     */
    setFilters(filters = {}) {



        this.filters = filters;



        this.render();



    },









    /**
     * Clear filters
     */
    clearFilters() {



        this.filters = {};



        this.render();



    },









    /**
     * Module events
     */
    bindEvents() {



        document.addEventListener(

            "trade:added",

            () => {

                this.render();

            }

        );




        document.addEventListener(

            "trade:updated",

            () => {

                this.render();

            }

        );




        document.addEventListener(

            "trade:removed",

            () => {

                this.render();

            }

        );




        document.addEventListener(

            "trade:duplicated",

            () => {

                this.render();

            }

        );



    },







    /*
        Actions exposed
    */


    actions: {


        remove: deleteTrade,


        duplicate: duplicateHistoryTrade,


        edit: editTrade


    }





};