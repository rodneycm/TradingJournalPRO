/* ==========================================================
   TRADING JOURNAL PRO
   HISTORY
   ACTIONS.JS
========================================================== */

import { Trade } from "../trade/index.js";

/*
    Responsabilidade:

    - Executar ações do histórico.
    - Não renderiza HTML.
    - Não acessa State diretamente.
*/

/* ==========================================================
   REMOVER
========================================================== */

export function deleteTrade(id) {

    if (!id) {

        console.warn("Trade id not provided.");

        return;

    }

    Trade.remove(id);

}

/* ==========================================================
   DUPLICAR
========================================================== */

export function duplicateHistoryTrade(id) {

    if (!id) {

        console.warn("Trade id not provided.");

        return;

    }

    Trade.duplicate(id);

}

/* ==========================================================
   EDITAR
========================================================== */

export function editTrade(id) {

    if (!id) {

        console.warn("Trade id not provided.");

        return;

    }

    document.dispatchEvent(

        new CustomEvent(

            "trade:edit",

            {

                detail: { id }

            }

        )

    );

}