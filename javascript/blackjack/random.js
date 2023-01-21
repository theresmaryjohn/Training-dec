//generating random numbers
let randomNumber=Math.random()//calling the func
//console.log(randomNumber);//the returned number is stored in randomNumber
//it generates a random number including 0 to 1 not including 1
//ie 0.0000000 to 0.99999


let randomNum=Math.random()*6
//console.log(randomNum);//range is 0 to 5.9999

let flooredNumber=Math.floor(3.45632)
//console.log(flooredNumber);//the Math.floor returns the value without the decimal point
//how do we create a dice function?
//let randomDigit=Math.floor(Math.random()*7)
let randomDigit=Math.floor(Math.random()*6)+1
//console.log(randomDigit);//here we create 0-6 random numbers eachtime the numbers from 0-6 appears 
//to start from 1 we add 1 to the randomDigit and *6 
//create a function rollDice(),that returns a random number between 1 and 6
function rollDice(){
    return randomDigit
}
console.log(rollDice()); 
//The logical AND operator
let hasCompletedCourse=false
let givesCertificate=true
if(hasCompletedCourse===true && givesCertificate===true){
    generateCertificate()
}//instead of nested if we can use AND operator
else{ 
    console.log("Not Eligible");
}
function generateCertificate(){
    console.log("Generating certificate....");//only if both arer true
}
//OR operator (||)the or operator checks to the o/p if one of the condition is satisfied 