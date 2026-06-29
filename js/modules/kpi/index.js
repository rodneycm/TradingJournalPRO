/**
 * KPI MODULE
 *
 * Main controller for KPI dashboard
 */



import { Storage } from "../../storage.js";



import {
    calculateKPI

} from "./cards.js";



import {
    renderKPICards

} from "./render.js";









export const KPI = {





    /**
     * Render KPI module
     */
    render() {



        const trades =
            this.getTrades();






        const kpi =
            calculateKPI(
                trades
            );






        renderKPICards(
            kpi
        );



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