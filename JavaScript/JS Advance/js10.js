

class student10 {
    tenth () {
        console.log("Belongs to class 10th")
    }
    subjects(){
        console.log("Hindi")
        console.log("English")
        console.log("Science")
    }
}
let jessica = new student10();              // student10 waali class ke function or methods jessica name ke object me aa jaenge
console.log(jessica.subjects())






//                       constructor is used to initialized the object in JavaScript
// ***** Constructor ->  Constructor is a special method which is invoked by new keyword(which is used when we create object with class name)

// we can also create our own constructor

class student12 {
    constructor(stream , section) {                                    // Here we create our own constructor
        console.log("Class 12th is used and object is created")
        this.STREAM = stream                      // Here the small subject is an argument of function and big STUDENT is key:Value pair of object 
        this.SECTION = section 
    }

    twelth () {
        console.log("12th class student")
    }
    subjects(){
        console.log("Physics")
        console.log("Chemistry")
        console.log("Maths")
    }
}


let himanshi = new student12("Non-Med","section B");             // yaha bhi same tarike se 12th class ke function of variables himanshi naam ke object me aa jaenge
console.log(himanshi)                               // this non med is stored as value of STREAM key in himanshi object














//******************************************************************************************************************* */
console.log("***************************************************************************************************************")




// ** Inheritance In javascript
// Inheritance is passing down methods and properties from parent child to child class

// kehne ka matlab jo properties or method ya functions parent class ke pass hoge wo sab child class ko bhi mill jaenge
// Basically properties/functions from one class to other class


class person{
    eat (){
        console.log("Eating")
    }
    sleep (){
        console.log("sleeping")
    }
}
class engineer extends person {                  //extends will add functions of person class to engineer class
    work(){
        console.log("build something and problem solving")
    }
}

// now if we call engineer.eat
let gulshan = new engineer()
// console.log(gulshan.eat())

// if parent and child class have same method/function than child class method is more priotized
// This is called * Method Overrinding







//******************************************************************************************************************************************* */


// ** Super keyword in js
// the super keyword is used to call the constructor of its parent class to Access the properties and methods of parent class

// jaise ki  -> for calling the parent's constructor super keyword is used
//  Dono me constructor ko use krne ke liye child class ke constructor me super yaahi parent class ke constructor se call karenge

class parent{
    constructor (behave){
        this.action = "keep home clean" ;
        this.behave = behave;
    }
    sleep (){
        console.log("rat ko jldi 10 bje Tak so jaana")
    }
    fresh(){
        console.log("khao pike fresh ho jao then ")
    }
}
class child extends parent{         // inheritance
    constructor (behave){          // ERROR : Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(behave);                // to invoke parent class's constructor
        // this.work = work
    }
    study (){
        super.fresh()                       //this will run super means parent fresh method first  -----> for directly using the parent class's functions
        console.log("Padho aur aage Badho")
    }
}

// let payal = new child("do home work fast");
let payal = new child("behave good");        // agr hum object argument ko parent class koo dena chahte h to super(argument) ko use krna pdega in child class
console.log(payal)
// console.log(payal.sleep())

// simple matlab -> agr inheritance ki h to agr child or parent class me constructor create kia h to child class me super keywordd use krna jruri h

console.log( payal.study() )   // after line 125 : ager hum parent ke function ko direct use krna chahte h apne child class me to super.funtion() use krenge







// **********************************************************************************************************************************************
console.log("**********************************************************************************************************************************************")

// Error Handling
let a=5;
let b=10;

console.log("a+b = ",a+b)
console.log("a-b = ",a-b)
try{
    console.log("a*b = ",a*c)
} catch(err){
    console.log("error ko print kro : ",err)
}
console.log("a%b = ",a%b)
console.log("a/b = ",a/b)