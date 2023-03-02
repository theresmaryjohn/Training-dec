//CALLBACK
// console.log("one");
// document.getElementById("button").onclick = myfunction;
//on button click the button consoles the argument which is already stored
//and not the argument on the function we pass

function myfunction(arg) {
  // console.log(arg);
}
// myfunction(10)
// console.log("two");
//this is a regular function
//when a button is clicked and then the function works it is a callback function
//two types-synchronous and asynchrounous callback
//if we do not call the function after the function is written the on
//button click only it is executed .
//so button click is an asynchronous function
//foreach -synchronous
// console.log("one");
const a = [1, 2, 3, 4];
function myFunction(arg) {
  // console.log(arg);
}
a.forEach(myFunction);
//here for every element the function calls
// console.log("two");

//ARROW FUNCTION
const fn = (val) => {
  // console.log("hello world=", val);
  return 19;
};
// fn(19)

const fn1 = function (a, b) {
  return a * b;
};
const fn2 = (a, b) => a + b;

const add = fn2(3, 2);
const mult = fn1(3, 2);

// console.log(add, mult);

const obj = {
  a: 100,
  b: 200,
  myFunc: () => {
    return this.a + this.b;
    //if we don't add this. to the statement then we get an aeerror
    //as the function can't identify a and b
  },
};
// console.log(obj.myFunc());

//THIS KEYWORD-related to object
//if the value of an object is a function an dif we need to access the variables inside
//the function we use this keyword
const myObj = {
  a: 1,
  b: 2,
  c: function () {
    // console.log(this);
    //this points to the object itself
  },
};
// myObj.c(); //here myObj. is the context
//for myObj.c the context is that object
//instead of that if we define a variable for function and call that variable
//then the context for that is not object it is the executing window(parent obj) itself
var aa = myObj.c;
// aa();
//now if we use arrow function in both cases then the context comes as
//where the function is wrote and the context of the function=>the parent
//function is always printed=>ie the window
//to set context we can use call keyword
//aa.call(myObj)
//to set context ondefining itself we can use a keyword bind
//so that however we call it it doesn't change
//after the object definition we write
// myObj.c=myObj.c.bind(myObj)

//CALL BY VALUE & CALL BY REFERENCE
//objects and arrays are called by reference and values are called by value

var objs = [
  {
    name: "one",
    msg: "hello one",
  },
];

function main() {
  objs.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerHTML = item.name;
    btn.onclick = getCallback(item.msg);
    document.body.appendChild(btn);
  });
}

function getCallback(arg) {
  return function () {
    alert(arg);
  };
}
// main();
//example of closure
//if we had a function myCallback without a return function then the alet msg appears before
//the buttonclick-as the argument is saved inside the closure of the returned function
//so we get it only on button click

//SPREAD OPERATOR

var obj1 = {
  a: 1,
  b: 2,
  c: {
    name: "ram",
    age: 45,
  },
};
var obj2 = {
  ...obj1,
};
//if we compare both both are two different objects so comparison will be false
//if we write obj2=obj1-then on comparison we get true
//this is spread operator (...).this shallow cloning the object ie,
//in shallow cloning the key value paires are passed by refereence so if we change on ethe other also change
//evenif it is an inside object
//but we cannot add new paires to the copied object by spread operator
obj1.d = 44; //this is only appilcable to object and not the copy
obj1.c.name = "krish";
//this change occurs to both as the copied object goes to the reference and gets the value

// console.log(obj1, obj2);

//by spread operator we can manipulate arrays
var arr = [1, 2, 33, 49, 15, 60];
var x = Math.max(...arr);
// console.log(x);

//DESTURCTURING-asimple way of assigning the object values to another
//function or variable

//usually we acsess objects as objname.key

function objFunction() {
  // const one=obj1.a;
  // const two=obj1.b;
  //this is the regular method
  //in desturcturing
  //if we want to change the variable name then put colon and write variable name
  const { a, b, ...rest } = obj1;
  console.log(a, b, rest);
  //to get the remaining values in obj1 we use the rest or others or
  //anything after three dot which prints other values
}
// objFunction();

var obj3 = {
  name: "code",
  place: "kerala",
};
var obj4 = {
  name: "bob",
  place: "america",
};

function abc() {
  var { name, place } = obj3;
  var { name: name2, place: place2 } = obj4;
  console.log(name, place, name2, place2);
  // var{
  //     name,
  //     place
  // }=obj4
  // console.log(name,place);
  //here the o/p comes as bob and america as obj4 replaces obj3
}
// abc();

