// unshift and shift are push and pop from the front of the array
// push and pop are for the back of the array

let cards=[]
let sum=0
let hasblackJack=false
let isAlive=false
console.log(sum)
let messageEl=document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")


let player={
     name:"Per",
     chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function getRandomCard(){
    let o=Math.floor(Math.random()*13)+1
    if(o===1){
        return 11
    }
    else if(o>10){
        return 10
    }
    return o
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
    function renderGame(){
        cardsEl.textContent="Cards: "
        for(let i=0;i<cards.length;i++){
            cardsEl.textContent+=cards[i]+" "
            }
            sumEl.textContent="Sum:"+ sum
        if(sum < 21){
            message="Do you want to draw a new card"
        }
        else if(sum===21){
            message="You've got blackjack"
            hasblackJack=true
        }
        else {
        message="You're out of the game"
        isAlive=false
        }
        messageEl.textContent=message
        console.log(messageEl)
    }
function newcard(){
    console.log("Drawing a new card from the deck")
    if(isAlive && !hasblackJack){
    let card=getRandomCard()
    sum+=card 
    cards.push(card)
    renderGame()
    }
}