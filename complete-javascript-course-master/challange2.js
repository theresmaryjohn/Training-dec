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

