    /* 
                ██████╗  █████╗ ██╗   ██╗    ███████╗       ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
                ██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔════╝██╗    ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
                ██║  ██║███████║ ╚████╔╝     ███████╗╚═╝    █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
                ██║  ██║██╔══██║  ╚██╔╝      ╚════██║██╗    ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
                ██████╔╝██║  ██║   ██║       ███████║╚═╝    ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
                ╚═════╝ ╚═╝  ╚═╝   ╚═╝       ╚══════╝       ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
    */

                /************************************************ Task 1 ************************************************/
                    const { escape } = require('querystring');
                    const readline = require('readline');
                
                    const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                    });
                    
                    const numCheck = (num) =>{
                        if(typeof num != 'number'){
                            console.log('Invalid number , Please try again 😊 ');
                            return;
                        }else {
                            if(num % 2 === 0){
                                console.log(`${num} : even`);
                            }else {
                                console.log(`${num} : odd`);
                            }
                        }
                    };

                    numCheck(12);

                    /************************************************ Task 2 ************************************************/
                    const sqrFunc = async (num) =>{
                        return (`Square of ${num} : ${num * num}`);
                    };
                    
                    rl.question('Enter Number : ', (answer)=>{
                        let newAns = parseInt(answer);
                        
                        if(isNaN(newAns)){
                            console.log('Invalid number , Please try again 😊');
                            rl.close();
                        }else {
                            console.log(sqrFunc(newAns));
                        };
                        rl.close();
                    });
                    
                    /************************************************ Task 3 ************************************************/
                    const maxFun = function (num1, num2){
                        if(num1 > num2){
                            console.log(`The maximum of ${num1} and ${num2} is ${num1}`);
                            return;
                        }else if(num1 == num2) {
                            console.log(`${num1} and ${num2} are same`);
                        }else {
                            console.log(`The maximum of ${num1} and ${num2} is ${num2}`);
                        }
                    };
                    
                    rl.question('Enter First Number : ', (answer)=>{
                        let newAns1 = parseInt(answer);
                        
                        rl.question('Enter Second Number : ', (answer)=>{
                            let newAns2 = parseInt(answer);
            
                            if(isNaN(newAns1) && isNaN(newAns2)){
                                console.log('Invalid number , Please try again 😊');
                                rl.close();
                            }else {
                            maxFun(newAns1, newAns2);
                            };
                            rl.close();
                        });

                    });

                    /************************************************ Task 4 ************************************************/
                    let string1 = "Hello !"
                    let string2 = " How are you sir"
                    const conCat = function(str1, str2){
                        let result = str1.concat(str2);
                        console.log(`Concatination of \"${str1}\" and \"${str2}\" is \"${result}\" `)
                    };

                    conCat(string1, string2);

                    /************************************************ Task 5 ************************************************/
                    const sumFunc = (num1, num2) => (num1 +num2);

                    rl.question('Enter First Number : ', (answer)=>{
                        let newAns1 = parseInt(answer);
                        
                        rl.question('Enter Second Number : ', (answer)=>{
                            let newAns2 = parseInt(answer);
                            
                            if(isNaN(newAns1) && isNaN(newAns2)){
                                console.log('Invalid number , Please try again 😊');
                                rl.close();
                            }else {
                            const result = sumFunc(newAns1, newAns2);
                            console.log(`Sum of ${newAns1} ans ${newAns2} : ${result}`);
                            };
                            rl.close();
                        });

                    });

                    /************************************************ Task 6 ************************************************/
                    const checkChar = (str) =>{
                        const specialChars = ['$', '@', '!', '~', '^', '#', '&', '*', '(', ')', '_'];
                        if(specialChars.some(char=>str.includes(char))){
                            return true;
                        }else {
                            return false;
                        }
                    };

                    rl.question('Enter String : ', (answer)=>{
                        let newStr = String(answer);
                        let result = checkChar(newStr);
                        console.log(result);
                        rl.close();
                    });

                    /************************************************ Task 7 ************************************************/
                    const prodFunc = (num1, num2=1) => num1*num2;

                    rl.question('Enter First Number : ', (answer)=>{
                        let newAns1 = parseInt(answer);
                        
                        rl.question('Enter Second Number : ', (answer)=>{
                            let newAns2 = parseInt(answer);
                            
                            if(isNaN(newAns1) || isNaN(newAns2)){
                                console.log('Invalid number , Please try again 😊');
                                rl.close();
                            }else {
                            const result1 = prodFunc(newAns1, newAns2);
                            const result2 = prodFunc(newAns1);
                            console.log(`Product of ${newAns1} and ${newAns2} : ${result1}`);
                            console.log(`Product of ${newAns1} and ${newAns2},  When newAns2 param Missing : ${result2}`);
                            };
                            rl.close();
                        });
                    });

                    /************************************************ Task 8 ************************************************/
                    const greetFunc = (name, age) => `Hii ${name} , you Age : ${age}`;

                    rl.question('Please Enter Your Name : ', (answer)=>{
                        let newAns1 = String(answer);
                        
                        rl.question('Please Enter Your Age : ', (answer)=>{
                            let newAns2 = parseInt(answer);
                            
                            if(isNaN(newAns2)){
                                console.log('Invalid number , Please try again 😊');
                                rl.close();
                            }else {
                            const result = greetFunc(newAns1, newAns2);
                            console.log(result);
                            };
                            rl.close();
                        });
                    });

                    /************************************************ Task 9 ************************************************/
                    function callbackFunction(){
                        console.log('I am  a callback function');
                    }
                    
                    function higherOrderFunction(func, num){
                        let i = 1;
                        while(i <= num){
                            func();
                            i++;
                        };
                    };
                    
                    higherOrderFunction(callbackFunction, 3);
                    
                    /************************************************ Task 10 ************************************************/
                    function mainFunc (func1, func2, value){
                        let result1 = func1(value);
                        let result2 = func2(value);

                        return result2;
                    };

                    function doubleFunction(num){
                        return num*2;
                    };

                    function addtenFunc(num){
                        return num + 10;
                    };

                    let initialValue = 5;

                    let finalresults = mainFunc(doubleFunction, addtenFunc, initialValue);
                    console.log(finalresults);

