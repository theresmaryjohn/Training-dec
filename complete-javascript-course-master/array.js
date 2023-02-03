const friend1='sam'
const friend2='remo'
const friend3='pete'
const friends=['sam','remo','pete']
console.log(friends);

const years=new Array(1,2,3,4);
console.log(years);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);
//to get the last element of array
//change the element 
friends[2]='jay'
console.log(friends);
//array methods-array operations
//.push adds an element to the end of the array
//if we want to know the newlength of the array just call the .push 
//element newLength and we get it as in below
const newLength=friends.push('esther')
console.log(friends);
console.log(newLength);
//like .push the .unshift adds an elemnt at first of the array
friends.unshift('john')
console.log(friends);
//like .push unshiffffft also gives newlength of the array
//to remove elements
//.pop opposite of push removes last element
//the opposite of unshift is shift
console.log(friends.indexOf('jay'));
//we can check if an elemnt is in the array by just using .includes method
console.log(friends.includes('jay'));
//if we add a number to the array and if we check .includes('num')
//then it will show false as the .include method does no type coersion
//it is strict equality so we need to write .includes(num) as a number itself
//we can write conditions with this
//aswe know if converts condition to boolean and if only true it returns the console
if (friends.includes('jay')){
    console.log('You have a friend called jay');
}




function calcTip(bill){
    
   return bill>=50&&bill<=300?bill*0.15:bill*0.2;
}
let bill=[125,555,44];
const tip=[calcTip(bill[0]), calcTip(bill[1]),calcTip(bill[2])];

console.log(bill,tip);
const total=[(bill[0]+tip[0]),(bill[1]+tip[1]),(bill[2]+tip[2])]
console.log(total);

