/**
 * SUMMARY MODULE
 *
 * Main controller for summary calculations
 */



import { Storage } from "../../storage.js";


import {
    calculateMonthlySummary

} from "./monthly.js";


import {
    calculateYearlySummary

} from "./yearly.js";









export const Summary = {




    /**
     * Render summary
     */
    render() {



        const container =
            document.querySelector(
                "#summary"
            );



        if (!container) {



            console.warn(
                "Summary container not found"
            );



            return;



        }






        const trades =
            this.getTrades();






        const monthly =
            calculateMonthlySummary(
                trades
            );






        const yearly =
            calculateYearlySummary(
                trades
            );







        container.innerHTML = `



            <div class="summary-card">


                <h3>

                    Resumo mensal

                </h3>


                <p>

                    Operações:
                    ${monthly.totalTrades}

                </p>


                <p>

                    Ganhos:
                    ${monthly.wins}

                </p>


                <p>

                    Perdas:
                    ${monthly.losses}

                </p>


                <p>

                    Resultado:
                    ${monthly.profit}

                </p>



            </div>





            <div class="summary-card">


                <h3>

                    Resumo anual

                </h3>


                <p>

                    Operações:
                    ${yearly.totalTrades}

                </p>


                <p>

                    Ganhos:
                    ${yearly.wins}

                </p>


                <p>

                    Perdas:
                    ${yearly.losses}

                </p>


                <p>

                    Resultado:
                    ${yearly.profit}

                </p>



            </div>



        `;



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