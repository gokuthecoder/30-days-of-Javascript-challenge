/* 
██████╗  █████╗ ██╗   ██╗    ██████╗         ██████╗ ██████╗ ███╗   ██╗████████╗██████╗  ██████╗ ██╗         ███████╗████████╗██████╗ ██╗   ██╗ ██████╗████████╗██╗   ██╗██████╗ ███████╗███████╗
██╔══██╗██╔══██╗╚██╗ ██╔╝    ╚════██╗██╗    ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔═══██╗██║         ██╔════╝╚══██╔══╝██╔══██╗██║   ██║██╔════╝╚══██╔══╝██║   ██║██╔══██╗██╔════╝██╔════╝
██║  ██║███████║ ╚████╔╝      █████╔╝╚═╝    ██║     ██║   ██║██╔██╗ ██║   ██║   ██████╔╝██║   ██║██║         ███████╗   ██║   ██████╔╝██║   ██║██║        ██║   ██║   ██║██████╔╝█████╗  ███████╗
██║  ██║██╔══██║  ╚██╔╝       ╚═══██╗██╗    ██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██╗██║   ██║██║         ╚════██║   ██║   ██╔══██╗██║   ██║██║        ██║   ██║   ██║██╔══██╗██╔══╝  ╚════██║
██████╔╝██║  ██║   ██║       ██████╔╝╚═╝    ╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╔╝███████╗    ███████║   ██║   ██║  ██║╚██████╔╝╚██████╗   ██║   ╚██████╔╝██║  ██║███████╗███████║
╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚═════╝         ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝  ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝
*/

// Task 1:
const num = 10;
if (num < 0) {
    console.log('a is negative');
} else if (num > 0) {
    console.log('a is positive');
} else {
    console.log('a is zero');
};

// Task 2:
    const age = 35;
    if (age >= 18) {
        console.log('Eligible to Vote');
    };

// Task 3:
    const num1 = 10;
    const num2 = 20;
    const num3 = 30;

    if (num1 > num2) {
        console.log('num1 is greater');
    } else if (num2 > num3) {
        console.log('num2 is greater');
    } else {
        console.log('num3 is greater');
    };    

// Task 4:
    let day = 8;    

    switch(day) {
        case 1: "monday";
            console.log('monday');
            break;
        case 2: "tuesday";
            console.log('tuesday');
            break;
        case 3: "wednesday";
            console.log('wednesday');
            break;
        case 4: "thrusday";
            console.log('thrusday');
            break;
        case 5: "friday";
            console.log('friday');
            break;
        case 6: "saturday";
            console.log('saturday');
            break;
        case 7: "sunday";
            console.log('sunday');
            break;
        default: "Invalid day";
            console.log('Invalid day');
            break;
    };


// Task 5:
    let grade;
    let score = 30;
    switch (score) {
        case (score >= 80): grade = 'A';
            console.log('Grade A');
            break;
        case (score >= 70): grade = 'B';
            console.log('Grade B');
            break;
        case (score >= 60): grade = 'C';
            console.log('Grade C');
            break;
        case (score >= 50): grade = 'D';
            console.log('Grade D');
            break;
        default: grade = 'F';
            console.log('Grade F');
            break;
    }

// Task 6:
    let nums = 10;
    const results = nums % 2 === 0 ? 'Even' : 'Odd';
    console.log(results);

// Task 7:
    let year = 2020;
    
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        console.log('Leap Year');
    } else {
        console.log('Not a Leap Year');
    };


// Features Request
    // 1. Number Check Script
    function check_nums(a){
        if(a < 0){
            console.log('a is negative');
        }else if(a > 0){
            console.log('a is positive');
        }else {
            console.log('a is zero')
        };
    };

    check_nums(12);


    // 2. Voting Eligibility check
    function VoteElig(age){
        if(age >= 18){
            console.log('Person is eligible to vote');
        }else if(age < 18){
            console.log('Person is not eligible to vote');
        }else {
            console.log('Invalid age')
        };
    };

    VoteElig(88);
    
    // 3. Day of the week Script
    function checkDay(day){
        switch(day) {
            case 1: "monday";
                console.log('monday');
                break;
            case 2: "tuesday";
                console.log('tuesday');
                break;
            case 3: "wednesday";
                console.log('wednesday');
                break;
            case 4: "thrusday";
                console.log('thrusday');
                break;
            case 5: "friday";
                console.log('friday');
                break;
            case 6: "saturday";
                console.log('saturday');
                break;
            case 7: "sunday";
                console.log('sunday');
                break;
            default: "Invalid day";
                console.log('Invalid day');
                break;
        };

    };

    checkDay(5);

    // 4. Grade Assignment Script
    function checkGrade(scores){
        let grade ;
        let score = scores;
        switch (true) {
            case (score >= 80): grade = 'A';
                console.log('Grade A');
                break;
            case (score >= 70): grade = 'B';
                console.log('Grade B');
                break;
            case (score >= 60): grade = 'C';
                console.log('Grade C');
                break;
            case (score >= 50): grade = 'D';
                console.log('Grade D');
                break;
            case (score >= 30): grade = 'F';
                console.log('Grade F');
                break;
            default : console.log('fail');
                break;
        }

    };

    checkGrade(100);

    // 5. Leap year check script
    function checkLeap(year){
        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            console.log('Leap Year');
        } else {
            console.log('Not a Leap Year');
        };
    };

    checkLeap(400);
    

    






