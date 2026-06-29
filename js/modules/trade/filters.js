/* ==========================================================
   TRADING JOURNAL PRO
   TRADE
   FILTERS.JS
========================================================== */

import { State } from "../state.js";

export const TradeFilters = {

    /* ======================================================
       TODOS OS TRADES
    ====================================================== */

    getAll() {

        return [...State.trades];

    },

    /* ======================================================
       POR ID
    ====================================================== */

    getById(id) {

        return State.trades.find(

            trade => trade.id === id

        ) || null;

    },

    /* ======================================================
       POR DATA
    ====================================================== */

    getByDate(date) {

        return State.trades.filter(

            trade => trade.date === date

        );

    },

    /* ======================================================
       POR MÊS
    ====================================================== */

    getByMonth(month, year) {

        return State.trades.filter(trade => {

            const d = new Date(trade.date);

            return (

                d.getMonth() === month &&

                d.getFullYear() === year

            );

        });

    },

    /* ======================================================
       POR ANO
    ====================================================== */

    getByYear(year) {

        return State.trades.filter(trade =>

            new Date(trade.date)

                .getFullYear() === year

        );

    },

    /* ======================================================
       POR CONTA
    ====================================================== */

    getByAccount(account) {

        return State.trades.filter(

            trade => trade.account === account

        );

    },

    /* ======================================================
       POR MERCADO
    ====================================================== */

    getByMarket(market) {

        return State.trades.filter(

            trade => trade.market === market

        );

    },

    /* ======================================================
       POR ATIVO
    ====================================================== */

    getByAsset(asset) {

        return State.trades.filter(

            trade => trade.asset === asset

        );

    },

    /* ======================================================
       POR SETUP
    ====================================================== */

    getBySetup(setup) {

        return State.trades.filter(

            trade => trade.setup === setup

        );

    },

    /* ======================================================
       VENCEDORES
    ====================================================== */

    getWinningTrades() {

        return State.trades.filter(

            trade => Number(trade.result) > 0

        );

    },

    /* ======================================================
       PERDEDORES
    ====================================================== */

    getLosingTrades() {

        return State.trades.filter(

            trade => Number(trade.result) < 0

        );

    }

};