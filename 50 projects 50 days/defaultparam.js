// function average(a=0,b=0){
//     console.log(a,b);
//     const avg = (a+b)/2;
//     return avg;
// }

// const avg=average(5);
// console.log(avg);
//here we didn't give any parameters so we get undefined for a and b
//and the average can't be found as undefined is not a number
//if we give one  argument then o/p is num and undefined
//we can give default parameters inside the parameters in function itself
//if there are no values in the arguments then the parameters take the default values
//here we have one value and other is undefined so a takes 5 and the undefined takes 0
//default parameters can take any value object,function...
function average(a=getDefault(),b=getDefault()){
    console.log(a,b);
    const avg = (a+b)/2;
    return avg;
}


function getDefault(){
    return 100;
}
const avg=average(5);
console.log(avg);
//also for left(not for right side) side parameters we can give the right side parameter as default(ie,(a,b=a))
//if in arguments we give value of a=10 then by default b=10