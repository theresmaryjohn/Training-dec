// //loops
// //to automate repetitive tasks
// //consider the below task if we have to repeat this ten times we write it over and over
// //also we need to change the number manually
// //this violates the DRY rule
// // console.log('lifting weights repetition 1');
// // console.log('lifting weights repetition 2');
// // console.log('lifting weights repetition 3');
// // console.log('lifting weights repetition 4');
// // console.log('lifting weights repetition 5');
// // console.log('lifting weights repetition 6');
// // console.log('lifting weights repetition 7');
// // console.log('lifting weights repetition 8');
// // console.log('lifting weights repetition 9');
// // console.log('lifting weights repetition 10');
// //so we create a loop it repeats itself until we tell it to stop

// //for loop keeps running while condition is TRUE
// for (let rep = 2; rep <= 30; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }
// // features of the for loop
// const types = [];

// const jonas = [
//   "Jonas",
//   "Murray",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "sam"],
// ];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   //filling types array with jonas array
// //   types[i]=typeof jonas[i]
//     types.push(jonas[i])
// }
// //how to create a new array with an existing one
// //create an empty array first
// //important!!!!!!!!!!!!!!!!!!!
// console.log(types);

// const years=[1991,1995,1993,2007]
// const ages=[]
// for (let i=0;i<years.length;i++){
//     ages.push(2037-(years[i]))
// }
// console.log(ages);

// //continue and break statements
// //continue is to exit the current iteration of loop and continue to next one
// //break terminates the whole loop
// for (let i = 0; i < jonas.length; i++) {
//      //we only want to print elements to array that are strings
//      if(typeof jonas[i] !== 'string' )continue;
//      //continue skips everything else and gives only string
//     console.log(jonas[i], typeof jonas[i]);
//   }



//  //now we look how break works
//  for (let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number' ) break;
//     //as soon as a number is reached the loop breaks
//    console.log(jonas[i], typeof jonas[i]);
//  }

// // //looping backwards and loops in loops


const jona = [
    "Jona",
    "Murray",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "sam"],
  ];
for(let i=jona.length-1;i>=0;i--){
    //jona[i] ,if we write jona.length for i the index goes upto 5
    //which indeed do not exist so we need to write jona.length-1 
    console.log(jona[i]);
}
//loop inside loop
//in the gym exercise if we had 3 different excersises then we need three diff loops
 for (let exercise=1; exercise<4;exercise++){
    console.log(`-----------starting exercise ${exercise}----`);
    for(rep=1; rep<6; rep++){
        console.log(`exe ${exercise}:lifting weight repetition ${rep}`);
    }
 }
//we start exersice loop first time then rep loop runs five times
//then outer loop run again and then rep loop

