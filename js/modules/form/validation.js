/**
 * FORM VALIDATION MODULE
 *
 * Responsible for validating
 * trade form data before saving
 */


/**
 * Validate trade form data
 */
export function validateForm(data) {


    const errors = [];



    if (!data.asset) {

        errors.push(
            "Asset is required"
        );

    }



    if (!data.type) {

        errors.push(
            "Trade type is required"
        );

    }



    if (!data.entry || data.entry <= 0) {

        errors.push(
            "Entry price must be greater than zero"
        );

    }



    if (!data.quantity || data.quantity <= 0) {

        errors.push(
            "Quantity must be greater than zero"
        );

    }



    if (
        data.stopLoss !== null &&
        data.stopLoss !== undefined &&
        data.stopLoss <= 0
    ) {

        errors.push(
            "Stop loss value is invalid"
        );

    }



    if (
        data.takeProfit !== null &&
        data.takeProfit !== undefined &&
        data.takeProfit <= 0
    ) {

        errors.push(
            "Take profit value is invalid"
        );

    }



    return {

        valid: errors.length === 0,

        errors

    };


}