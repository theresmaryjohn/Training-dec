//callback function
//we have seen that the fuctions are first class citizens
//ie we can return another function in a fuction
//the fuction which we pass into another func is called callback
//because of callbacks we can do asynchronous things in js

// function x(){

// }
// x(function y(){

// })
//here the function y is called a callback
//in settimeout we use a callback function
//settimeout thus is an async operation

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

//consider an index.html page with a button clickme
//now we need to console the number each time the button clicked
//we write it as a closure
function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("clicked", count++);
  });
}
attachEventListeners();
//garbage collection and remove event listners
//the eventlistners are heavy it takes up memory evenif nothing
//is in the callstack the memory is still used up by eventlis
//so we need to remove eventlis if not using them
