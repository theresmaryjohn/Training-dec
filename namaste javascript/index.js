//working of JS
//everything in JS happens in an execution context
//2 components of execution phase-memory or variable environment(key:value pairs)
//and code component(thread of execution)-whole code execurtd one line at atime
//so JS is a synchrones single threded language(one command at a time in a specific order)
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
//when we run this code a global execution context is created
//when code is executed first four keys(n,square,square2,square4) are identified by the memory component
//the n and square-in first phase ie the creation phase the var keys are assigned value undefined
//for the variable and for the function the whole function code is stored in then
//in phase two code execition phase-now the values are places n=2
//when it encounters the function it ahs nothing to do so it skips
//line number 7-10
//now when it reaches 11 a function evokation occurs square(n)-then a brand new exwcution context is create
//now we allocate memory to num and ans first undefined
//then puts value 2 in num and in ans(by executing code num*num) 4
//return states that return the whole control to execution context where function wass invoked
//so return value of ans to line num 11 and the value of square2 in the first execution context is placed with a value 4
//then the execution context of line num 11 will be deleted after return.then same process for line num 12 also
//the creation deletion .. are done in a stack-call stack
