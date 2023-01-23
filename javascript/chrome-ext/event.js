//practice writing event listeners
let boxEL=document.getElementById('box-el')
boxEL.addEventListener('click', function(){//when clickes what has to be triggered here the function
    console.log('I want to open the box');
})


//practice for let and const
//rule for using let or const is that-if possible use const.If not , use let
//ie for eg consider the blackjack game
const playerName="Per"
let credits=45
//her ethe player is always same but the credits for him changes over the game
//so it is not possible to make it a const function so we use let

//finding which of the below variables should be changed to let or const
let basePrice=520
let discount=120
let shippingCost=12
let shippingTime="5-12 days"
//shipping is a bit more complex
shippingCost=15
shippingTime="5-12 days"
//full price
let fullPrice=basePrice-discount+shippingCost
//notifying
console.log("Total Cost:"+fullPrice+".it will arrive in"+shippingTime);
//here w ecan change the basePrice and discount to const and also full price 

//use .innerHTML to render a Buy! button inside the div container
let container=document.getElementById('container')
//now we need to render a paragraph under the button(in the container)
//that says "Thank youfor buying"
container.innerHTML="<button onclick='buy()'>Buy!</button>"
function buy(){
    container.innerHTML+="<p> Thank you for buying</p>"
}
//template strings/literals
//benefit of template strings are that you can break it into multiple lines
const recipient="james"
const sender="tony"
//const email="Hey"+recipient+"!how's it going? cheers Per"
const email=`Hey${recipient}!how's it going? cheers ${sender}`
console.log(email);

//truthy and falsy values in js
//falsy values are
//false
//0
//""
//null-signalise emptiness-how a developer signalizes emptiness
//undefined-signalise emptiness-how JS signalises emptiness
//NaN


//function to greet anyone entering
// const welcomeEl=document.getElementById("welcome-el")
// function greetUser(){
//     welcomeEl.textContent="Welcome,Per"
// }
// greetUser()//this only greets one person for all we have to add name
const welcomeEl=document.getElementById("welcome-el")
function greetUser(name){
    welcomeEl.textContent=`Welcome,${name}`
}
greetUser("Jay")//arguments (always outside)

//for numbers
function add(num1, num2){
    return num1+num2
}
add(3,4)