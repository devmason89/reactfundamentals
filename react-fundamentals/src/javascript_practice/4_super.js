//ES6 JS Classes
//super keyword is used to call the methods of a parents class. often is used with the constructor dunction to call the parent constructor function
class User {
    constructor (username, password) {
        this.name= username;
        this.password= password;
        this.type="Trial User"
    }
    //Method 1
    greet() {
        console.log('Welcome back, '+ this.name);
    }
    //Method 2
    status() {
        console.log('Current status: '+ this.type)
    }
}

//Instance of the class/new object
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//super
class BronzeLevelUser extends User {
    //We add ccinfo property to the user here.
    constructor (username, password, ccinfo){
        //if you are to use 'this' in your constructor, you must have super that points to the parent constructor.
        super(username, password);
        //the 'this'keyword wouldn't work without super
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }

    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo)
    }
}

let bronzeGuy = new BronzeLevelUser ("Bronze Dude", "bronze7589", "432423432434");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy) //where does type come from when I consolelog this? guess it goes through bronzeleveluser and getinfo() method has this.type in it