//ARRAY FUNCTIONS(forEach,find,filter,map,reduce)
const arra = [
  {
    name: "Alice",
    mark: 35,
    place: "kannur",
  },
  {
    name: "Bob",
    mark: 28,
    place: "palakkad",
  },
  {
    name: "Catherine",
    mark: 44,
    place: "trissur",
  },
  {
    name: "Daniel",
    mark: 23,
    place: "kollam",
  },
];
//FOREACH------------------

let sum = 0;
arra.forEach((item) => {
  sum += item.mark;
});
// console.log(sum);

//FIND---------------

var findName = arra.find((item) => {
  return item.name === "Bob";
});
// console.log(findName);

var findPlace = arra.find((item) => {
  return item.place === "kannur";
  //find returns the first true element
});
// console.log(findPlace);

//FILTER------------------

var findMark = arra.filter((item) => {
  return item.mark < 30;
  //filter returns a new array
});
// console.log(findMark);

//MAP-------------

var newArr = arra.map((item) => {
  // return item.mark*2
  //returns new array with new elements
  // return item.name +' '+item.place
  //we can use spread operator here also
  return {
    ...item,
    country: "India",
  };
});
// console.log(newArr);

//REDUCE--------------

var findSum = arra.reduce((sum, mark) => {
  return sum + mark.mark;
}, 0);
// console.log(findSum);

var find = arra.reduce((sum, mark) => {
  return mark.mark;
  //if we return like this  the last students mark is printed
}, 0);
// console.log(find);

//NESTED DESTRUCTURING

var object = {
  name: "alice",
  mark: 35,
  place: "kannur",
  subject: {
    teacher: "bob",
  },
};

var {
  subject: { teacher },
} = object;
// console.log(teacher);

//if we jhave a nested array
var array = [
  {
    name: "alice",
    mark: 35,
    place: "kannur",
  },
  22,
  33,
];

var [{ name }] = array;
// console.log(name);

//OOP

//the below example is without class if we have more and more objects then the class becomes useful
//if we have three students then we repeat this code 3 times
//that creates function duplicates and if we want to change one then we have to do all
//so to group same objects reused objects we use class-to obey DRY principle
var student1 = {
  name: "alen",
  yob: 1995,
  getAge: function () {
    return new Date().getFullYear() - this.yob;
  },
};
// console.log(student1.getAge());

class Student {
  name;
  yob;

  constructor(name, yob) {
    this.name = name;
    this.yob = yob;
  }
  // static printMinYob(...args){
  //     var arr=args.map((item=>item.yob));
  //     console.log(Math.min(...arr));
  // }
  getAge() {
    return new Date().getFullYear() - this.yob;
  }
  getName() {
    return this.name;
  }
}
//to make a new object we can use the new keyword 'new'and from where we want
//to make the new object here 'student'

var student1 = new Student("alen", 1990);

var student2 = new Student("bob", 1995);

var student3 = new Student("cook", 1980);

// console.log(student1, student1.getName(), student1.getAge());
// console.log(student2, student2.getName(), student2.getAge());
// console.log(student3, student3.getName(), student3.getAge());
//this does'nt print students name or year of birth here we use constructor
//so we use constructor-see line 311

//STATIC FUNCTION

//if we want to find who has minimun year of birth,we write a function
// function printMinYob(...args) {
//   var arr = args.map((item) => item.yob);
//   console.log(Math.min(...arr));
// }

// printMinYob(student1,student2,student3)
//the printMinYob() takes the student1,2,3 as arguments
//the above can be written as a static function by giving the classname .func

// Student.printMinYob = function (...args) {
//   var arr = args.map((item) => item.yob);
//   console.log(Math.min(...arr));
// };
// Student.printMinYob(student1, student2, student3);
//or we can write static function inside the class by using the keyword static
//see line num-315

//INHERITANCE
//one object trying to access methods and properties of other function
class Button {
  constructor(name) {
    //constructor creates an object
    this.button = document.createElement("button");
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
    //this keyword access the elements in the sameclass
  }
  onClick(fn) {
    this.button.onclick = fn;
  }
}
//we need a green button with all same features but onclick
//the background of the button changes to green
//here inheritance comes to play

