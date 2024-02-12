/*Complete the function named sundaeOrder(). This function will
return another function that should accept a string (topping) to add to the sundae.
A sundae will start off with a default "A bowl of ice cream with hot fudge". Each incoming 
topping should be separated by "and". The function skeleton has already been created for 
you - your job is to fill in the missing logic.
Look at the example test cases to see how this function is invoked:*/

function sundaeOrder() {
    let sundae = "A bowl of ice cream with hot fudge";

    return function (topping) {
        if (topping) {
            sundae += " and " + topping;
        }
        return sundae;
    };
}

// Example usage:
const orderSundae = sundaeOrder();
console.log(orderSundae()); // "A bowl of ice cream with hot fudge"
console.log(orderSundae("whipped cream")); // "A bowl of ice cream with hot fudge and whipped cream"
console.log(orderSundae("chocolate chips")); // "A bowl of ice cream with hot fudge and whipped cream and chocolate chips"
