// module.js

export const summation = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return new Error("number1 and number2 must be valid numbers");
    } else {
        const sum = num1 + num2;
        return sum;
    }
};

export const subtraction = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return new Error("number1 and number2 must be valid numbers");
    } else {
        const difference = num1 - num2;
        return difference;
    }
};

export const multiplication = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return new Error("number1 and number2 must be valid numbers");
    } else {
        const product = num1 * num2;
        return product;
    }
};

export const division = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return new Error("number1 and number2 must be valid numbers");
    } else if (num2 === 0) {
        return new Error("division by zero is not allowed");
    } else {
        const quotient = num1 / num2;
        return quotient;
    }
};
