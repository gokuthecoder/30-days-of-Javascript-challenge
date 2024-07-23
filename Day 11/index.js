/* 
██████╗  █████╗ ██╗   ██╗     ██╗ ██╗       ██████╗ ██████╗  ██████╗ ███╗   ███╗██╗███████╗███████╗███████╗     █████╗ ███╗   ██╗██████╗      █████╗ ███████╗██╗   ██╗███╗   ██╗ ██████╗    █████╗ ██╗    ██╗ █████╗ ██╗████████╗
██╔══██╗██╔══██╗╚██╗ ██╔╝    ███║███║██╗    ██╔══██╗██╔══██╗██╔═══██╗████╗ ████║██║██╔════╝██╔════╝██╔════╝    ██╔══██╗████╗  ██║██╔══██╗    ██╔══██╗██╔════╝╚██╗ ██╔╝████╗  ██║██╔════╝██╗██╔══██╗██║    ██║██╔══██╗██║╚══██╔══╝
██║  ██║███████║ ╚████╔╝     ╚██║╚██║╚═╝    ██████╔╝██████╔╝██║   ██║██╔████╔██║██║███████╗█████╗  ███████╗    ███████║██╔██╗ ██║██║  ██║    ███████║███████╗ ╚████╔╝ ██╔██╗ ██║██║     ╚═╝███████║██║ █╗ ██║███████║██║   ██║   
██║  ██║██╔══██║  ╚██╔╝       ██║ ██║██╗    ██╔═══╝ ██╔══██╗██║   ██║██║╚██╔╝██║██║╚════██║██╔══╝  ╚════██║    ██╔══██║██║╚██╗██║██║  ██║    ██╔══██║╚════██║  ╚██╔╝  ██║╚██╗██║██║     ██╗██╔══██║██║███╗██║██╔══██║██║   ██║   
██████╔╝██║  ██║   ██║        ██║ ██║╚═╝    ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║██║███████║███████╗███████║    ██║  ██║██║ ╚████║██████╔╝    ██║  ██║███████║   ██║   ██║ ╚████║╚██████╗╚═╝██║  ██║╚███╔███╔╝██║  ██║██║   ██║   
╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═╝ ╚═╝       ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝╚══════╝╚══════╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═══╝ ╚═════╝   ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝  
*/

/*********************************************** Task-1 ***********************************************/
const promis = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Promises Resolved')
    }, 2000)
});

/*********************************************** Task-2 ***********************************************/
let promise = new Promise(function (resolve, reject) {
    reject(new Error('Something went wrong?'));
});

promise.catch((error) => {
    setTimeout(() => {
        console.log(error)
    }, 4000)
});

/*********************************************** Task-3 ***********************************************/
let firstpromise = new Promise(function (resolve, reject) {
    setTimeout(()=>{
        resolve('First promises resolved')
    }, 2000)
});

firstpromise.then(result1=>{
    console.log(result1);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Second promises resolved')
        }, 1000)
    })
}).then(result2=>{
    console.log(result2);
    return "Third result";
}).then(result3=>{
    console.log(result3);
}).catch(error=>{
    console.log("error", error)
});

/*********************************************** Task-4 ***********************************************/

const promFunc = async (url) => {
    const fetchURL = await fetch(url);
    // console.log(fetchURL);
    // console.log(fetchURL.ok); // true/false
    if(!fetchURL.ok){
        throw new Error("Http Error", fetchURL.status)
    }
    const fetchedData = fetchURL.json();
    return fetchedData;
};

promFunc('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
.then(async result =>{
    console.log(result);
}).catch(error=>{
    console.log("erro", error)
});

/*********************************************** Task-5 ***********************************************/


const rejectFunc = async () => {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("This is a rejected promise"));
            }, 1000);
        });
        
        console.log(result);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

rejectFunc();

/*********************************************** Task-6 ***********************************************/


const ApiFetchFunc = () => {
        const fetchurl = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        fetchurl.then(result=>{
            return result.json();
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        })
};

ApiFetchFunc();

/*********************************************** Task-7 ***********************************************/
const ApiFechFunc = async () => {
    try {
        const fetched = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        const data = await fetched.json();
        console.log('Api response data', data)
    } catch (error) {
        console.log('Error in fetching ', error)
    }
}

ApiFechFunc()

/*********************************************** Task-8 ***********************************************/
let promise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, "two")
});

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 400, "one")
});
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 600, "three")
});

Promise.all([promise1, promise2, promise3])
.then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
});
/*********************************************** Task-9 ***********************************************/
let pomise1 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, "two")
});

let pomise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 400, "one")
});
let pomise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 600, "three")
});

Promise.race([pomise1, pomise2, pomise3])
.then(res=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
});




