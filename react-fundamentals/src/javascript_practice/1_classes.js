//ES6 JS Classes

class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log("Welcome back, " + this.name)
    }
    //Method 2
    status() {
        console.log("Current status: " + this.type)
    }
}


//Instance of the new class/new object
let anonDude = new User('Anonymous dude');

//we can now use the instance and the . operator to access the 2 methods

anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User('Anonymous lady');
anonLady.greet();
anonLady.status();

//Another instance of the class
let jeff = new User('Jeff');
jeff.greet();
jeff.status();

//My try of instances
let devon= new User('Devon');
devon.greet();
devon.status();

let logan= new User('Logan');
logan.greet();
logan.status();
//class is a blueprint for making objects. makes new objects or instances of the classs. 
//make instances/objects from the class using the "new" keyword
//3 diff instances of user class, can access methods with . operator