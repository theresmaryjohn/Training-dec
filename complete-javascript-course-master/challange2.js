// const mark_height = 1.69;
// const mark_weight = 78;
// const john_height = 1.95;
// const john_weight = 92;
// const BMI_mark = mark_weight / mark_height ** 2;
// const BMI_john = john_weight / john_height ** 2;
// if(BMI_mark>BMI_john){
//     console.log(`Mark's BMI is ${BMI_mark-BMI_john} greater than John's`);
// }
// else{
//     console.log('john has higher BMI');
// }
//type conversion
const inputYear='1991'
console.log(typeof inputYear);
console.log(inputYear+18);
//when we concatenate a number with string the number is turned to string and o/p is 199118
const inputyear=+'1991'//the plus sign converts the string to number
console.log(inputyear+18);//o/p will be 2009

console.log(+'john');
//o/p will be not a number=>typeof NaN is number it is an invalid number


//type coercion
//when we concatenate two diff typeof values js automatically 
//coverts one to match the other
//ie if we concatenate a number with string numb is changed to string

//truthy and falsy values
//on converting to boolean the falsy values shows false and truthy values show true
//the falsy values are :0,'',undefined, null,NaN
const money=0;//here money is a number
//the if -else statement tries to change the condition inside to a boolean
if(money){
    //here the condition becomes false as it is a falsy value
    console.log("Don't spend it all;)");
} else {
    console.log('You should get a job!');
}
//here we get the o/p you should get a job!
//if money has any other value then we get the if statement

let height;
//here height is undefined-so falsy value ie else is executed
if (height){
    console.log('yay!height is defined');
}else{
    console.log('height is undefined');
}

const favorite=Number(prompt('what is your favorite number'))
console.log(favorite);
//here prompt create an input like alert box where we can input our favorite 
//number and then it stores in the favorite const
//the o/p is given out as a string
//adding Number changes it to number
const hasDriversLic=true
const hasGoodVision=true
console.log(hasDriversLic&&hasGoodVision);





