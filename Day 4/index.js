/* 
            ██████╗  █████╗ ██╗   ██╗    ██╗  ██╗       ██╗      ██████╗  ██████╗ ██████╗ ███████╗
            ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██║  ██║██╗    ██║     ██╔═══██╗██╔═══██╗██╔══██╗██╔════╝
            ██║  ██║███████║ ╚████╔╝     ███████║╚═╝    ██║     ██║   ██║██║   ██║██████╔╝███████╗
            ██║  ██║██╔══██║  ╚██╔╝      ╚════██║██╗    ██║     ██║   ██║██║   ██║██╔═══╝ ╚════██║
            ██████╔╝██║  ██║   ██║            ██║╚═╝    ███████╗╚██████╔╝╚██████╔╝██║     ███████║
            ╚═════╝ ╚═╝  ╚═╝   ╚═╝            ╚═╝       ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚══════╝
*/



/************************************* Task 1 *************************************/

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    };

/************************************* Task 2 *************************************/

    for (let i = 1; i <= 10; i++) {
        console.log(5 * i);
    };

/************************************* Task 3 *************************************/

    let i = 1;
    let sum = 0;

    while(i<=10){
        sum += i;
        i++;
    };

    console.log(sum);

/************************************* Task 4 *************************************/

    let num = 10;

    while(num > 0){
        console.log(num);
        num--;
    };

/************************************* Task 5 *************************************/

    let num1 = 1;
    do {
        console.log(num1)
        num1++
    } while (num1 <= 5);

/************************************* Task 6 *************************************/
    let num2 = 5;
    let facto = 1;
    do {
        facto *= num2;
        num2--;
    } while (num2 >= 1);

    console.log(facto);

/************************************* Task 7 *************************************/

    for (let i = 1; i <= 5; i++) {
        let star = ''
        for (let j = 1; j <= i; j++){
            star += "*";
        }
        console.log(star);
    };

/************************************* Task 8 *************************************/

    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue
        };
        console.log(i);
    };

/************************************* Task 9 *************************************/

    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            break
        };
        console.log(i);
    };