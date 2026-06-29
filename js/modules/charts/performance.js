/**
 * CHARTS PERFORMANCE MODULE
 *
 * Responsible for preparing
 * performance chart data
 */



import {
    calculateTradeResult

} from "./helpers.js";









export function calculatePerformanceChart(trades = []) {



    let wins = 0;



    let losses = 0;



    let profit = 0;



    let loss = 0;








    trades.forEach(trade => {



        const result =
            calculateTradeResult(trade);





        if (result > 0) {



            wins++;



            profit += result;



        }






        if (result < 0) {



            losses++;



            loss += result;



        }



    });









    return {



        wins,


        losses,



        profit:
            Number(
                profit.toFixed(2)
            ),




        loss:
            Number(
                loss.toFixed(2)
            ),




        total:

            trades.length



    };



}