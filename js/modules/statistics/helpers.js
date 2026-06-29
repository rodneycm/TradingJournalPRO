/* ==========================================================
   TRADING JOURNAL PRO
   STATISTICS
   HELPERS.JS
========================================================== */

import { State } from "../state.js";

export const StatisticsHelpers = {

    /* ======================================================
       TODOS OS TRADES
    ====================================================== */

    getTrades() {

        return [...State.trades];

    },

    /* ======================================================
       SOMA DOS RESULTADOS
    ====================================================== */

    sumResults(trades = []) {

        return trades.reduce(

            (total, trade) => total + Number(trade.result || 0),

            0

        );

    },

    /* ======================================================
       TRADES POSITIVOS
    ====================================================== */

    getWinningTrades(trades = []) {

        return trades.filter(

            trade => trade.result > 0

        );

    },

    /* ======================================================
       TRADES NEGATIVOS
    ====================================================== */

    getLosingTrades(trades = []) {

        return trades.filter(

            trade => trade.result < 0

        );

    },

    /* ======================================================
       MAIOR RESULTADO
    ====================================================== */

    getLargestWin(trades = []) {

        if (!trades.length) return 0;

        return Math.max(

            ...trades.map(

                trade => trade.result

            )

        );

    },

    /* ======================================================
       MAIOR PREJUÍZO
    ====================================================== */

    getLargestLoss(trades = []) {

        if (!trades.length) return 0;

        return Math.min(

            ...trades.map(

                trade => trade.result

            )

        );

    },

    /* ======================================================
       MÉDIA DOS RESULTADOS
    ====================================================== */

    average(values = []) {

        if (!values.length) return 0;

        const total = values.reduce(

            (sum, value) => sum + value,

            0

        );

        return total / values.length;

    },

    /* ======================================================
       FILTRAR POR DATA
    ====================================================== */

    filterByDate(trades = [], date) {

        return trades.filter(

            trade => trade.date === date

        );

    },

    /* ======================================================
       FILTRAR POR MÊS
    ====================================================== */

    filterByMonth(trades = [], month, year) {

        return trades.filter(trade => {

            const d = new Date(trade.date);

            return (

                d.getMonth() === month &&

                d.getFullYear() === year

            );

        });

    },

    /* ======================================================
       FILTRAR POR ANO
    ====================================================== */

    filterByYear(trades = [], year) {

        return trades.filter(trade =>

            new Date(trade.date).getFullYear() === year

        );

    }

};