/************************************************ task~1 ********************************************************/
function outerFunc() {
    let x = 12;

    return function innerFunc() {
        return x;
    };
};

const outer = outerFunc();
console.log(`value of outerfunction : ${outer()}`);

/************************************************ task~2 ********************************************************/
function countMaintainer() {
    let count = 0;

    return {
        increamnet: function () {
            return count++
        },

        getValue: function () {
            return count;
        }
    }
};

let countObj = countMaintainer();
console.log(countObj.increamnet());
console.log(countObj.getValue());

/************************************************ task~3 ********************************************************/
function generateUniqueId() {
    let lastId = 235345;
    return function increamnet() {
        lastId++;
        return lastId;
    }
};

const generatedID = generateUniqueId();

console.log(`GeneratedID: ${generatedID()}`);
console.log(`GeneratedID: ${generatedID()}`);
console.log(`GeneratedID: ${generatedID()}`);
console.log(`GeneratedID: ${generatedID()}`);
console.log(`GeneratedID: ${generatedID()}`);
console.log(`GeneratedID: ${generatedID()}`);
console.log(`GeneratedID: ${generatedID()} \n`);

/************************************************ task~4 ********************************************************/
// : Create a closure that captures a user's name and returns a function that greets the user by name
function greetingMessage(name) {
    return function () {
        return `Hello ${name} Ji Kaise Ho`
    }
};

//new method
// console.log(greetingMessage('Ram')());
// console.log(greetingMessage('Lakshman')());

const GreetRam = greetingMessage('Ram');
const GreetLakshman = greetingMessage('Lakshman');

console.log(GreetRam());
console.log(GreetLakshman());

/************************************************ task~5 ********************************************************/
let i = 1;
const ArroFunc = [];
while (i < 18) {
    ArroFunc.push((function (index) {
        return function () {
            console.log(`I am no. ${index} which you called.`);
        }
    })(i));
    i++;
};

ArroFunc[0]();
ArroFunc[1]();

/************************************************ task~6 ********************************************************/
    /******* First Method ******/
    const ArrCollection = new Set();

    function collectionName() {
        return {
            addItems: function (item) {
                ArrCollection.add(item);
            },
            remove: function (name) {
                ArrCollection.delete(name);
            }
        }
    };

    //Add item
    const myCollection = collectionName();
    myCollection.addItems("Apple");
    myCollection.addItems("Banana");
    myCollection.addItems("Grapes");
    myCollection.addItems("Papaya");

    console.log(Array.from(ArrCollection));
    // Remove Item
    myCollection.remove('Grapes');
    console.log(Array.from(ArrCollection));

    /******* Second Method ******/
    let ItemList = [];

    function ItemFunc() {
        return {
            addItems: function (item) {
                ItemList.push(item);
            },
            removeItem: function (name) {
                ItemList = ItemList.filter((e) => {
                    return e !== name
                });
            }
        }
    };

    //Add item
    let Item = ItemFunc();
    Item.addItems("Hardisk");
    Item.addItems("Mouse");
    Item.addItems("UPS");
    Item.addItems("Moniter");
    console.log(ItemList);
    // Remove Item
    Item.removeItem("UPS");
    console.log(ItemList);


/************************************************ task~7 ********************************************************/
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
};

function slowFunction(x) {
    console.log('Computing...');
    return x * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); 
console.log(memoizedFunction(5)); 
console.log(memoizedFunction(10)); 
console.log(memoizedFunction(10)); 

/************************************************ task~8 ********************************************************/
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));
