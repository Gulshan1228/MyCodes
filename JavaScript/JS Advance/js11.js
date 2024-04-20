

// Advance JavaScript
// Sync in javascript

// #Synchronous -> synchronous means the code runs in a particular sequence of instruction given in the program.
// Each instruction waits for the Previous instruction to complete its execution

// => executes code lines when the upper lines of code get completely executed


// Example
console.log("one")
console.log("two")
console.log("three")




// Asynchronous - > due to synchronous programming  , sometimes important instruction get blocked 
// due to some delay in the previous instruction , which cause delay in the UI .

// Asynchronous code execution allows to execute next instruction immediately after previous instruction and does not block the flow of code .

console.log("first line")
console.log("second line")
// settmeout( function , delay )

setTimeout(() => {              // this will execute after 5s and the next instructions does not wait for it
    // console.log("hello world")
 }, 5000);          // 2 seconds : 2000ms

 console.log("third line")








//  ("************************************************************************************************************
 console.log("************************************************************************************************************")

//  #Callback
//  A callback is a function passed as an argument to another function

sum = (a,b) => {
    console.log("Sum : ",a+b)
}
numSum =(a,b,funcName) => {
    funcName(a,b)
} 

sum(5,10);          // this runs sum function
numSum(5,20, sum );     // Here the sum is callback function which is funcName at line 51


// *********** Callback hell - problem of javascript

// Nested callbacks(callbacks inside another callbacks) stacked below one another forming a pyramid structure.
// This style of programming becomes difficult to understand and manage.

// getData = (id) =>{
//     setTimeout(()=>{
//         console.log("data get successfully")
//     },2000)
// }


// getData = (dataId, getNextdata)=>{
//     //2s
//     setTimeout(()=>{
//         console.log(dataId,"Data")
//         if(getNextdata){                         // agr callback function pass hoga to ye run krega - line 88,89
//             getNextdata();
//         }
//     },2000)
// }
// let data1 = getData(123)                          // ye dono ek sath run krenge
// let data2 = getData(25)

// Now if we want that each data display after 2 Second so we need to provide as callback function

// let data3 = ( getData(50, getData(100)) )        // gives error because we can not give callback function with parenthesis-()

// let data3 = getData(50 , ()=>{                   // so we will going to use the error function as a callback function
//     getData(100 , ()=>{
//         getData(200 , ()=>{
//             getData(300)                   //jaise ki yaha nahin h
//         })
//     })
// })








// ******************************************************************************************************************************************

// #Promises

// The Promise object represents the eventual completion (or failure) of Task
// # It is a solution for callback hell problem.

// It is an object in JavaScript.
// promise can have
// states : Pending  ,  Fulfilled(resolved)  ,  Reject 
// and also some result (result for Resolve and error for Reject)

// let p = new Promise((resolve,reject) => {...} );


// let promise = new Promise( (resolve,reject) => {
//     console.log("hello promise")
//     resolve("Succesfull")
//     // reject("error occured")
// })
// console.log(promise);


let getData = (dataId, getNextdata)=>{
    //2s
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId,"Data")
            resolve("successFull")
            if(getNextdata){
                getNextdata();
            }
        },3000)
    })
}
// let output = getData(123)           
// let output2 = getData(456)   
// console.log(getData())              //we get data -- State Pending
// console.log(output)                 // state fulfilled as we get data - Successfull is printed
// console.log(output2)        


// handle promise on APIs

// promise.then((res) ={ ... })             //instruction after promise fulfilled
// promise.catch((err) ={ ... })            //instruction after promise reject

// let getPromise = () => {
//     return new Promise( (resolve,reject) => {
//         console.log("hello i am a promise")
//         // resolve("Succesfull")
//         reject("Hello there : netwok error occured")
//     })
// };

// let result = getPromise()
// // console.log(result)

// result.then((res) => {
//     console.log("fulfilled")
// })

// result.catch((err) => {
//     console.log("rejected")
// })



// simplyfy this
let asyncfunc = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data1")
            // resolve("Data success")
            reject("Error in fetching Data")
        },3000)
    })
};

let p1 = asyncfunc();

console.log("fetching the data ............")
// asyncfunc().then((res)=>{                    // for resolve
//     console.log(res)
// })
// same as for reject
p1.catch((err) =>{                             // for reject
    console.log("here the error comes ;) ")
})
