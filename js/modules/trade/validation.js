/* ==========================================================
   TRADING JOURNAL PRO
   TRADE
   VALIDATION.JS
========================================================== */

export const TradeValidation = {

    /* ======================================================
       VALIDA UM TRADE
    ====================================================== */

    validate(trade) {

        const errors = [];

        /* ==============================================
           DATA
        ============================================== */

        if (!trade.date) {

            errors.push("A data é obrigatória.");

        } else {

            const date = new Date(trade.date);

            if (isNaN(date.getTime())) {

                errors.push("Data inválida.");

            }

        }

        /* ==============================================
           CONTA
        ============================================== */

        if (!trade.account || !trade.account.trim()) {

            errors.push("A conta é obrigatória.");

        }

        /* ==============================================
           MERCADO
        ============================================== */

        if (!trade.market || !trade.market.trim()) {

            errors.push("O mercado é obrigatório.");

        }

        /* ==============================================
           ATIVO
        ============================================== */

        if (!trade.asset || !trade.asset.trim()) {

            errors.push("O ativo é obrigatório.");

        }

        /* ==============================================
           SETUP
        ============================================== */

        if (!trade.setup || !trade.setup.trim()) {

            errors.push("O setup é obrigatório.");

        }

        /* ==============================================
           LADO
        ============================================== */

        const validSides = [

            "BUY",

            "SELL"

        ];

        if (!validSides.includes(trade.side)) {

            errors.push("Lado da operação inválido.");

        }

        /* ==============================================
           CONTRATOS
        ============================================== */

        const contracts = Number(trade.contracts);

        if (

            Number.isNaN(contracts) ||

            contracts <= 0

        ) {

            errors.push(

                "Quantidade de contratos inválida."

            );

        }

        /* ==============================================
           RESULTADO
        ============================================== */

        const result = Number(trade.result);

        if (Number.isNaN(result)) {

            errors.push(

                "Resultado financeiro inválido."

            );

        }

        /* ==============================================
           CAMPOS OPCIONAIS
        ============================================== */

        if (trade.notes) {

            trade.notes = trade.notes.trim();

        }

        if (trade.points !== undefined) {

            trade.points = Number(trade.points);

        }

        if (trade.risk !== undefined) {

            trade.risk = Number(trade.risk);

        }

        /* ==============================================
           RETORNO
        ============================================== */

        return {

            valid: errors.length === 0,

            errors

        };

    }

};