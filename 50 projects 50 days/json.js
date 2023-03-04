//in a client server model data tranfer is done in a wat that everyone undersatnds
//the format-popular is JSON
//JSON -is language independent
//JSON was first created for js so the formats are similar to js but can
//be used in all languages
//to convert to json -we need to convert the data to string


//consider an object 

var e={
    name:'code malayalam',
    age:1,
    topic:['js','React','git','aws'],
    caption:'keep calm'
};

//to convert this to JSON
 var jsonE=`
 {
    'name':'code malayalam',
    'age':1,
    'topic':['js','React','git','aws'],
    'caption':'keep calm'
}`;

//this can be then converted to any format 

//Also we can use js library to convert an object to json

var jsonE=JSON.stringify(e)

//back to object

var obj=JSON.parse(jsonE)

//for java JSON is converted to java object

//REGULAR EXPRESSIONS
//regular expression returns an object 
//they are written inside forward slashes

const regexp=/cat/;
const result=regexp.test('cat')
//to test both are same

console.log(result);

//equality

//primitives comparision if same will be true-values 
//are compared but for non-primitives references are compared

//Mutation
var a={
    name:'code malayalam'
};

var b=a;
//here both will be true on comparison

b.name='namaste js'

console.log('a=',a);
console.log('b=',b);
//for both the output will be namaste js
//this is variable mutation

//all primitives are immutable,they cannot be altered
//values in the reference,if a new value comes then a new reference
//is created for the new value

//join

const elements=['fire','water','air'];

console.log(elements.join())
console.log(elements.join('_'))

//forEach

const array1=['a','b','c']

array1.forEach(element=>console.log(element))