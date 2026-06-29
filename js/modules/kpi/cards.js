/**
 * KPI CARDS MODULE
 *
 * Responsible for calculating
 * KPI dashboard indicators
 */



export function calculateKPI(trades = []) {



    let totalTrades = trades.length;



    let wins = 0;



    let losses = 0;



    let profit = 0;







    trades.forEach(trade => {



        const result =
            calculateTradeResult(trade);




        profit += result;





        if (result > 0) {


            wins++;


        }





        if (result < 0) {


            losses++;


        }



    });








    const winRate =

        totalTrades > 0

            ?

            ((wins / totalTrades) * 100)

            :

            0;








    const average =

        totalTrades > 0

            ?

            profit / totalTrades

            :

            0;








    return {



        totalTrades,



        wins,



        losses,



        profit:
            Number(
                profit.toFixed(2)
            ),




        winRate:
            Number(
                winRate.toFixed(2)
            ),




        average:
            Number(
                average.toFixed(2)
            )



    };



}









function calculateTradeResult(trade) {



    if (

        !trade.entry ||
        !trade.exit ||
        !trade.quantity

    ) {


        return 0;


    }






    return (

        (trade.exit - trade.entry)

        *

        trade.quantity

    );


}