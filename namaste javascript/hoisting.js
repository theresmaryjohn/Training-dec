// var x=7

// function getName(){
//     console.log('Namate Javascript');
// }

// getName();
// console.log(x);
//here the o/p we get is Namate... and 7
//now if we write like this

// getName();
// console.log(x);

// var x=7

// function getName(){
//     console.log('Namate Javascript');
// }

//here we get the console of the getName() and get value of x as undefine as functions and var are
//hoisted(ie we can get acsess of the fuction and var before it is initialised) in js
//console log x comes as undefined()-ie no error
//but if we remove line no.15 then the o/p shows x is not defined
//if we write console.log(getName) we get the whole function printed in the console

// getName();//o/p-Namaste...
// console.log(x);//o/p-undefined(creation(first-memory allocated) phase is implemented)
// console.log(getName);//o/p-whole function code printed

// var x = 7;

// function getName() {
//   console.log("Namate Javascript");
// }
//undefined-first phase execution
//not defined(when x=7 removed)-now we do not reserve space for x as x is not present in the whole code
//but if we define getName as an arrow function-then we get getName is not a function oc calling it

// getName();
// console.log(x);
// console.log(getName);
getName();
console.log(x);
console.log(getName);

var x = 7;

var getName = () => {
  console.log("Namaste Javascript"); //behaviour is as var
};

//here it behaves as another variable-as before execution it allocates undefined to getName
//so if we put getName() on top we get that the function is undefined
//but if we put it down then by step by step execution it then behaves as a function and we get the value
