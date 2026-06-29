/**
 * FORM MODULE
 * Responsible for coordinating:
 * - form initialization
 * - data collection
 * - validation
 * - trade creation/update
 * - form reset
 */

import { serializeForm } from "./serializer.js";
import { validateForm } from "./validation.js";
import { addTrade, updateTrade } from "../trade/index.js";


let currentEditId = null;


/**
 * Initialize form module
 */
export function initForm() {

    const form = document.querySelector("#tradeForm");

    if (!form) {
        console.warn("Form element not found");
        return;
    }


    form.addEventListener("submit", handleSubmit);


    const cancelButton = document.querySelector("#cancelEdit");

    if (cancelButton) {

        cancelButton.addEventListener("click", () => {

            resetForm();

        });

    }

}



/**
 * Handle form submit
 */
function handleSubmit(event) {

    event.preventDefault();


    const form = event.target;


    const data = serializeForm(form);


    const validation = validateForm(data);


    if (!validation.valid) {

        showValidationErrors(validation.errors);

        return;

    }


    if (currentEditId) {


        updateTrade(
            currentEditId,
            data
        );


    } else {


        addTrade(data);


    }


    resetForm();

}



/**
 * Prepare form for editing
 */
export function editForm(id, trade) {


    currentEditId = id;


    Object.keys(trade).forEach(key => {


        const field = document.querySelector(
            `[name="${key}"]`
        );


        if (field) {

            field.value = trade[key];

        }


    });



    const button = document.querySelector(
        "#submitButton"
    );


    if (button) {

        button.textContent = "Atualizar";

    }


}



/**
 * Reset form state
 */
export function resetForm() {


    const form = document.querySelector("#tradeForm");


    if (form) {

        form.reset();

    }


    currentEditId = null;



    const button = document.querySelector(
        "#submitButton"
    );


    if (button) {

        button.textContent = "Salvar";

    }


}



/**
 * Display validation errors
 */
function showValidationErrors(errors) {


    console.warn(
        "Form validation errors:",
        errors
    );


}



/**
 * Return current editing state
 */
export function getEditingId() {

    return currentEditId;

}