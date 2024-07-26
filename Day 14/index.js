/* 
        ██████╗  █████╗ ██╗   ██╗     ██╗██╗  ██╗        ██████╗██╗      █████╗ ███████╗███████╗███████╗███████╗
        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║██║  ██║██╗    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
        ██║  ██║███████║ ╚████╔╝     ╚██║███████║╚═╝    ██║     ██║     ███████║███████╗███████╗█████╗  ███████╗
        ██║  ██║██╔══██║  ╚██╔╝       ██║╚════██║██╗    ██║     ██║     ██╔══██║╚════██║╚════██║██╔══╝  ╚════██║
        ██████╔╝██║  ██║   ██║        ██║     ██║╚═╝    ╚██████╗███████╗██║  ██║███████║███████║███████╗███████║
        ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝     ╚═╝        ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
*/

/************************************************** task~1 **************************************************/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    
    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    
}

let PersonDetails = new Person("Hitesh", 37);
console.log(PersonDetails.greeting());

/************************************************** task~2 **************************************************/
Person.prototype.changeAge = function () {
    return (`Person Updated Age : ${this.age + Math.floor(Math.random() * 10)}`);
};

console.log(PersonDetails.changeAge())

/************************************************** task~3 **************************************************/
class Student extends Person {
    constructor(name, age, id) {
        super(name, age, id)
        this.studentId = id;
    };
};

Student.prototype.StudentDetails = function () {
    return this.studentId;
};

const StudentInstance = new Student("Rahul", 23, "S12BH09")
console.log(StudentInstance);

/************************************************** task~4 **************************************************/
Student.prototype.greeting = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};


console.log(StudentInstance.greeting());

/************************************************** task~5 **************************************************/
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }
}

console.log(Person1.genericGreeting())

/************************************************** task~6 **************************************************/
let i = 1;
class Student1 extends Person {
    static number_stundet = 0;
    constructor(name, age, id) {
        super(name, age, id);
        this.studentId = id;
        Student1.number_stundet += 1;
    };

    static getStudentCount() {
        return `Total number of students: ${Student1.number_stundet}`;
    }
};

let std1 = new Student1("Harry", 12, "DG34Ju")
let std2 = new Student1("Shankar", 54, "OP34Lu")
let std3 = new Student1("Naga", 12, "LH67Vf")
let std4 = new Student1("Shibu", 12, "HN89Pk")

console.log(Student1.getStudentCount());

/************************************************** task~7 **************************************************/
class Person2 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    greeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }
}

let person2Details = new Person2 ("Harish", "Sai", 23)
console.log(person2Details.fullName);

/************************************************** task~8 **************************************************/
class Person3 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello, this is a generic greeting from the Person class.";
    }
};

let person3Details = new Person3("Harish", "Sai", 23)
person3Details.fullName = "Nagina pathak"
console.log(person3Details.fullName);

/************************************************** task~9 **************************************************/
class Account {
    
    #code;
    #balance;

    constructor(code, initialbalance) {
        this.#code = code;
        this.#balance = initialbalance;
    }

    deposite(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
                console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
            } else {
                console.log('Insufficient balance.');
            }
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }

    
    getBalance() {
        return this.#balance;
    }
    
    getCode() {
        return this.#code;
    }

}

/************************************************** task~10 **************************************************/
const myAccount = new Account('A12345', 1000);
console.log(`Account Code: ${myAccount.getCode()}`); 
myAccount.deposite(500); 
myAccount.withdraw(200); 
console.log(`Current Balance: ${myAccount.getBalance()}`); 
