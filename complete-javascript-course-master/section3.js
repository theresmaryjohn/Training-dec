'use strict';//some errors that will occur in a program is niot shown by the  js console
// //using strict mode is a good way for that.
// function name(){
//     function body...
// }
// name()//invoking/calling /running//each time we call a function it will be printed



function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}
// const appleJuice=fruitProcessor(5,0)
// console.log(appleJuice);
//to get the returned function we need to store the function in a variable and the have to log it to console
console.log(fruitProcessor(5,0));
//or we can just log the function to get result of the function

//function declarations vs expressions
// function calcAge1(birthYear){
//     const age=2037-birthYear
//     return age
// }
// console.log(calcAge1(1995));//the value given inside is 
// //called the arguments
// //the above is an example of function declaration

// //lets see an example of function expressions
// const calcAge2=function (birthYeah){
// return 2037-birthYeah
// }
// console.log(calcAge2(1995));
// //function acts as a value not a type





const calcAge2=function (birthYeah){
    return 2037-birthYeah
    }
    
    //arrow functions
    const calcAge3=birthYeah=>2037-birthYeah;
    console.log(calcAge3(1995))
    //arrow functions are useful when we have one line of code and only one parameter to return

//if we have more number of code and more than one parameter to return then we write the code like the below:
const yearsUntilRetirement=(birthYear, firstName) => {
    //here we have two parameters birthYear and firstname
    const age =2037-birthYear;
    const retirement=65-age;
    return`${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1995, 'Bob'));