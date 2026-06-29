/**
 * SUMMARY MONTHLY MODULE
 *
 * Responsible for monthly trading summary
 */



export function calculateMonthlySummary(trades = []) {



    const currentDate = new Date();



    const currentMonth =
        currentDate.getMonth();



    const currentYear =
        currentDate.getFullYear();





    const monthlyTrades =
        trades.filter(trade => {



            if (!trade.date) {

                return false;

            }



            const date =
                new Date(trade.date);



            return (

                date.getMonth() === currentMonth &&
                date.getFullYear() === currentYear

            );


        });







    let profit = 0;



    let wins = 0;



    let losses = 0;






    monthlyTrades.forEach(trade => {



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








    return {


        totalTrades:
            monthlyTrades.length,


        wins,


        losses,


        profit:
            Number(
                profit.toFixed(2)
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