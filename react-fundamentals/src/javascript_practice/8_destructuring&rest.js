// //Deconstructor assignment

// const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];

// let stringVar = array[0];
// let numVar = array[1];
// let objVar = array[3]
// let nanVar = array[array.length -1];

// console.log(stringVar, numVar, objVar, nanVar);

// //simpler way
// let [string, num,, obj,, nan]= array;
// console.log(string, num, obj, nan)

// //double commas let us skip values in array we don't care about

// //spread operator
// let newArr = ['a', 1, undefined, ...array]
// console.log(newArr) 
//spreads out array on separate lines in console, don't even have to loop through anything

const testObj = {
    string: 'stringy thingy',
    num: 23,
    bool: true,
    obj: {key: 'waluigi'},
    arr: [1,2,3,4,undefined],
    nan: NaN
}

const stringVar = testObj.string;
const numVar = testObj.num;
const objVar = testObj.obj;
const nanVar = testObj.nan;

console.log(stringVar, numVar,objVar,nanVar)

let {string, obj, num, nan}= testObj;
console.log(string, num, obj, nan);

//destructuring to speed up the process. 

//inserting all properties in our testObj into a new object
let newObj = {test: 'blah', newThang: 'other thing', ...testObj}
console.log(newObj)