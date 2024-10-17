

const dices = new Array('./images/dice1.avif', 
                        './images/dice2.avif', 
                        './images/dice3.avif', 
                        './images/dice4.avif', 
                        './images/dice5.avif', 
                        './images/dice6.avif')

const body = document.querySelector('body')
const endText = document.querySelector('.end-text')
const buttonEndGame = document.querySelector('.button-end-game')
const diceImageOnGameField = document.querySelector('.dice')
const rollDiceButton = document.querySelector('.roll-dice')
const newGameButton = document.querySelector('.new-game')
const leaveCountButton = document.querySelector('.leave')


const randomNumberOnDice = function (dices){
    let randomDice = dices[Math.floor(Math.random() * dices.length)]
    return randomDice
}


const changeDiceImageOnGameField = function(numberOnDice){  
    diceImageOnGameField.src = numberOnDice
}


const game = {

    changeActivePlayer: function(){
        if(activePlayer === player1){
            activePlayer = player2
        }
        else{
            activePlayer = player1
        }
        return activePlayer
    },

    checkEndGame: function(){
        if (activePlayer.resaultCount.innerHTML >= 10){
            endText.style.display = 'block'
            endText.innerHTML = `Вы победили`
            buttonEndGame.style.display = 'block'
            buttonEndGame.addEventListener('click', () => {
                location.reload()
            })
        }

    },

    checkUnit: function(numberOnDice){
        if (numberOnDice === './images/dice1.avif'){
            activePlayer.currentCount.innerHTML = 0
            game.changeActivePlayer()
        }
    }

}


const player = {
    
    rollDice: function(){
        let numberOnDice = randomNumberOnDice(dices)
        changeDiceImageOnGameField(numberOnDice)
        let count = 0
        switch(numberOnDice){
            case('./images/dice1.avif'):
            count += 1
            break
            case('./images/dice2.avif'):
            count += 2
            break
            case('./images/dice3.avif'):
            count += 3
            break
            case('./images/dice4.avif'):
            count += 4
            break
            case('./images/dice5.avif'):
            count += 5
            break
            case('./images/dice6.avif'):
            count += 6
            break
        }
        this.currentCount.innerHTML = Number(this.currentCount.innerHTML) + count
        game.checkUnit(numberOnDice)
    },

    leaveCount: function (){
        this.resaultCount.innerHTML = Number(this.resaultCount.innerHTML) + Number(this.currentCount.innerHTML)
        this.currentCount.innerHTML = 0
    },

    beginNewGame: function(){
        newGameButton.addEventListener('click', () => {
            location.reload()
        })
    }
}

const player1 = {
    currentCount: document.querySelector('.count-player1'),
    resaultCount: document.querySelector('.player-1').childNodes[3],
    __proto__: player,
}

const player2 = {
    currentCount: document.querySelector('.count-player2'),
    resaultCount: document.querySelector('.player-2').childNodes[3],
    __proto__: player,
}

let activePlayer = player1

rollDiceButton.addEventListener('click', () => {
    activePlayer.rollDice()
})

leaveCountButton.addEventListener('click', () =>{
    activePlayer.leaveCount()
    game.checkEndGame()
    game.changeActivePlayer()
})

newGameButton.addEventListener('click', () => {
    activePlayer.beginNewGame()
})
