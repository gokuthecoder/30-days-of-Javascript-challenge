/* 
██████╗  █████╗ ██╗   ██╗     ██╗ ██████╗        ██████╗ ███████╗ ██████╗██╗   ██╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗
██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║██╔════╝ ██╗    ██╔══██╗██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝██║██╔═══██╗████╗  ██║
██║  ██║███████║ ╚████╔╝     ╚██║███████╗ ╚═╝    ██████╔╝█████╗  ██║     ██║   ██║██████╔╝███████╗██║██║   ██║██╔██╗ ██║
██║  ██║██╔══██║  ╚██╔╝       ██║██╔═══██╗██╗    ██╔══██╗██╔══╝  ██║     ██║   ██║██╔══██╗╚════██║██║██║   ██║██║╚██╗██║
██████╔╝██║  ██║   ██║        ██║╚██████╔╝╚═╝    ██║  ██║███████╗╚██████╗╚██████╔╝██║  ██║███████║██║╚██████╔╝██║ ╚████║
╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝ ╚═════╝        ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝
*/

/***************************************************************** task~1 *****************************************************************/
function factorialFunc(num) {
    if (num === 0) {
        return 1;
    }
    let factorial = num * factorialFunc(num - 1);
    return factorial
}

console.log(factorialFunc(5));
console.log(factorialFunc(13));
console.log(factorialFunc(16));


/***************************************************************** task~2 *****************************************************************/
function fibonacci(n) {
    debugger;
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(5));
console.log(fibonacci(13));
console.log(fibonacci(16));

/***************************************************************** task~3 *****************************************************************/
function summation(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + summation(arr.slice(1));
    }
}

console.log(summation([12, 34, 56, 78, 45, 345]));

/***************************************************************** task~4 *****************************************************************/
function maxFinder(arr) {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return arr[0];

    const [max, ...allother] = arr;
    const maxm = maxFinder(allother);

    return max > maxm? max : maxm;
}

console.log(maxFinder([12, 34, 56, 78, 45, 345]));

/***************************************************************** task~5 *****************************************************************/
function reverseStr(str) {
    if (str === "") {
        return "";
    }

    const [firstChar, ...rest] = str;
    return reverseStr(rest.join(""))+firstChar
};

console.log(reverseStr("helo"));

/***************************************************************** task~6 *****************************************************************/
function isPalindrome(str) {
        if (str == '') {
                return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    };

    return isPalindrome(str.slice(1, -1));
};

console.log(isPalindrome("riir"))


/***************************************************************** task~7 *****************************************************************/
function binarysarch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (target < arr[mid]) {
        return binarysarch(arr, target, start, mid - 1)
    }

    return binarysarch(arr, target, mid + 1, end);
}

console.log(binarysarch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))






































































































