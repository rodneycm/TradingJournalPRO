/* ==========================================================
   TRADING JOURNAL PRO
   TRADE
   INDEX.JS
========================================================== */

import { TradeCRUD } from "./crud.js";
import { TradeFilters } from "./filters.js";

/* ==========================================================
   TRADE
========================================================== */

export const Trade = {

    /* ======================================================
       CRUD
    ====================================================== */

    add(trade) {

        return TradeCRUD.add(trade);

    },

    update(id, trade) {

        return TradeCRUD.update(id, trade);

    },

    remove(id) {

        return TradeCRUD.remove(id);

    },

    duplicate(id) {

        return TradeCRUD.duplicate(id);

    },

    /* ======================================================
       CONSULTAS
    ====================================================== */

    getAll() {

        return TradeFilters.getAll();

    },

    getById(id) {

        return TradeFilters.getById(id);

    },

    getByDate(date) {

        return TradeFilters.getByDate(date);

    },

    getByMonth(month, year) {

        return TradeFilters.getByMonth(month, year);

    },

    getByYear(year) {

        return TradeFilters.getByYear(year);

    },

    getByAccount(account) {

        return TradeFilters.getByAccount(account);

    },

    getByMarket(market) {

        return TradeFilters.getByMarket(market);

    },

    getByAsset(asset) {

        return TradeFilters.getByAsset(asset);

    },

    getBySetup(setup) {

        return TradeFilters.getBySetup(setup);

    },

    getWinningTrades() {

        return TradeFilters.getWinningTrades();

    },

    getLosingTrades() {

        return TradeFilters.getLosingTrades();

    }

};