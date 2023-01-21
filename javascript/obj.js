let person={
    name:"Per",
    age:35,
    country:"Norway"
}
function logData(){
    console.log(person.name+" is "+person.age+" years old and lives in "+person.country);
}
logData()

//returing a random item from array
let hands=["rock", "paper", "scissor"]
function getHand(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand());


