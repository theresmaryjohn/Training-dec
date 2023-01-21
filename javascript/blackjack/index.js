
//let firstCard=10
let firstCard=getRandomCard()//functions get hoisted
//let secondCard=11
let secondCard=getRandomCard()
//now we need to store all the cards we have in one place so that the gamerenders out all the cards we have
//here we use array
let cards=[firstCard,secondCard]//central way of storing all cards
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=""
let messageEl=document.getElementById('message-el')
//let sumEl=document.getElementById('sum-el')//instead of getelementbyid we can use the queryselector but give #element in bracket to tell the queryselector it is an id
let sumEl=document.querySelector('#sum-el')
let cardsEl=document.getElementById('cards-el')
//so we create a fuction to getRandomCard(),that always returns 5. ie for the firstCard,secondcard and newCard we give the function getRandomCard

//now we have to add name and dollers gained by the player
//as the player and playerchips are related to each other we put both of them together in an Object

let player= {
name:"Per",
chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips

//function getRandomCard(){
    //// return 5//random numbers can be created with math.random() function
//randomDigit=Math.floor(Math.random()*13)+1
//return randomDigit
//}//randomness is necessary in card games,dice and almost all games.bitcoin,cybercell all uses random numbers
// in blackjack game ace is worth 11 and J,K,Q is worth 10
//ie ,if we get a 1 return 11
//and if we get 11-13 return 10
function getRandomCard(){
    let randomDigit=Math.floor(Math.random()*13)+1
    if(randomDigit===1){
    return 11
}
    else if(randomDigit===13){
        return 10
    }
    else{
        return Math.floor(Math.random()*13)+1
    }

}

function startGame(){
    renderGame()
}

function renderGame(){
    if(sum<=20){
        message='Do you want to draw a new card?'
    }
    else if(sum===21){
        message="Wohoo!You've got Blackjack"
        hasBlackJack=true
    }
    else  {
        message="You're out of Blackjack"
        isAlive=false
    }
    messageEl.textContent=message
    sumEl.textContent='Sum:' + sum
    //cardsEl.textContent='Cards:'+cards[0]+' '+cards[1]
    //now we use a for loop to render the cards
    cardsEl.textContent='Cards: '
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+" "
    }
}

// function newCard(){
//     console.log('Drawing a new card from the deck');
//     //now we have to really take a new card add to the sum and added to page
//     //let card=7
//     let card=getRandomCard()
//     sum+=card
//     cards.push(card)
//     renderGame()//startGame doesn't make sense as the game already started we use renderGame
// }
// //as we have hard-coded the new card value everytime we click new card it comes up as 7 here and for the first acrd ans second card also we have the hard-code value
// //see line 14
function newCard(){
    //only allow the player to get a new card if she is alive and does not have a blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
    
}