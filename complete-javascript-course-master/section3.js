'use strict';//some errors that will occur in a program is niot shown by the  js console
// //using strict mode is a good way for that.
// function name(){
//     function body...
// }
// name()//invoking/calling /running//each time we call a function it will be printed



// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }
// const appleJuice=fruitProcessor(5,0)
// console.log(appleJuice);
//to get the returned function we need to store the function in a variable and the have to log it to console
// console.log(fruitProcessor(5,0));
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
// const yearsUntilRetirement=(birthYear, firstName) => {
//     //here we have two parameters birthYear and firstname
//     const age =2037-birthYear;
//     const retirement=65-age;
//     return`${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1995, 'Bob'));

//functions can be thought as a machine

//functions calling other functions
//lets assume the fruitprocessor machine can only make juice with 
//small fruit pieces so here we need another machine  ie function

function cutFruitPieces(fruit){
    return fruit*4
}

function fruitProcessor(apples,oranges){
    const applePieces=cutFruitPieces(apples)
    const orangePieces=cutFruitPieces(oranges)
    console.log(apples,oranges);
    const juice=`Juice with ${applePieces} piececs of apple and ${orangePieces} pieces of orange`
    return juice;
}
console.log(fruitProcessor(2,3))
//if now we have to cut the fruits into 3 pieces all we have to do is to change the multiplied digit
//but if we do not write that in seperate function then
//we have to change everything manually and if we have 
//like 10 fruits then it will be a tedious task


//two functions can have same argument the argument of one function
//is not at all related to other function
// function(birthYeah){

// }
// function(birthYeah){

// }
const calcAge=function(birthYear){
    return 2037-birthYear
}
const yearsUntilRetirement=(birthYear, firstName) => {
    //yearsUntilRetirement-function
    //birthYear, firstName-parameters-placeholders to receive i/p values
    const age =calcAge(birthYear);
    const retirement=65-age;
   
    let years=retirement>0? retirement:-1
    return years
}
//return exists the function and anything written after (like console)
//will not work 
console.log(yearsUntilRetirement(1991, 'Jonas'));
//1991, 'Jonas'-arguments-actual values of function parameters to i/p data
console.log(yearsUntilRetirement(1970, 'Bob'));

//all the functions work in similar way:receive i/p data,
//transform data,o/p data
//console.log just another function and the argument we pass through it is printed to the developer console
//return-statement to o/p a value from the funcion and terminate execution




const calcAverage=(value1,value2,value3) =>(value1+value2+value3)/3
 //test1
const avgDolphines=calcAverage(44,23,71);
const avgKoalas=calcAverage(65,54,49);
console.log(avgDolphines,avgKoalas);
const checkWinner =function(avgDolphines,avgKoalas){
if(avgDolphines>=2*avgKoalas){
    console.log(`Dolphines win with an avg of ${avgDolphines}`);
}else if(avgKoalas>=2*avgDolphines){
    console.log(`Koalas win with an avg of ${avgKoalas}`);
}else{
    console.log('no team wins');
}
}
checkWinner(avgDolphines,avgKoalas)
//test2
const average=(value1,value2,value3) =>(value1+value2+value3)/3
 const scoreDolphines=calcAverage(85,54,41);
 const scoreKoalas=calcAverage(23,34,27);
 console.log(scoreDolphines,scoreKoalas);
const winner=function(scoreDolphines,scoreKoalas){

if( scoreDolphines>=2*scoreKoalas){
    console.log(`Dolphines win with an avg of ${scoreDolphines}`);
}else if( scoreKoalas>=2*scoreDolphines){
    console.log(`Koalas win with an avg of ${scoreKoalas}`);
}else{
    console.log('no team win');
}
}
winner(scoreDolphines,scoreKoalas)



