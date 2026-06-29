/**
 * CHARTS HELPERS MODULE
 *
 * Shared utility functions
 * for charts calculations
 */







/**
 * Calculate single trade result
 */
export function calculateTradeResult(trade) {



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









/**
 * Calculate percentage
 */
export function calculatePercentage(value, total) {



    if (!total) {


        return 0;


    }






    return Number(

        (

            (value / total)

            *

            100

        )

        .toFixed(2)

    );



}









/**
 * Format chart value
 */
export function formatChartValue(value) {



    return Number(

        Number(value)
            .toFixed(2)

    );


}