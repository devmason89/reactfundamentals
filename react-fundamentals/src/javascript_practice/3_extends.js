//ES6 JS Classes
class User {
    constructor (name) {
        this.name= name;
        this.type= "Trial User"
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

//Extends
class TrialUser extends User {
    trialEnding(){
        console.log("Your trial will be ending soon, " + this.name + "." +' Would you like to join our program?')
    }
}

//Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of a TrialUser class
let trialUser = new TrialUser ("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

class BannedUser extends User {
    userBanned(){
        console.log("You tried to steal money, " + this.name + "." + ' You are banished.')
    }
}

let bannedUser = new BannedUser ('Henry');
bannedUser.greet();
bannedUser.userBanned();
bannedUser.status();


//making a new class that inherits certain properties from another class. called parent and child class or inheritance or subclass. TrialUser became a child of User. child can have its ownvseparate methods (trialEnding () fx)