class GreenButton extends Button {
  onClick(fn) {
    //here we write a new onclick function
    this.button.onclick = function () {
      this.button.style.background = "green";
      //this is a function call for anonymous function in b1
      //this keyword here calls the elements in b1
      fn(); //function b1
    }.bind(this); //this is the keyword to bind both the
    //above function and b1 function if we don't use this we
    //can't get the functionality
  }
}

// var b1 = new GreenButton("GButton");
// //new keyword also acts as a constructor
// b1.onClick(function () {
//   console.log("clicked");
// });

//PROTOTYPE-is an object that is attached to array,object,function
//before the class concept prototype was mostly used concept
//that object has properties which can be directly accessed
//by a dot operator-eg:arr.__proto__-gives an arr
//arr.__proto.__proto=>an object
//arr.__proto.__proto.__proto=>null
//the same occurs for objects and function
//in js it is said that everything is an object=>whether you make an array,object,
//function down in prototype chain it comes down to being an object
//if we write an object and another object2
//and if we do,which is not advisable to do in coding just to check we write
//(object2.__proto__)=object=>then the object2 points towards the
//object ie we can access properties of object in object2=>inheritance
//for every function there is a property called prototype
//if we want to add a functionality to a constructor function
//then we need to add it after prototype.function,function can be like onclick
//eg:mybutton.prototype.onclick=function(fn){
// this.button.onclick=fn
// }

//ASYNCHRONOUS CALLBACK
//all events are asynchronous where as the util(utility) functions are synchronous
//like forEach ,map, reduce....

//PROMISE-resolve,reject

// console.log("started");

// $.ajax({
//   type: "GET",
//   URL: "https://jsonplaceholder.typicode.com/todos/1",
//   success: (msg) => {
//     console.log(msg);
//   },
//   error: (xhr, statusText) => {
//     console.log(statusText);
//   },
// });
// console.log("ended");
//on passing callback as arguments resolve(calling success msg)
//and reject(calling error msg) runs in the api call itself
//we can't resolve or reject after the call-that is the advantage
//of promise as we register callback inside the promise
//on writing the above as a promise

// console.log("started");

// const pr = myFetch("https://jsonplaceholder.typicode.com/todos/1");

// pr.then(
//   (data) => {
//     // console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// console.log('ended');
//we can give this then statement anywhere we want
//ie we can resolve the callback on a button click or where we tell it to execute
//on fetch actually it saves the data but do not execute till where
//we run it-this is really usefull as in some cases we have to
//do the api call at some place and call it at some other place
//and sometimes we need to call it more than once
//if some error occurs while the program runs ie
//turnoff wifi is an error then the error msg occurs

//how to write promise in a function
//the new promise is a constructer which takes function as an argument

// function myFetch(url) {
//   return new Promise((res, rej) => {
//     $.ajax({
//       type: "GET",
//       url: url,
//       success: function (msg) {
//         res(msg);
//       },
//       error: function (xhr, statusText) {
//         rej(statusText);
//       },
//     });
//   });
// }
//this is how the fetch in js and then would work
//we have these keywords(fetch ,then)

//PROMISE CHAINING

// console.log("Requesting 1");
// const pr1= myFetch("https://jsonplaceholder.typicode.com/todos/1");

// pr1.then((data) => {
//   console.log(data);

//   console.log("Requesting 2");
//   const pr1 = myFetch("https://jsonplaceholder.typicode.com/todos/2");

//   pr1.then((data) => {
//     console.log(data);

//     console.log("Requesting 3");
//     const pr1 = myFetch("https://jsonplaceholder.typicode.com/todos/3");

//     pr1.then((data) => {
//       console.log(data);
//     });
//   });
// });

//then resolves the data
//what if we want to call 3 todos one by one
//this shows a nested callback promise-by this meethod it is hard to
//maintain so instead we use chaining

// console.log("Requesting 1");
// const pr1 = myFetch("https://jsonplaceholder.typicode.com/todos/1");

// const pr2=pr1.then((data) => {
//   console.log(data);
//   return myFetch('https://jsonplaceholder.typicode.com/todos/2')
//   // return 'hello'
// });

// // pr2.then((data)=>{
// //   console.log(data);
// //   //function's(here data) return value(here 'hello') is what the promise resolves(success msg)
// // on fetching data from api the data is stored and promise resolves it when called
// // })
// const pr3=pr2.then((data)=>{
//   console.log(data);
//   return myFetch('https://jsonplaceholder.typicode.com/todos/3')
// })

// pr3.then((data)=>{
//   console.log(data);
// })

//we can drop variables

