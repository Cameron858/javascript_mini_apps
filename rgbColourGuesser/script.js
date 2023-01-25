init()

function init() {
    createGameBoard()
    var selectedBlockIndex = pickRandomBlock();
    var selectedBlock = document.getElementById(
        `block-${selectedBlockIndex["row"]}-${selectedBlockIndex["column"]}`
    )
    document.getElementById("colour-to-guess").innerHTML = selectedBlock.style.backgroundColor
}


function createGameBoard() {
    let gameBoard = document.getElementById("game-board")

    for (let rowNumber = 0; rowNumber < 3; rowNumber++) {

        // create row element
        var row = document.createElement("div")
        row.id = `row-${rowNumber}`
        row.className = "row"

        // populate with game cubes
        for (let columnNumber = 0; columnNumber < 3; columnNumber++) {
            var block = document.createElement("div")
            block.id = `block-${rowNumber}-${columnNumber}`
            block.className = "block"

            block.style.backgroundColor = randomRGBColour()
            block.addEventListener("click", checkCorrectBlock)

            row.appendChild(block)
        }

        // add row to game board
        gameBoard.appendChild(row)
    }
}

function randomRGBColour() {
    var red = Math.floor(Math.random() * 255)
    var green = Math.floor(Math.random() * 255)
    var blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}

function pickRandomBlock() {
    var row = Math.floor(Math.random() * 3)
    var column = Math.floor(Math.random() * 3)
    return {
        row: row,
        column: column
    }
}

function checkCorrectBlock(event) {
    var blockID = event.target.id
    var block = document.getElementById(blockID)
    var correctRGB = document.getElementById("colour-to-guess").innerHTML

    if (block.style.backgroundColor === correctRGB) {
        alert("You win!")
        resetGame()
    } else {
        alert("Wrong block!")
        block.style.opacity = "25%"
    }
}

function resetGame() {
    let gameBoard = document.getElementById("game-board")
    gameBoard.innerHTML = ""
    init()
}