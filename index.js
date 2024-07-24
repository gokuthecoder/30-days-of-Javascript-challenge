/*
    ██████╗  █████╗ ██╗   ██╗     ██╗██████╗        ███████╗██████╗ ██████╗  ██████╗ ██████╗     ██╗  ██╗ █████╗ ███╗   ██╗██████╗ ██╗     ██╗███╗   ██╗ ██████╗ 
    ██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║╚════██╗██╗    ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗    ██║  ██║██╔══██╗████╗  ██║██╔══██╗██║     ██║████╗  ██║██╔════╝ 
    ██║  ██║███████║ ╚████╔╝     ╚██║ █████╔╝╚═╝    █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝    ███████║███████║██╔██╗ ██║██║  ██║██║     ██║██╔██╗ ██║██║  ███╗
    ██║  ██║██╔══██║  ╚██╔╝       ██║██╔═══╝ ██╗    ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗    ██╔══██║██╔══██║██║╚██╗██║██║  ██║██║     ██║██║╚██╗██║██║   ██║
    ██████╔╝██║  ██║   ██║        ██║███████╗╚═╝    ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║    ██║  ██║██║  ██║██║ ╚████║██████╔╝███████╗██║██║ ╚████║╚██████╔╝
    ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝╚══════╝       ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
*/

/************************************************************  Task-1 *********************************************************/
function VoteFunc(age) {
    try {
        if (age > 18) {
            console.log('Heyy ! you are now able to do Vote')
        } else if (age < 18) {
            console.log('Heyy ! you are not able to do Vote')
        } else {
            throw new Error('not valid age')
        }
    } catch (error) {
        console.log(error);
    }
};

VoteFunc('t');

/************************************************************  Task-2 *********************************************************/
const diviFunc = (nominator, denominator) => {
    try {
        if (denominator === 0) {
            throw new Error("Division by zero is not allow")
        }
        return nominator / denominator;
    } catch (error) {
        console.error(error)
    }
};

diviFunc(12, 4);
diviFunc(12, 0);

/************************************************************  Task-3 *********************************************************/
function checkNum (num) {
    return new Promise((resolve, reject)=>{
        if(num%2 != 0){
            reject(new Error("number is not even"))
        }
        return resolve ("number is even");
    })
};

checkNum(13).then(result=>{
    console.log('Inside then block');
    console.log(result);
}).catch(error=>{
    console.log("Inside catch block");
    console.log(error);
}).finally(()=>{
    console.log("Inside finally block");
})

/************************************************************  Task-4 *********************************************************/
class CustomEror extends Error{
    constructor(message, name){
        super(message)
        this.name = name
    }
};

const erroFunc = () =>{
    throw new CustomEror( 'Something went wrong', "customError");
};

try {
    erroFunc();
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

/************************************************************  Task-5 *********************************************************/
function validateInput (num) {
    try {
        if(num == ''){
            throw new Error("please enter number ")
        }
        console.log(num);
        return num;
    } catch (error) {
        console.log(error.message)
    }
}

validateInput('');
validateInput(12);


/************************************************************  Task-6 *********************************************************/
const promise1 = new Promise((resolve , reject)=>{
    const randomNumber = Math.random();
    console.log(randomNumber);
    if(randomNumber > 0.4){
        resolve(
            'promise resolve'
        )
    }

    reject('Promises rejected')
});

promise1.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err)
})

/************************************************************  Task-7 *********************************************************/
function randomPrice () {
    return new Promise((resolve, reject)=>{
        const isRsolve = Math.random()<0.5;
        if(isRsolve){
            resolve('Promise resolved successfully');
        }else{
            reject(new Error('Promise rejected with an error.'));
        }
    })
};

async function handlePromise() {
    try {
       const result =  await randomPrice();
       console.log(result);
    } catch (error) {
        console.error(error);
    }
};

handlePromise();


/************************************************************  Task-8 *********************************************************/
function urlFunc(url) {
    return new Promise((resolve, reject) => {
        const fetchAPI = fetch(url);
        const success = fetchAPI.then(res => {
            if(!res.ok){
                reject(new Error(`HTTP error! Status: ${res.status}`));
            }
            return res.json();
        })
        .then(result=>resolve(result))
        .catch(err => reject(new Error('Invalid URL')));
    })
}

async function fecthUrlFunc() {
    try {
        await urlFunc('https://api.thecatapi.com/v1/images/search').then(res => {
            console.log(res);
        })
    } catch (error) {
        console.log(error)
    }
};

fecthUrlFunc()

/************************************************************  Task-9 *********************************************************/

const url = 'https://api.thecatapi.com/v1/images/search';
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });







































































/* class User{
constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
 
encryptPassword(){
    return `${this.password}abc`
}

changeUserName() {
    return `${this.username.toUpperCase()}`
}
};

const chai = new User('chai', 'chai@gmail.com', 123);
console.log(chai.encryptPassword())
console.log(chai.changeUserName()) */