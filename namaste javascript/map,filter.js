//map()

const arr = [2, 4, 3, 8];

// function double(x){
//     return x*2
// }

// const output=arr.map(double)
// console.log(output);

//filter()-uesd to filter values inside array
//filter out odd values,>4 values ....
// function isOdd(x){
//     return x%2
// }
// const output=arr.filter(isOdd)
// console.log(output);

//reduce()-returns a single value

function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(arr));
//in this same code we can use reduce

const output = arr.reduce(function (acc, current) {
    acc=acc+current;

    return acc
},0);
console.log(output);
//the first argument of the reduce is a function and the second argument
//is the initial value of the accumulator-here 0 is the second argument
//here acc=sum and curr=arr[i]
//to find max value in the array
function findMax(arr) {
    let max = 0;
    for (i = 0; i < arr.length; i++) {
      if(arr[i]>max){
        max=arr[i]
      }
    }
    return max;
  }
  console.log(findMax(arr));

  //reduce
  const outputMax = arr.reduce(function (max, curr) {
    //here acc act as max
    //acc can be called anything,so here we can call acc as max also
    if(curr>max){
        max=curr;
    }

    return max
},0);
console.log(outputMax);


const users=[
    {firstName:'arun', lastName:'joy', age:28},
    {firstName:'akhil', lastName:'john', age:30},
    {firstName:'bibin', lastName:'v', age:28},
];
const outputName=users.map(x=>x.firstName+" "+x.lastName)
console.log(outputName);
//now we need to find who all have same age
//like {28:2,30:1}
//so initial value of acc will be an empty object
const outputAge=users.reduce(function(sameAge,Age){
    //if it reaches 28 then again find 28 ++
  if(sameAge[Age.age]){
    sameAge[Age.age]=++sameAge[Age.age]
  }else{
    sameAge[Age.age]=1
  }
 return sameAge
},{})
console.log(outputAge);


//to find people with age <30

const findNme=users.filter(x=>x.age<30).map(x=>x.firstName);
console.log(findNme);