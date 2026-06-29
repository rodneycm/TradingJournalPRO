/* ==========================================================
   TRADING JOURNAL PRO
   STATISTICS
   PROFIT.JS
========================================================== */

import { State } from "../state.js";
import { StatisticsHelpers } from "./helpers.js";

export const Profit = {

    /* ======================================================
       MÉTRICAS FINANCEIRAS
    ====================================================== */

    getMetrics() {

        const trades = StatisticsHelpers.getTrades();

        return {

            totalProfit: this.getTotal(),

            todayProfit: this.getToday(),

            weekProfit: this.getWeek(),

            monthProfit: this.getMonth(),

            yearProfit: this.getYear(),

            averageTrade: this.getAverageTrade(),

            largestWin: StatisticsHelpers.getLargestWin(trades),

            largestLoss: StatisticsHelpers.getLargestLoss(trades)

        };

    },

    /* ======================================================
       LUCRO TOTAL
    ====================================================== */

    getTotal() {

        return StatisticsHelpers.sumResults(

            StatisticsHelpers.getTrades()

        );

    },

    /* ======================================================
       LUCRO DO DIA
    ====================================================== */

    getToday() {

        const today = new Date().toISOString().split("T")[0];

        const trades = StatisticsHelpers.filterByDate(

            StatisticsHelpers.getTrades(),

            today

        );

        return StatisticsHelpers.sumResults(trades);

    },

    /* ======================================================
       LUCRO DA SEMANA
    ====================================================== */

    getWeek() {

        const trades = StatisticsHelpers.getTrades();

        const today = new Date();

        const firstDay = new Date(today);

        firstDay.setDate(today.getDate() - today.getDay());

        firstDay.setHours(0, 0, 0, 0);

        return StatisticsHelpers.sumResults(

            trades.filter(trade => {

                const date = new Date(trade.date);

                return date >= firstDay;

            })

        );

    },

    /* ======================================================
       LUCRO DO MÊS
    ====================================================== */

    getMonth() {

        return StatisticsHelpers.sumResults(

            StatisticsHelpers.filterByMonth(

                StatisticsHelpers.getTrades(),

                State.currentMonth,

                State.currentYear

            )

        );

    },

    /* ======================================================
       LUCRO DO ANO
    ====================================================== */

    getYear() {

        return StatisticsHelpers.sumResults(

            StatisticsHelpers.filterByYear(

                StatisticsHelpers.getTrades(),

                State.currentYear

            )

        );

    },

    /* ======================================================
       MÉDIA POR TRADE
    ====================================================== */

    getAverageTrade() {

        const trades = StatisticsHelpers.getTrades();

        if (!trades.length) return 0;

        return this.getTotal() / trades.length;

    }

};