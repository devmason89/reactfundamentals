//SUPER IMPORTANT BC .MAP IS EVERYWHERE

const instructors = [
{name: 'Quincy', speciality: "Quantum Mechanics"},
{name: 'Kenn', speciality:"Norse Mythology"},
{name: 'Paul', speciality: "Tuvan throat singing"},
{name: 'Aaron', speciality:"Entomology"},
{name: 'Carolyn', speciality:"Kung Fu"}
]

let instructor_names = [];

for(let i=0; i<instructors.length; i++) {
    instructor_names.push(instructors[i].name)
}
console.log(instructor_names)

//too many steps ie manage the index, check the lenght, increment, create an empty array. .map can do all of this in a sleeker way

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//created a variable to store the result as an array. called on .map, instructor is a parameter

const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNames)

//same exact thing. just named our parameter i.

const instructorInfo = instructors.map(instructor => `${instructor.name}: ${instructor.speciality}`);
console.log(instructorInfo)

//.MAP AND REACT
let kvArray = [
    {key: 1, value: 10},
    {key:2, value:20},
    {key:3, value:30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    console.log(obj)
    let rObj = {};
    console.log('This is: ',obj.key)
    rObj[obj.key]= obj.value;                        //made 2 key value pairs into one key/value
    console.log(rObj);
    console.log(rObj.key);
    console.log(rObj.value);
    return rObj;
})