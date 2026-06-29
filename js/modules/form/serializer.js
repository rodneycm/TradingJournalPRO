/**
 * FORM SERIALIZER MODULE
 *
 * Responsible for converting
 * HTML form data into application objects
 */


/**
 * Serialize form fields into trade object
 */
export function serializeForm(form) {


    const formData = new FormData(form);


    const data = {};


    formData.forEach((value, key) => {


        data[key] = normalizeValue(value);


    });



    return prepareTradeObject(data);


}



/**
 * Normalize field values
 */
function normalizeValue(value) {


    if (typeof value !== "string") {

        return value;

    }



    const trimmed = value.trim();



    if (trimmed === "") {

        return null;

    }



    if (!isNaN(trimmed)) {

        return Number(trimmed);

    }



    return trimmed;


}



/**
 * Prepare final trade structure
 */
function prepareTradeObject(data) {


    return {


        id: data.id ?? null,


        asset: data.asset ?? "",


        type: data.type ?? "",


        entry: data.entry ?? 0,


        exit: data.exit ?? 0,


        quantity: data.quantity ?? 0,


        stopLoss: data.stopLoss ?? null,


        takeProfit: data.takeProfit ?? null,


        date: data.date ?? new Date().toISOString(),


        notes: data.notes ?? ""

    };


}