// console.log("Requesting 1");
// myFetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data);
//     return myFetch("https://jsonplaceholder.typicode.com/todos/2");
//   })
//   .then((data) => {
//     console.log(data);
//     return myFetch("https://jsonplaceholder.typicode.com/todos/3");
//   })
//   .then((data) => {
//     console.log(data);
//   });
//by using js keywors we can rewrite this with fetch(has chaining)
// console.log("Requesting 1");
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data)=>{
//     console.log(data);
//   })
//if all the files in a project are json
//then we don't need to write two chains

// function getJson(url){
//   return fetch(url)
//   .then((data)=>{
//     return data.json();
//   })
// }
// console.log("Requesting 1");
// getJson("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data);
//   })

//CATCH
//it is used for error handling

// console.log("====Requesting 1");
// getJson("https://jsonplaceholder.typicode.com/todos/1")
// //if we have an error then the code on the bottom will not be
// //evaluated
//   .then((data) => {
//     console.log(data);
//     console.log("====Requesting 2");
//     return getJson("https://jsonplaceholder.typicode.com/todos/2");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("====Requesting 3");
//     return getJson("https://jsonplaceholder.typicode.com/todos/3");
//   })
//   .then((data) => {
//     console.log(data);
//   });

//   console.log("====Requesting 1");
// getJson("https://jsonplaceholder.typicodehgjhskj.com/todos/1")
//   .then((data) => {
//     console.log(data);
//     console.log("====Requesting 2");
//     return getJson("https://jsonplaceholder.typicode.com/todos/2");
//   })
//if we have an error function and link it with the catch function the function thinks that error
//is resolved and executes the bottom functions
//if we don't have this no functions below will be evaluated
// .catch((err)=>{
//   console.log('ERROR',err);
// })
// .then((data) => {
//   console.log(data);
//   console.log("====Requesting 3");
//   return getJson("https://jsonplaceholder.typicode.com/todos/3");
// })
// .then((data) => {
//   console.log(data);
// });

//UTIL FUNCTIONS

// const cache=null;
//if like this the cache has no data in it
//then the todos/1 works
//if cache has value

// const cache ={
//   name:'Code Malayalam'
// };

// function getJson(url){

//   if(cache){
// return convertToPromise(cache);
//if we return cache then it wont work so here we create a new function
//convertToPromise in which we return cache and make it work

//so with the keyword we write
// return Promise.resolve(cache)
//we have a functionn Promise.reject
//which gives error as we dont have catch
//so these are two util functions Promise.resolve and
//Promise.reject
//   }

//   return fetch(url)
//   .then((data)=>{
//     return data.json();
//   })
// }

// function convertToPromise(data){
//   return new Promise((res,rej)=>{
//     res(data);
//   });
// }
//instead of the above function convertToPromise js gives us a keyword
//Promise.resolve

// getJson("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data);
//   })

//the next util function is Prtomise.all
//it takes array of promises
//   function getJson(url){

//   return fetch(url)
//   .then((data)=>{
//     return data.json();
//   })
// }

//   Promise.all([
//     getJson("https://jsonplaceholder.typicode.com/todos/1"),
//     getJson("https://jsonplaceholder.typicode.com/todos/2"),
//     getJson("https://jsonplaceholder.typicode.com/todos/3")
//   ])
//   .then((data)=>{
//     console.log(data);
//   })
//the first promise returns first then the second and third
//if order is not a problem and we want everything line by line
//then this is a very  useful function

//next util function is Promise.race
//the output is the promise which is resolved first
//in the above case the first data comes

// function getJson(url) {
//   return fetch(url).then((data) => {
//     return data.json();
//   });
// }

// Promise.race([
//   getJson("https://jsonplaceholder.typicode.com/todos/1"),
//   getJson("https://jsonplaceholder.typicode.com/todos/2"),
//   getJson("https://jsonplaceholder.typicode.com/todos/3"),
// ]).then((data) => {
//   console.log(data);
// });

//keywords-try,catch,finally,throw

// function getVal1() {
//   junk();
  //this creates an error then other codes will not exeute
  //the errors that occuring in js are called 
  //error throwing-which stops execution of other functions
//   return 12;
// }
// function getVal2() {
//   return 22;
// }
// function processValues(d, e) {
//   return d + e;
// }
// console.log("started");

// const d = getVal1();
// const e = getVal2();

// const result = processValues(d, e);
// console.log(result);
// console.log("ended");

//if we have something like this with errors then we write it
//inside try catch block
//the functions which can get errors are written inside 
//try block
//if js throws an error in the try block then the execution comes to 
//the catcch block

// console.log("started");

// let d;

// try{
//   console.log('on try');
//  d = getVal1();
// }

// catch(e){
//   console.log('on catch');
//   gghdvfh();
//  d=0;
//  //here we tell if there is an error the a's value is 0
// } finally{
//   console.log('in finally');
// }
  
// const e = getVal2();

// const result = processValues(d, e);
// console.log(result);
// console.log("ended");

// function getVal1() {
//   console.log('inside getVal1');
//   var obj = undefined;
//   return obj.value;
// }
// function getVal2() {
//   console.log('inside getVal2');
//   return 22;
// }
// function processValues(d, e) {
//   console.log('inside processValues');
//   return d + e;
// }
//here the program starts and goe sto try block and detects error
//in getVal1 then comes to catch block
//and resolves and then executes others
//if no error then does not go to the catch block
//the next keyword is finally
//it comes after try and catch
//in finally we uninitialize some codes
//even if it doesn't go to try block or 
//catch block it will definitely go to the finally block
//ended also prints here if it goes inside catch or not so what does finally do
//if there is an error in catch itself then also finally will print 
//ended will not print in this case-line 746

//throw keyword-js throws error(if like we calls some non called function)
//but throw keyword can be used by us  to throw errors 
//like in line-817
// console.log("started");

// let d, e, result;

// try{
//   console.log('on try');
//  d = getVal1();
// }

// catch(e){
//   //e argument is the argument which comes after throw
//   console.log('on catch');
//  result=0;
//  //here we tell if there is an error the a's value is 0
// } finally{
//   console.log('in finally');
// }
  
//  e = getVal2();
//  result = processValues(d, e);
// console.log(result);
// console.log("ended");

// function getVal1() {
//   console.log('inside getVal1');
 
// }
// function getVal2() {
//   console.log('inside getVal2');
//   throw 'my error'
//   return 22;
// }
// //this shows in console uncaught reference my error
// function processValues(d, e) {
//   console.log('inside processValues');
//   return d + e;
// }

//ASYNC/AWAIT

//async is written when a function is declared 
//ans await when function is called

// async function myfunc(){
//   var a= await getJson()
// }

// async function getValue() {
//  return 12;
//here async returns the return value
// return fetch("https://jsonplaceholder.typicode.com/todos/1")
// }
//but if it is a promise then it returns the data

// const result = getValue();
// result.then((data)=>{
//   console.log(data);
// })

//in fetch and then 

// console.log('started');
// getValue1()
// console.log('ended');

// function getValue1(){
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data)=>{
//     console.log(data);
//   })
// }

//for this o/p comes as started,ended and then the promise 
//in fetch the code is blocked till the data comes

//but in async await the cade waits till the data comes
//js puts a marker in the awit function and executes other
//functions-when data is gained the marker is removed and
//the functions below is executed ie data is printed
//same o/p is returned here also 
console.log('started');
let bb = getValue1()
.then((data)=>{
  console.log(data);
})
console.log('ended');

// async function getValue1(){
//  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//   const jsonData=await data.json()
//     console.log(jsonData);
//     return jsonData;
// }
//error handling can be done by try catch block
async function getValue1(){
  try{
    
    //by putting an error in the apiconst data = await fetch("https://jsonplaceholder.typicodegggh.com/todos/1")
    const jsonData=await data.json()
      return jsonData;
  }
  catch(e){
    console.log('handled');
    return {};
  }
 
 }

 //SELF INVOKING FUNCTIONS
 //this is related to variable scoping problems
 //global scoped variable is accessable from anywhere evenif in a different
 //file or function

 //consider a and b having task to create a
 //button which says hello and prints hello in the console and b 
 //creaates a button red and prints bye


function main(){
  var button=document.getElementById('hello')
  button.style.background='green'
 
 button.onclick=()=>{
   console.log(button.innerHTML);
 }

}
main()

//on combaining two scripts both buttons are created but both
//prints bye in console-as button is in global scope it overwrites the first
//this can be solved by making it local scoped
//now this function is also global scoped so if someone calls main in other scripts
//it is overwritten
//to solve this problem we use
//immediate invokation or self invokation -syntax is different
 
(function(){
  var button=document.getElementById('hello')
  button.style.background='green'
 
 button.onclick=()=>{
   console.log(button.innerHTML);
 }
})();

//IMPORT/EXPORT
