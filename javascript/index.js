import { capitalizeString } from "./expfuc";

var myVar=87;
myVar+=1;
console.log(myVar);
var myStr="I am a \"double quoted\" string";
console.log(myStr);
var str='firstline\n\t\\secondline\nthirdline'
console.log(str);
var firstnamelength=0;
var firstname='Beau';
firstnamelength=firstname.length;
console.log(firstnamelength);
var firstletteroffirstname="";
firstletteroffirstname=firstname[0];
console.log(firstletteroffirstname);
var myarray=[18,19,10];
myarray[1]=28;
console.log(myarray);
var ourarray=[[1,2,3],[4,6,8],[12,13,0],[[10,9,22],17,28]];
var mydata=ourarray[3][0][1];
ourarray.push("happy","joy");
console.log(ourarray);
console.log(mydata);
var removefromourarray=ourarray.pop();
console.log(ourarray);
var removedfromourarray=ourarray.shift();
console.log(ourarray);
function ourfunctionwithargs(a,b) {
    console.log(a-b);
}
ourfunctionwithargs(10,5)
function minusseven(num) {
    return num-7;
    
}
console.log(minusseven(10));
var changed=0;
function change(num) {
    return (num+5)/3;
}
changed=change(10);
console.log(changed);
function nextinline(arr,item) {
    arr.push(item);
    return arr.shift();//first item shifted ie,1
    
}
var testarr=[1,2,3,4,5];
console.log("before:"+JSON.stringify(testarr));
console.log(nextinline(testarr,6));//here 6 is the item in the function 6 is first pushed so after the test array has 6
console.log("after:"+JSON.stringify(testarr));//so after shifting 1 is eliminated
function trueOrFalse(isthattrue) {
    if (isthattrue) {
        return "Yes, it is true"
    }
    return "No, it is false"
}
console.log(trueOrFalse(false));
function testEqual(a,b) {
    if (a==b) {
        return "equal"
    }
    return "not equal"
}
console.log(testEqual(10,"10"));//here we use equality operator so the string 10 is also change dto number
//if we use strict equality operator === then it returns not equal
function testElseIf(val) {
    if(val>10){
        return "greater than 10";
    }else if(val<5){
        return "smaller than 5"
    }else{
        return "Between 5 and 10"
    }
}
console.log(testElseIf(7));

function switchOfStuff(val) {
    var answer="";
    switch (val) {
        case "a":
            answer ="apple"
            break;
        case "b":
            answer ="bird"
            break;
            case"c":
            answer ="cat"
            break;
        default:
            answer="stuff"//if not set then for other values the result comes as an empty string
            break;
    }
    return answer;
}
console.log(switchOfStuff("c"));
function isLess(a,b) {
    return a<b;
}
console.log(isLess(10,15));
var ourDog={
    "name":"Ben",
    "legs":4,
    "color":"black",
    "tail":1
};

var dogName=ourDog.name;
var dogColor=ourDog.color;
console.log(dogName);


var myArray=[];
var i=0;
while (i<5){ //iterate using while loop
    myArray.push(i);
    i++;
}
console.log(myArray);

//iterate with for loop
var ourArray=[];
for (var i=0; i<6; i++){
    ourArray.push(i)
}
console.log(ourArray);
//iterating even numbers
var array=[];
for(var i=0; i<20; i+=2){
    array.push(i);
}
console.log(array); 

var numArray=[9,10,11,12]
var ourTotal=0;
for(var i=0;i<numArray.length;i++){
    ourTotal +=numArray[i];//takes the indexed position of array and add ie,9+10+11+12
}
console.log(ourTotal);
//find product
function multiplyAll(arr){
    var product=1;
    for(var i=0; i<arr.length; i++){//i represents outer array
        for(j=0; j< arr[i].length;j++)//j represents inner array
        product *= arr[i][j];
    }
    return product;
}
var product=multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

var mineArray=[];
var i=10;
while (i<5) {//here i is not less than 5 so it is not gonna do anything
    mineArray.push(i);
    i++;
}
console.log(i,mineArray);//started as i=10 and  empty array

var miArray=[];
var i=10;
do{
    miArray.push(i);//first it runs loop then check condition as it is false it breaks out of the loop
    i++;//first pushed 10 to array then increment to 11 then check condition failed ie 11[10]
}while (i<5) //do loop is run atleast once before it checks the condition
console.log(i,miArray);
//parseInt
function convertStrgtoInt(str){
 return parseInt(str)
}
console.log(convertStrgtoInt("34")); 
//Binary to Int
function converttoInt(str){
    return parseInt(str,2)//base 2 says its binary
   }
   console.log(converttoInt("10011")); 

   //ternary operator-changing the if else statement ie,condition? statement-if-true:satement-if-false
     function checkEqual(a,b){
        //return a===b? true:false;
        return a===b;//this does the same
     }
     console.log(checkEqual(1,2)); 
//arrow fuction
var concat=(arr1,arr2)=>arr1.concat(arr2);
console.log(concat([1,2],[3,4,5]));

const increment=(function(){
    return function increment(number,value=1){
        return number+value;
    };//pass two arguments one with value 2 and other with 1
})();
console.log(increment(5,2));//here value is passed in so 2
console.log(increment(5));//here no value so 1
 
const sum=(function () {
    return function sum(x,y,z){//this toatlly returs above
        const args=[x,y,z];
        return args.reduce((total,curr)=>total+curr,0);//this returns in the above fuction
    };
    

})();//the first fuction is called itself;
console.log(sum(1,2,3));
//or with the rest operator 
const add=(function(){
    return function add(...args){
        return args.reduce((a,b)=> a+b, 1);
    };
} )();
console.log(add(1,2,3));
//spread operator
const arr1=['jan', 'feb', 'mar', 'apr', 'may'];
let arr2;
(function(){
    arr2=[...arr1];//spread operator-contents of arr1 is spred out or copied
    
})();
console.log(arr2);
//Template literals(``)
const person={
    name:"zodiac hashbro",
    age:56
};
const greeting=`Hello,my name is ${person.name}!I am ${person.age} years old.`;
console.log(greeting);
//class keyword
class SpaceShuttle{
    constructor(targetPlanet){//creates and initializes an object instance of a class
        this.targetPlanet=targetPlanet
    }
}
var zeus=new SpaceShuttle('Jupiter');//it makes the this variable point to the newly created object
console.log(zeus.targetPlanet);


class Book{
    constructor(author){
        this.author=author;
    }
}
var pen=new Book('Robert')
console.log(pen.author);
//getter and setter
function makeClass(){
    class Thermostat{
        constructor(temp){
            this.temp=5/9*(temp-32);
        }
        get temperature(){
            return this.temp;
        }
        set temperature(updatedTemp){
            this.temp=updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat=makeClass();
const thermos=new Thermostat(76);
let temp=thermos.temperature;
thermos.temperature=26;
temp=thermos.temperature;
console.log(temp);

