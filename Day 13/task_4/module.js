const division = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return new Error("number1 and number2 must be valid numbers");
    } else if (num2 === 0) {
        return new Error("division by zero is not allowed");
    } else {
        const quotient = num1 / num2;
        return quotient;
    }
};

export default division;