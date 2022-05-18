
let cards = []
isAlive = false
hasBlackJack = false
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Peter",
    Chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.Chips


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

 function renderGame(){
     cardsEl.textContent ="Cards: "
     for (let i = 0; i < cards.length; i++){
         cardsEl.textContent += cards[i] + " "
     }
sumEl.textContent ="Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw new card?"
        isAlive = true
    }else if (sum === 21) {
        message = "you've got a Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)    
    renderGame()
    }
}





