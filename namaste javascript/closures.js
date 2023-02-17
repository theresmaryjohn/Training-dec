// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
//js has lexical scope
//the o/p here is 7
//this is closure-it means a function bundled along with its lexical scope
//here the ffunction y is bound to its lexical sccope of y's parent x with variable value x
//  function x() {
//     var a = 7;
//     function y() {
//       console.log(a);
//     }
//     return y
//   }
//  console.log(x());;

//when we return y we get the whole fuction of y as output
//function y() {console.log(a);}

//  function x() {
//     var a = 7;
//     function y() {
//       console.log(a);
//     }
//     return y
//   }
//  var z=x()
//  console.log(z);
//  z()
//here when we call the fuction z we get o/p 7!!!!
//when we return y a closure was returned -function along with its lexical scope ie with reference to the variable
//this whole returned fuction was put inside z
//so it remembers the value of a and it tries to find out the value of a
//when we change the value of a the new value is printed
//if the whole code was inside another function ie again a parent
function z() {
  function x() {
    var b = 900;
    var a = 7;
    function y() {
      console.log(a, b);//forms a closure
    }
    y()
  }
  x()
}
z()
//here we are trying to access the parents parent
//closure is formed along with a and b

//setTimeout
function x(){
    var i=1;
    setTimeout(function (){
        console.log(i);
    },3000)
    console.log('Namaste js');

}
x()
//here js prints namaste js first then after 3 seconds prints 1
//ie js doesn't wait for the settimeout function
//the function here forms a closure ie it remembers the value of i
//and stores it somewhere and prints it after 3 seconds
//it attaches the timer to the function
//how do we write a function where we can print 1 to 5 
//and 1 after 1s 2 after 2s and so on
//so we like think of for loop and write it like
// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i);
//         },i*1000)
//     }
   
//     console.log('Namaste js');

// }
// x()
//but here the o/p is so weird
//we get namaste js first then it prints 6 but the time is as we mentioned
//why is this so
//this happens due to closures it remember the value 6 of the variable when the loop runs and then quickley prints the value and the timer then expires
//it refers to same spot of i in memory
//a quick way to fix this is using let instead of var
//ie each time the loop is executed i is a new variable 
//not like var each time same i is reassigned
//also as let is block scoped each time the new varible 
//forms closure with the each and every function
function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function (){
            console.log(i);
        },i*1000)
    }
   
    console.log('Namaste js');

}
x()
//with var also we can create this by using anoter function after 
//for loop for i and inside function we write the sttimeout
//and then each time fuction is called it makes a new copy each time




