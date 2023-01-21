

// let count=0;
// count+=1;
// console.log(count);

//initialize count to 0
//click  on increment button(onclick="func")
//increment the count when button is clicked
//change count-el in html to reflect the new count
 //body of function which is excecuted everytime the function is called
// function increment() {
//    console.log("The button was clicked")
// }
// function countdown(){
//     console.log(42);//say function has countdown
   
// }
// countdown()//tells to do so

//  let lapsCompleted=0
//  function countLaps(){
//     lapsCompleted=lapsCompleted+1;
    
//  }
//  countLaps()
//  console.log(lapsCompleted);


// let countEl= document.getElementById("count-el")
// console.log(countEl);//here we store the html id element count-el
//  let count=0;
//  function increment(){
//     console.log("clicked");
//     count+=1;
//     countEl.innerText=count;//specify the change
//     console.log(count);
//  }
let saveEl=document.getElementById('save-el')
let countEl=document.getElementById("count-el")//grab the count-el elememt and store it in a countEl variable
let count=0;
function increment(){
       count+=1;
    countEl.innerText=count;//set countEl's innerText to count
  console.log(count);
 }
function save(){
    let info=count+" - ";
    saveEl.textContent += info;//on using innerText the spaces are hidden and does not come through.So we use textContent instead of that
    countEl.textContent=0;
    count=0
    console.log(info);//logs out the count
}
// let username="per"
// let message="You have three new notifications"

// console.log(message+','+username); 
// let username='Tessa';
// let greeting='Hi, my name is';
// let myGreeting=greeting +' ' + username;
// // console.log(myGreeting);
// let welcomeEl = document.getElementById("welcome-el")

// let username = "Per Harald Borgen"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + username

// welcomeEl.innerText+=" Glad you are back"

 

