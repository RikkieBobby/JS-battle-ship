const shipsContainer = document.querySelector('#ships-container')
const flipButton = document.querySelector('#flip-button')
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

flipButton.addEventListener('click', flipFunc)