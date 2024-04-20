
// for solving callback hell problem lets make a promise chain to the previous js file question.
getData = (dataId)=>{              // dont need callback in promise chain
    //2s
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            console.log(dataId,"Data")
            resolve("successfull")
        },4000)
    })
}
console.log("fetching data1")       

// getData(25).then((res) =>{
//     console.log(res)
//     console.log("fetching data2")
//     getData(50).then((res) =>{
//         console.log(res)
//     })
// })

//  from 14 - 20 can be done : Promise-Chain
getData(1).then((res)=>{
    console.log(res)
    return getData(2)
}).then((res)=>{
    console.log(res)
    return getData(3)
}).then((res)=>{
    console.log(res)
})





//*************************************************************************************************************************************** */

//  Async-await
// both are keywords in js

// Async function is always returns a promise 
// Async function printData(){...}          *this returns a promise

//await pauses the execution of its surrounding async functions untill the promise is settled

async function printHello(arg) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hello this is async function no : ",arg)
            resolve("sucessfull")
        },2000)
    })
}

async function printLines(){
    await printHello(1)
    await printHello(2)
    await printHello(5)
}
console.log(printLines())





// lets solve problem of callback hell << promise chain <<<< Async-Await concept
getDataNew = (dataId)=>{              // dont need callback in promise chain
    //2s
    return new Promise((resolve,reject) =>{
        setTimeout(()=> {
            console.log(dataId,"Data")
            resolve("successfull")
        },4000)
    })
}
console.log("fetching datas")

async function getAllData () {
    await getDataNew(100)               //this will compeletely execute the code and then execute the next instructions
    await getDataNew(200)               // await Keyword is always written under async function only
    await getDataNew(300)
    await getDataNew(400)
    await getDataNew(500)
    console.log("all data is printed here")
} 
console.log(getAllData())



// ***** IIFE
// Immediately invoked function expression

// it is a function that is called imeediately as sooon as it is defined
// (function)();