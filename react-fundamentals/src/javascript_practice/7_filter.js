const instructors = [
    {name: 'Quincy', speciality: "Quantum Mechanics", medals: 4},
    {name: 'Kenn', speciality:"Norse Mythology", medals: 5},
    {name: 'Paul', speciality: "Tuvan throat singing", medals: 8},
    {name: 'Aaron', speciality:"Entomology", medals: 7},
    {name: 'Carolyn', speciality:"Kung Fu", medals: 3}
    ]

    //filter based on number of medals each instructor had using  a for loop (old way)
//     let instructor_names=[];

//     for (let i=0; i<instructors.length; i++){
//         if(instructors[i].medals >= 5){
//             instructor_names.push(instructors[i].name)
//         }
//     }

// console.log(instructor_names);

//using .filter

// const instructorNames = instructors.filter(instructor => instructor.medals >=5);
// console.log(instructorNames)

//create a variable & stored the result as an array of objects. filter() returns a new array. can safely use filter iwthout having to owrry about the og.

// const instructorNames = instructors.filter(i => i.medals >=5);
// console.log(instructorNames)

//filter requires a return value (fat arrow is taking care of that)

const instructorInfo = instructors.filter(i => i.medals > 6 && i.medals < 8)
console.log(instructorInfo)