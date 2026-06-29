/* ==========================================================
   TRADING JOURNAL PRO
   EVENTS MODULE
   ==========================================================

   Responsabilidade:
   Centralizar toda a comunicação entre os módulos da aplicação.

   Nenhum módulo deverá chamar diretamente:

       document.dispatchEvent(...)

   Todos utilizarão:

       Events.emit(...)

========================================================== */

export const Events = {

    /* ======================================================
       EMITE UM EVENTO
    ====================================================== */

    emit(eventName, detail = {}) {

        document.dispatchEvent(

            new CustomEvent(eventName, {

                detail

            })

        );

    },

    /* ======================================================
       ESCUTA UM EVENTO
    ====================================================== */

    on(eventName, callback) {

        document.addEventListener(

            eventName,

            callback

        );

    },

    /* ======================================================
       REMOVE UM EVENTO
    ====================================================== */

    off(eventName, callback) {

        document.removeEventListener(

            eventName,

            callback

        );

    }

};