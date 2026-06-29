/**
 * CHARTS CAPITAL MODULE
 *
 * Responsible for preparing
 * capital evolution data
 */







export function calculateCapitalChart(trades = []) {



    let capital = 0;



    const data = [];







    trades.forEach(trade => {



        const result =
            calculateTradeResult(trade);





        capital += result;






        data.push({

            date:
                trade.date || "",


            value:
                Number(
                    capital.toFixed(2)
                )


        });



    });







    return data;



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