function checkUsersGuess() {

    var answer = generateRandomAnswer()
    console.log(answer);

    var userGuess = getUsersGuess()

    if (userGuess === answer) {
        document.getElementById("guess-hint").innerHTML = `You win!`
    } else if (userGuess < answer) {
        document.getElementById("guess-hint").innerHTML = `Your guess was ${getSynonym()} too low!`
    } else if (userGuess > answer) {
        document.getElementById("guess-hint").innerHTML = `Your guess was ${getSynonym()} too high!`
    }
}

function generateRandomAnswer() {
    return Math.floor(Math.random() * 11)
}

function getUsersGuess() {
    return parseInt(document.getElementById("user-guess").value)
}

function getSynonym() {
    var words = ["slightly", "way", "somewhat", "marginally", "imperceptibly", "kind of"]
    return words[Math.floor(Math.random() * words.length)]
}