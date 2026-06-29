/**
 * CHARTS MODULE
 *
 * Main controller for charts data
 */



import { Storage } from "../../storage.js";



import {
    calculateCapitalChart

} from "./capital.js";



import {
    calculatePerformanceChart

} from "./performance.js";









export const Charts = {





    /**
     * Generate charts data
     */
    generate() {



        const trades =
            this.getTrades();






        const capital =
            calculateCapitalChart(
                trades
            );






        const performance =
            calculatePerformanceChart(
                trades
            );







        return {



            capital,



            performance



        };



    },









    /**
     * Get trades
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



    }






};