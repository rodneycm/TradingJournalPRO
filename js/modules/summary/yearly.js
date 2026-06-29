/**
 * SUMMARY YEARLY MODULE
 *
 * Responsible for yearly trading summary
 */



export function calculateYearlySummary(trades = []) {



    const currentDate =
        new Date();



    const currentYear =
        currentDate.getFullYear();






    const yearlyTrades =
        trades.filter(trade => {



            if (!trade.date) {


                return false;


            }





            const date =
                new Date(trade.date);





            return (

                date.getFullYear() === currentYear

            );



        });








    let profit = 0;


    let wins = 0;


    let losses = 0;







    yearlyTrades.forEach(trade => {



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
            yearlyTrades.length,



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