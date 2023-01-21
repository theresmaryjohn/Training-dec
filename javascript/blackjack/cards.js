//we dont want to generate cards at first itself itshould be generated atbthe start game function

//let firstCard=getRandomCard()
//let secondCard=getRandomCard()
//let cards=[firstCard,secondCard]
//let sum=firstCard+secondCard
let cards=[]
sum=0
let hasBlackJack=false
let isAlive=false
let message="" 
let messageEl=document.getElementById('message-el')
let sumEl=document.querySelector('#sum-el')
let cardsEl=document.getElementById('cards-el')

function getRandomCard(){
    let randomDigit=Math.floor(Math.random()*13)+1
    if(randomDigit===1){
    return 11
}
    else if(randomDigit>10){
        return 10
    }
    else{
        return randomDigit
    }

}

function startGame(){
    isAlive=true
    //generate two random numbers
    //Re-assign the cards and sum variables so that the game can start
    let firstNum=getRandomCard()
    let secondNum=getRandomCard()
    cards[firstNum,secondNum]
    sum=firstNum+secondNum
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
    //sumEl.textContent='Sum:' + sum
   // cardsEl.textContent='Cards: '
    //for (let i=0; i<cards.length; i++){
      //  cardsEl.textContent+=cards[i]+" "
    //}
}

function newCard(){
    //only allow the player to get a new card if she is alive and does not have a blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }
    
  
}