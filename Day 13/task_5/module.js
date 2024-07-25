const name = "Vishwas rai";

let salary = 32000;

const summation = (num1, num2) =>{
    if (typeof num1 == "number" && typeof num2 == "number") {
        const sum = num1 + num2;
        return sum;
    } else {
        return new Error("number1 and number2 are not a valid number")
    }
};

const greet = () =>{
    console.log(`Hii my name : ${name}, salary: ${salary}`)
}

export {name, salary, summation, greet};

