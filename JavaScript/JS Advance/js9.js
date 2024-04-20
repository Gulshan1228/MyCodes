  

  // ** ProtoTypes in js **
  // In javascript objects have a special property called prototype which is created by default
  
  // A prototype is a entity/object Contains properties and methods , which is created by default in objects in javascript

let gulshan = {
    fullname : "gulshan",
    age : 23 , 
    // Here after the Above properties the prototype object (special property) is created in student object by default
    // which contains some properties and methods
    
    printAge : function ()  {                                                      // can store functions (methods)
        console.log( this.fullname ,"'s Age = ", this.age)    
    }
}
console.log(gulshan.printAge());


let vineet = {
    fullname : "vineet",
    age : 22,
    // printAge : function() {                                                      
    //     console.log( "this is vineet's function")    
    // }
}



// ****************************

//  we can set prototype of an object to another object using __proto__
// object2.__proto__ = object1 ;


vineet.__proto__ = gulshan;
console.log(vineet)             // here the functions and properties of gulshan object added to the prototype of vineet object

console.log(vineet.printAge());  // Here it will print the output of gulshan object's function -> printAge


// if both objects have same function(method) , then the object's own method is priotized We can see above
// # Method Overriding in js









// ***********************************************************************************************************************************

                        // ** CLASSES in JS **

// class is a program-code template(blueprint) for creating objects
// We use classes , which is a template for creating objects in javascript

// These new created objects also have some state and behavior. (Properties(variables) / functons)

class car {
    brandName (brand,yearOf) {
        this.Brand = brand ;                // brand is argument whic is value
        this.Year_Of = yearOf ;             // this.yearof is the key for the value 
    }
    
    start () {
        console.log("Car started");
    }
    stop () {
        console.log("Car stoped");
    }
}
// object creation using class
// let object = new class();         -----> This way we create an object

let myCar = new car();
myCar.brandName("BMW" , 2024)       // This arguments will create values in variables in the object

// console.log( myCar.start() )                // here the mycar object can Execute functions of car class()
console.log( myCar )                // here the mycar object have functions of car class()



let newCar = new car();                     // here another car is created with the help of class
// console.log( newCar.stop() )             // so we can now create multiple objects with the help of this car() template


newCar.brandName("VW",2019) 
console.log(newCar)

