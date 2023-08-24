const gameArea = document.querySelector('#game-area')
const shipsContainer = document.querySelector('#ships-container')
const flipButton = document.querySelector('#flip-button')



// Function which runs a if else statement which targets the children of the 'ships-container', 
// when the flipButton event listener is clicked it calls the flipFunc which rotates the ships 90 degrees and back when clicked again
let angle = 0 
function flipFunc() {
    const shipOptions = Array.from(shipsContainer.children)
    if (angle === 0) {
        angle = 90
    } else {
        angle = 0
    }
        shipOptions.forEach(shipOption => shipOption.style.transform = `rotate(${angle}deg)`)
}

const width = 20
function createGameBoard(user) {
    const gameBoard = document.createElement('div')
    gameBoard.classList.add('game-board')
    gameBoard.style.backgroundColor = 'black'
    gameBoard.id = user

    for (let i = 0; i < width * width; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.id = i
        gameBoard.append(block)
    }

    gameArea.append(gameBoard)
}


createGameBoard('player')
createGameBoard('computer')

flipButton.addEventListener('click', flipFunc)