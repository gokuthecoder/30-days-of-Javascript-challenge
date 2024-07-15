/* 
██████╗  █████╗ ██╗   ██╗     ██╗       ██╗   ██╗ █████╗ ██████╗ ██╗ █████╗ ██████╗ ██╗     ███████╗███████╗     █████╗ ███╗   ██╗██████╗     ██████╗  █████╗ ████████╗ █████╗     ████████╗██╗   ██╗██████╗ ███████╗███████╗
██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║ ██╗    ██║   ██║██╔══██╗██╔══██╗██║██╔══██╗██╔══██╗██║     ██╔════╝██╔════╝    ██╔══██╗████╗  ██║██╔══██╗    ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
██║  ██║███████║ ╚████╔╝     ╚██║ ╚═╝    ██║   ██║███████║██████╔╝██║███████║██████╔╝██║     █████╗  ███████╗    ███████║██╔██╗ ██║██║  ██║    ██║  ██║███████║   ██║   ███████║       ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
██║  ██║██╔══██║  ╚██╔╝       ██║ ██╗    ╚██╗ ██╔╝██╔══██║██╔══██╗██║██╔══██║██╔══██╗██║     ██╔══╝  ╚════██║    ██╔══██║██║╚██╗██║██║  ██║    ██║  ██║██╔══██║   ██║   ██╔══██║       ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
██████╔╝██║  ██║   ██║        ██║ ╚═╝     ╚████╔╝ ██║  ██║██║  ██║██║██║  ██║██████╔╝███████╗███████╗███████║    ██║  ██║██║ ╚████║██████╔╝    ██████╔╝██║  ██║   ██║   ██║  ██║       ██║      ██║   ██║     ███████╗███████║
╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝         ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝
*/

// Task 1:

var x = 5;
console.log(x); //5

//Task 2

let y = 10;
console.log(y); //10

//Task 3
const bool = true;
console.log(bool); //true

// Task 4
const str = "Hello World";
const num = 100;
const bools = true;
const obj =
{
    name: "John",
    age: 25,
};

const arr = [1, 2, 3, 4, 5];

console.log(`type of str: ${typeof str} \n type of num: ${typeof num} \n type of bools: ${typeof bools} \n type of obj: ${typeof obj} \n type of arr: ${typeof arr}`);

// Task 5

let a = 10;
console.log(`prev value ${a}`)
a = 20;
console.log(`after value ${a}`)


// Task 6
const z = 30;
z = 40;
console.log(z); // error : TypeError: Assignment to constant variable.

// Features Request

    // 1. Variable Types Console Log

    function valAndType(z) {
        console.log(`value: ${z} type: ${typeof z}`);
    }

    valAndType(10);
    valAndType("Hello");
    valAndType(true);
    valAndType(obj); 
    valAndType(arr); 

    // 2. Reassignment Demo

    function letAndCon (p) {
        let a = 10;
        a = p;
        console.log(`value of a : ${a}`); // value of a : value of p

        const b = 30;
        b = p;
        console.log(`value of b : ${b}`);  // error : TypeError: Assignment to constant variable.
    };

    // let , var are Reassignable while const is not.

    letAndCon(20);