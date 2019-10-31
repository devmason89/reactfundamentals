//naming the class

class User {      
    //call the constructor function & create 3 parameters
    //these parameters are passed in and stored in the object
    constructor(first, last, e){
        //right side  are our parameters, left side are the actual properties of the object
        this.f= first;
        this.l= last;
        this.email=e;
        //our properties are f, l, and email
    }
}
let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne);  //User{f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}


class Player {
    constructor(name, number, avgpoints) {
        this.name = name;
        this.number = number;
        this.avgpoints = avgpoints;
    }
}
let playerOne = new Player("Michael Jordan", "23", "77");
console.log(playerOne.first); 
console.log(playerOne.name); 
console.log(playerOne.number); 
console.log(playerOne);  
