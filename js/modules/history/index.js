/**
 * HISTORY MODULE
 *
 * Responsible for displaying
 * trading history records
 */


import { Storage } from "../../storage.js";



export const History = {



    /**
     * Render trade history
     */
    render() {



        const container =
            document.querySelector(
                "#history"
            );



        if (!container) {


            console.warn(
                "History container not found"
            );


            return;


        }



        const trades =
            this.getTrades();



        container.innerHTML = "";



        if (!trades.length) {



            container.innerHTML = `

                <div class="empty-history">

                    Nenhuma operação registrada.

                </div>

            `;


            return;


        }



        trades.forEach(trade => {



            container.appendChild(
                this.createTradeElement(trade)
            );


        });



    },







    /**
     * Get stored trades
     */
    getTrades() {


        if (
            Storage.get
        ) {


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
     * Create history item
     */
    createTradeElement(trade) {



        const item =
            document.createElement(
                "div"
            );



        item.className =
            "trade-history-item";



        item.innerHTML = `


            <div class="trade-symbol">

                ${trade.asset || "-"}

            </div>


            <div>

                Tipo:
                ${trade.type || "-"}

            </div>


            <div>

                Entrada:
                ${trade.entry || "-"}

            </div>


            <div>

                Quantidade:
                ${trade.quantity || "-"}

            </div>


            <div>

                Data:
                ${trade.date || "-"}

            </div>


        `;



        return item;


    }



};