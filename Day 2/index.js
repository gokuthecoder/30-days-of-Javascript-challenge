/* 
            ██████╗  █████╗ ██╗   ██╗    ██████╗         ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗ ███████╗
            ██╔══██╗██╔══██╗╚██╗ ██╔╝    ╚════██╗██╗    ██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
            ██║  ██║███████║ ╚████╔╝      █████╔╝╚═╝    ██║   ██║██████╔╝█████╗  ██████╔╝███████║   ██║   ██║   ██║██████╔╝███████╗
            ██║  ██║██╔══██║  ╚██╔╝      ██╔═══╝ ██╗    ██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗╚════██║
            ██████╔╝██║  ██║   ██║       ███████╗╚═╝    ╚██████╔╝██║     ███████╗██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║███████║
            ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝        ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝
*/

// Task 1:
    function sum (a, b) {
        const res = a + b;
        console.log(res);
    };
    sum(20, 30); // 30

// Task 2:
    function sub (a, b) {
        const res = a - b;
        console.log(res);
    };
    sub(20, 30); // -10

// Task 3:
    function mul (a, b) {
        const res = a * b;
        console.log(res);
    };
    mul(20, 30); // 600

// Task 4:
    function div (a, b) {
        const res = a / b;
        console.log(res);
    };
    mul(20, 10); // 2

// Task 5:
    function rem (a, b) {
        const res = a % b;
        console.log(res);
    };
    mul(20, 10); // 0

// Task 6:
    let a = 10;
    a += 20;
    console.log(a); // 30

// Task 7:
    let b = 10;
    b -= 5;
    console.log(b); // 5

// Task 8:
    const c = 10;
    const d = 20;

    if(c > d){
        console.log('c is greater');
    } else if(c < d){
        console.log('d is greater');
    };

// Task 9:
    const age = 35;

    if(age >= 18){
        console.log('You are eligible to vote');
    } else if(age <= 18){
        console.log('You are not eligible to vote');
    };

// Task 10:
const num = 10;

if(num % 2 == "0" && typeof num == "number"){
    console.log('Even');
} else {
    console.log('Odd');
};

// Task 11:
    const cond1 = true;
    const cond2 = false;
    const res = cond1 && cond2;

    console.log(res);

// Task 12:
    const condt1 = true;
    const condt2 = false;
    const resu = condt1 || condt2;

    console.log(resu);

// Task 13:
    const condit = true;
    const results = !condit;
    console.log(results);

// Task 14:
    const myNum = 10;
    const myRes = (myNum > 0)?"positive":"negative";
    console.log(myRes);

// Features Request

    // 1. Arithmetic Operations :
        const Calc = (a, b) => {
            const sum  = a + b;
            const sub  = a - b;
            const mul  = a - b;
            const div  = a / b;
            const rem  = a % b;

            console.log(
                `Sum: ${sum} \n Sub: ${sub} \n Mul: ${mul} \n Div: ${div} \n Rem: ${rem}`
            );
        }

        Calc(30, 10)
    // 2. Comparison and Logical Operator Script :
        const Comp = (a, b) => {
            const greater = a > b;
            const lesser = a < b;
            const equal = a == b;
            const notEqual = a != b;
            const and = greater && lesser;
            const or = greater || lesser;
            const not = !greater;

            console.log(
                `Greater: ${greater} \n Lesser: ${lesser} \n Equal: ${equal} \n Not Equal: ${notEqual} \n And: ${and} \n Or: ${or} \n Not: ${not}`
            );
        }

        Comp(10, 20);

    // 3. Ternary Operator Script :
        const Tern = (num) => {
            const res = (num > 0)?"positive":"negative";
            console.log(res);
        }

        Tern(10);