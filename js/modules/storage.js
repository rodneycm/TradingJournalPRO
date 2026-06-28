/* ==========================================================
   TRADING JOURNAL PRO
   STORAGE.JS
========================================================== */

import { State } from "./state.js";

/*
    Responsabilidade:

    - Ler dados do LocalStorage.
    - Salvar dados no LocalStorage.
    - Nunca manipular HTML.
    - Nunca calcular indicadores.
    - Nunca renderizar telas.
*/

const STORAGE_KEY = "TradingJournalPro";

/* ==========================================================
   STORAGE
========================================================== */

export const Storage = {

    /* ======================================================
       CARREGAR
    ====================================================== */

    load() {

        try {

            const data = localStorage.getItem(STORAGE_KEY);

            if (!data) return;

            const parsed = JSON.parse(data);

            if (parsed.trades) {

                State.setTrades(parsed.trades);

            }

            if (parsed.selectedDate !== undefined) {

                State.setSelectedDate(parsed.selectedDate);

            }

            if (parsed.currentMonth !== undefined) {

                State.setCurrentMonth(parsed.currentMonth);

            }

            if (parsed.currentYear !== undefined) {

                State.setCurrentYear(parsed.currentYear);

            }

            if (parsed.performanceView) {

                State.setPerformanceView(parsed.performanceView);

            }

        } catch (error) {

            console.error("Erro ao carregar LocalStorage:", error);

        }

    },

    /* ======================================================
       SALVAR
    ====================================================== */

    save() {

        try {

            localStorage.setItem(

                STORAGE_KEY,

                JSON.stringify(State.get())

            );

        } catch (error) {

            console.error("Erro ao salvar LocalStorage:", error);

        }

    },

    /* ======================================================
       LIMPAR
    ====================================================== */

    clear() {

        localStorage.removeItem(STORAGE_KEY);

    },

    /* ======================================================
       EXPORTAR BACKUP
    ====================================================== */

    exportData() {

        return JSON.stringify(

            State.get(),

            null,

            2

        );

    },

    /* ======================================================
       IMPORTAR BACKUP
    ====================================================== */

    importData(json) {

        try {

            const data = JSON.parse(json);

            if (data.trades) {

                State.setTrades(data.trades);

            }

            if (data.selectedDate !== undefined) {

                State.setSelectedDate(data.selectedDate);

            }

            if (data.currentMonth !== undefined) {

                State.setCurrentMonth(data.currentMonth);

            }

            if (data.currentYear !== undefined) {

                State.setCurrentYear(data.currentYear);

            }

            if (data.performanceView) {

                State.setPerformanceView(data.performanceView);

            }

            this.save();

            return true;

        } catch (error) {

            console.error("Backup inválido.", error);

            return false;

        }

    }

};