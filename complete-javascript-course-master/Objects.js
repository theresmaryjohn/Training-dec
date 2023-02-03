// // const jonasArray =[
// //     'Jonas',
// //     'Murray',
// //     2037-1991,
// //     'teacher'
// //     ['Michael','Peter','sam']
// // ];
// //arrays for more ordered data
// //in array we can't access elements with name 
// //this problem can be solved by objects 
// //in object we write elements as key:value pairs
// //object can be used for unordered data

// const jonas={
//     firstName:'Jonas',
//     lastName:'Murray',
//     age:2037-1991,
//     job:'teacher',
//     friends: ['Michael','Peter','sam']
// };
// console.log(jonas);
// //dot and bracket notation-to extract properties ot of the object 
// console.log(jonas.lastName);//dot
// console.log(jonas['lastName']);//bracket
// //bracket notations are more useful in retriving data from varibles
// //ie we can get data from any expression
//  const nameKey='Name'
//  console.log(jonas['first'+nameKey]);
//  console.log(jonas['last'+nameKey]);
//  //this would not work with the dot notation
// //  console.log(jonas.'last'+nameKey);-shows error

// // const interestedIn=prompt('what do you want to know?');
// // console.log(jonas.interestedIn);//the o/p becomes undefines as the key name is not present in the object
// //  console.log(jonas[interestedIn]);//in the bracket notation we get the o/p teacher

// //to add new elements
// jonas.location='portugal'
// jonas['twitter']='@jonassh'
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//object methods
//we can add functions to the objects as expressions
const jonas={
    firstName:'Jonas',
    lastName:'Murray',
    birthYear:1991,
    job:'teacher',
    friends: ['Michael','Peter','sam'],
    hasDriversLicense:true,

    // calcAge: function(birthYear){
    //     return 2037-birthYear
    // }
    //we can pass the bithyear from here itself
    calcAge: function(){
        // return 2037-this.birthYear
        this.age=2037-this.birthYear
        return this.age
    },
        getSummary: function (){
            return `${this.firstName} is a ${this.age}-year old ${this.job}, 
            and he has ${this.hasDriversLicense===true?'a':'no'} driver's license`
        }
    

};
console.log(jonas.calcAge());//in dot notation
// console.log(jonas['calcAge'](1991));//in bracket notation
console.log(jonas.age);//most efficient way


// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, 
// and he has ${jonas.hasDriversLicense===true?'a':'no'} driver's license`);
// clean way is to write it in a function
console.log(jonas.getSummary());