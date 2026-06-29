/* ==========================================================
   TRADING JOURNAL PRO
   FORM
   INDEX.JS
========================================================== */

import { serializeForm } from "./serializer.js";
import { validateForm } from "./validation.js";

import { Trade } from "../trade/index.js";

/* ==========================================================
   FORM
========================================================== */

let editingTradeId = null;

export const Form = {

    /* ======================================================
       INICIALIZAÇÃO
    ====================================================== */

    init() {

        const form = document.querySelector("#tradeForm");

        if (!form) {

            console.warn("TradeForm não encontrado.");

            return;

        }

        form.addEventListener(

            "submit",

            this.handleSubmit.bind(this)

        );

        const cancelButton = document.querySelector("#cancelEdit");

        if (cancelButton) {

            cancelButton.addEventListener(

                "click",

                () => this.reset()

            );

        }

    },

    /* ======================================================
       SUBMIT
    ====================================================== */

    handleSubmit(event) {

        event.preventDefault();

        const form = event.target;

        const trade = serializeForm(form);

        const validation = validateForm(trade);

        if (!validation.valid) {

            console.warn(validation.errors);

            return;

        }

        if (editingTradeId !== null) {

            Trade.update(

                editingTradeId,

                trade

            );

        } else {

            Trade.add(trade);

        }

        this.reset();

    },

    /* ======================================================
       EDITAR
    ====================================================== */

    edit(id, trade) {

        editingTradeId = id;

        Object.keys(trade).forEach(key => {

            const field = document.querySelector(

                `[name="${key}"]`

            );

            if (field) {

                field.value = trade[key];

            }

        });

        const button = document.querySelector("#submitButton");

        if (button) {

            button.textContent = "Atualizar";

        }

    },

    /* ======================================================
       RESET
    ====================================================== */

    reset() {

        const form = document.querySelector("#tradeForm");

        if (form) {

            form.reset();

        }

        editingTradeId = null;

        const button = document.querySelector("#submitButton");

        if (button) {

            button.textContent = "Salvar";

        }

    },

    /* ======================================================
       ESTADO
    ====================================================== */

    isEditing() {

        return editingTradeId !== null;

    },

    getEditingId() {

        return editingTradeId;

    }

};