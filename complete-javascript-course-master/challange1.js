// const mark_height = 1.69;
// const mark_weight = 78;
// const john_height = 1.95;
// const john_weight = 92;
// const BMI_mark = mark_weight / mark_height ** 2;
// const BMI_john = john_weight / john_height ** 2;
// console.log(BMI_mark, BMI_john);
// const markHigherBMI = BMI_mark > BMI_john;
// console.log(markHigherBMI);

// //using the template literals
// const firstName = "john";
// const job = "teacher";
// const birthYear = 1991;
// console.log(`I am ${firstName}, a ${2023 - 1991} year old ${job}`);
// //in template literals we can add multiple lines just by using enter rather than \n\ in ordinary strings

//taking decisions with code
//if-else control structure
const age = 19;
if (age >= 18) {
  console.log("can have a license");
} else {
  console.log("no license");
}

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
