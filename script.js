

const activePlayer = 'player1'
const dices = new Array('./images/dice1.avif', 
                        './images/dice2.avif', 
                        './images/dice3.avif', 
                        './images/dice4.avif', 
                        './images/dice5.avif', 
                        './images/dice6.avif')

const diceImageOnGameField = document.querySelector('.dice')
const rollDiceButton = document.querySelector('.roll-dice')
const newGameButton = document.querySelector('.new-game')
const leaveCountButton = document.querySelector('.leave')
const relutCountPlayer1 = document.querySelector('.player-1').childNodes[3]
const relutCountPlayer2 = document.querySelector('.player-2').childNodes[3]


const player = {
    
    currentCount: 0,
    resultCount: 0,

    rollDice: function(){

    },

    leaveCount: function (){

    },

    beginNewGame: function(){
        newGameButton.addEventListener('click', () => {
            location.reload()
        })
    }
}

const player1 = {
    __proto__: player,
}

const player2 = {
    __proto__: player,
}
