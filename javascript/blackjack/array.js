//Intro to arrays-ordered lists of items
let featuredPosts = ["Checkout my Netflix clone", "Here's code for my project", "I've relaunched my portfolio"]
//arrays are 0 indexed
console.log(featuredPosts.length);//o/p=3
//any datatypes can be put into an array 
let myData=["Theres", 27, true]
console.log(myData[2]);
//to add a new element at hte end of the array we use the method push
let cards=[7,4]
cards.push(2)
console.log(cards);
let messages=["Hey,how's it going","I'm great,thanks.And you?","All good."]
let newMessage="Same here!"
messages.push(newMessage)
console.log(messages);
messages.pop(newMessage)//removes the last element
console.log(messages);
messages.shift()//removes first element
console.log(messages);
//Counting in Javascript for loop
//count to ten
// START          FINISH     STEP SIZE
for( let count=10; count<21;  count+=1){//count var can be used again as it only works fo rthis curly braces of the for loop
    console.log(count);
}
for(let i=10; i<101; i+=10){
    console.log(i);
}
//if we put a limit to i each time we add a new element in an array we need to change the finish value. Instead of that we can simply give the finish value of i is i<array.length property which then counts till the length of the array
let card=[7,3,9,10]
for(let i=0; i<card.length; i++){
    console.log(card[i]);
}
//For loops,arrays and DOM
let sentence=["Hello", "my", "name" ,"is","Per"]
let greetingsEl=document.getElementById("greeting-el")
for(let i=0; i<sentence.length; i++){
    //greetingsEl.textContent=sentence[i]//it only gives the o/p per as it clears out each word each time
    greetingsEl.textContent+=sentence[i]+" "//as we need to keep the previous result each time we just add a plus
}//to add spaces in between if not provided we concatenate the array with space(empty quotes)
//now we should learn how to return random values to the function 
let player1Time=102
let player2Time=107
function getFastestRaceTime(){
    if (player1Time<player2Time){
        return player1Time
    } else if(player2Time<player1Time){
        return player2Time
    }
    else{
        return player1Time//anyone can be returned as the time of both are same
    }//if we do not ereturn anything in a function the o/p shows undefined

}
let fastestRace=getFastestRaceTime()
console.log(fastestRace);


