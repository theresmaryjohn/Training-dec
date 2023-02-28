//CALLBACK
console.log("one");
document.getElementById("button").onclick = myfunction;
//on button click the button consoles the argument which is already stored
//and not the argument on the function we pass

function myfunction(arg) {
  console.log(arg);
}
// myfunction(10)
// console.log('two');
//this is a regular function
//when a button is clicked and then the function works it is a callback function
//two types-synchronous and asynchrounous callback
//if we do not call the function after the function is written the on
//button click only it is executed .
//so button click is an asynchronous function
//foreach -synchronous
console.log("one");
const a = [1, 2, 3, 4];
function myFunction(arg) {
  console.log(arg);
}
a.forEach(myFunction);
//here for every element the function calls
console.log("two");

//ARROW FUNCTION
const fn = (val) => {
  console.log("hello world=", val);
  return 19;
};
// fn(19)

const fn1 = function (a, b) {
  return a * b;
};
const fn2 = (a, b) => a + b;

const add = fn2(3, 2);
const mult = fn1(3, 2);

// console.log(add,mult);

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
    console.log(this);
    //this points to the object itself
  },
};
myObj.c(); //here myObj. is the context
//for myObj.c the context is that object
//instead of that if we define a variable for function and call that variable
//then the context for that is not object it is the executing window(parent obj) itself
var aa = myObj.c;
aa();
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
main();
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

console.log(obj1, obj2);

//by spread operator we can manipulate arrays
var arr = [1, 2, 33, 49, 15, 60];
var x = Math.max(...arr);
console.log(x);

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
objFunction();

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
abc();

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
console.log(sum);

//FIND---------------

var findName = arra.find((item) => {
  return item.name === "Bob";
});
console.log(findName);

var findPlace = arra.find((item) => {
  return item.place === "kannur";
  //find returns the first true element
});
console.log(findPlace);

//FILTER------------------

var findMark = arra.filter((item) => {
  return item.mark < 30;
  //filter returns a new array
});
console.log(findMark);

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
console.log(newArr);

//REDUCE--------------

var findSum = arra.reduce((sum, mark) => {
  return sum + mark.mark;
}, 0);
console.log(findSum);

var find = arra.reduce((sum, mark) => {
  return mark.mark;
  //if we return like this  the last students mark is printed
}, 0);
console.log(find);

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
console.log(teacher);

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
console.log(name);

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
console.log(student1.getAge());

class Student {
  name;
  yob;

constructor(name,yob){
    this.name=name;
    this.yob=yob;
}
// static printMinYob(...args){
//     var arr=args.map((item=>item.yob));
//     console.log(Math.min(...arr));
// }
  getAge() {
    return new Date().getFullYear() - this.yob;
  }
  getName(){
    return this.name;
  }

}
//to make a new object we can use the new keyword 'new'and from where we want
//to make the new object here 'student'

var student1=new Student('alen',1990);

var student2=new Student('bob',1995);

var student3=new Student('cook',1980);

console.log(student1,student1.getName(),student1.getAge());
console.log(student2,student2.getName(),student2.getAge());
console.log(student3,student3.getName(),student3.getAge());
//this does'nt print students name or year of birth here we use constructor
//so we use constructor-see line 311

//STATIC FUNCTION

//if we want to find who has minimun year of birth,we write a function
function printMinYob(...args){
    var arr=args.map((item=>item.yob));
    console.log(Math.min(...arr));
}

// printMinYob(student1,student2,student3)
//the printMinYob() takes the student1,2,3 as arguments 
//the above can be written as a static function by giving the classname .func

Student.printMinYob=function(...args){
    var arr=args.map((item=>item.yob));
    console.log(Math.min(...arr));
}
Student.printMinYob(student1,student2,student3)
//or we can write static function inside the class by using the keyword static
//see line num-315

