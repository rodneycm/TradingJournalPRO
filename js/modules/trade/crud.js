/* ==========================================================
   TRADING JOURNAL PRO
   TRADE
   CRUD.JS
========================================================== */

import { State } from "../state.js";
import { Storage } from "../storage.js";
import { Events } from "../events/index.js";
import { TradeValidation } from "./validation.js";

export const TradeCRUD = {

    /* ======================================================
       ADICIONAR
    ====================================================== */

    add(trade) {

        const validation = TradeValidation.validate(trade);

        if (!validation.valid) {

            return validation;

        }

        const newTrade = {

            id: crypto.randomUUID(),

            createdAt: new Date().toISOString(),

            updatedAt: new Date().toISOString(),

            ...trade

        };

        State.trades.push(newTrade);

        this.sort();

        Storage.save();

        Events.emit("trade:added", newTrade);

        return {

            valid: true,

            trade: newTrade

        };

    },

    /* ======================================================
       EDITAR
    ====================================================== */

    update(id, data) {

        const index = State.trades.findIndex(

            trade => trade.id === id

        );

        if (index === -1) {

            return {

                valid: false,

                errors: ["Trade não encontrado."]

            };

        }

        const updatedTrade = {

            ...State.trades[index],

            ...data,

            updatedAt: new Date().toISOString()

        };

        const validation =

            TradeValidation.validate(updatedTrade);

        if (!validation.valid) {

            return validation;

        }

        State.trades[index] = updatedTrade;

        this.sort();

        Storage.save();

        Events.emit(

            "trade:updated",

            updatedTrade

        );

        return {

            valid: true,

            trade: updatedTrade

        };

    },

    /* ======================================================
       REMOVER
    ====================================================== */

    remove(id) {

        const before = State.trades.length;

        State.trades = State.trades.filter(

            trade => trade.id !== id

        );

        if (before === State.trades.length) {

            return false;

        }

        Storage.save();

        Events.emit("trade:removed", id);

        return true;

    },

    /* ======================================================
       DUPLICAR
    ====================================================== */

    duplicate(id) {

        const trade = State.trades.find(

            trade => trade.id === id

        );

        if (!trade) {

            return null;

        }

        const copy = {

            ...trade,

            id: crypto.randomUUID(),

            createdAt: new Date().toISOString(),

            updatedAt: new Date().toISOString()

        };

        State.trades.push(copy);

        this.sort();

        Storage.save();

        Events.emit(

            "trade:duplicated",

            copy

        );

        return copy;

    },

    /* ======================================================
       ORDENAÇÃO
    ====================================================== */

    sort() {

        State.trades.sort(

            (a, b) =>

                new Date(a.date) -

                new Date(b.date)

        );

    }

};