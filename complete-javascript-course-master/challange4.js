// //switch case break
// const day='saturday';
// switch(day){
//     case 'monday'://strict comparison
//         console.log('plan course structure');
//         console.log('go to coding meetup');

// break;

//     case 'tuesday':
//         console.log('prepare videos');
       
// //ifno break the code continues
// break;

//     case 'wednesday':
//         console.log('plan course structure');
        

// break;

//     case 'thursday':
//         console.log('plan course structure');
//         console.log('go to coding meetup');

// break;

//     case 'friday':
//         console.log('plan course structure');
//         console.log('go to coding meetup');

// break;

//     case 'saturday':
//         case 'sunday':
//         console.log('enjoy weekend');
        

// break;
// default:
//     console.log('Not a valid day');
// }


let day='friday'
if (day==='monday'){
    console.log('plan course structure');
}
else if(day==='tuesday' || day==='wednesday'){
    console.log('prepare videos');
}
else if(day==='thursday'){
    console.log('write code');
}
else if(day==='friday'){
    console.log('Record videos');
}
else if(day==='saturday' || day==='sunday'){
    console.log('enjoy weekend');
}
else {
    console.log('not valid');
}


// //ternary or the conditional operator
 const age=13
// // age>=18?console.log('likes wine'):console.log('likes water');
// // //the first is the condition and then the if statement and after: else
// //in this we can only write on condition

// const drink=age>=18?'wine':'water';
// console.log(drink);
//we can also write the operator like this
//lot easier to write than the if else statement
console.log(`I like to drink ${age>=18?'wine':'water'}`);
//in template literals we can only write expressions and the ternary operator acts as an expression
//the if else block cant be put inside a template literal

//coding challange
let bill=430
let tip=bill<=300 && bill>=50?((bill*15)/100):((bill*20)/100)
console.log(`The bill was ${bill}, the tip was ${tip},and the total value ${tip+bill}`);

