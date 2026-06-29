/**
 * FORM EVENTS MODULE
 *
 * Responsible for connecting
 * user interactions with form actions
 */


import { initForm } from "./index.js";



/**
 * Initialize form related events
 */
export function initFormEvents() {


    const form = document.querySelector("#tradeForm");


    if (!form) {

        console.warn(
            "Trade form not found"
        );

        return;

    }



    initForm();



    setupInputEvents();



    setupButtonEvents();


}



/**
 * Input related events
 */
function setupInputEvents() {


    const inputs = document.querySelectorAll(
        "#tradeForm input, #tradeForm select, #tradeForm textarea"
    );



    inputs.forEach(input => {


        input.addEventListener(
            "change",
            () => {


                clearFieldError(input);


            }

        );


    });


}



/**
 * Button events
 */
function setupButtonEvents() {


    const resetButton =
        document.querySelector("#resetForm");



    if (resetButton) {


        resetButton.addEventListener(
            "click",
            () => {


                const form =
                    document.querySelector("#tradeForm");


                if (form) {

                    form.reset();

                }


            }

        );


    }



}



/**
 * Remove validation visual errors
 */
function clearFieldError(field) {


    field.classList.remove(
        "error"
    );


}