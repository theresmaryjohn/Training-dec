const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // const target=counter.getAttribute('data-target')
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText; 
     //it also has to be a number
    //o/p is a string containing the value of attributeName
    //the output of the above is gonna be a string and we need to change it to number
    // console.log(typeof target, target);
    //o/p- string 12000
    // script.js:8 string 7500
    // script.js:8 string 5000
    //to covert this to number just add a plus before
    //unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
const increment=target/200;
console.log(increment);  
//here each data-target is divided by 200 we get
// 60
// script.js:18 37.5
// script.js:18 25
if(c<target){
    counter.innerText=`${Math.ceil(c+increment)}`
    //we need to increment the numbers till target an dnot to stop on first increment
setTimeout(updateCounter,1)//want to wait 1 ms till next count
}
else{
    counter.innerText=target
}
//Math.ceil-rounds the numbers-60,38,25
};
  updateCounter();
});
