function showQuestion(questionNumber) {
    var qID = "question" + questionNumber
    console.log(qID);
    document.getElementById(qID).style.display = "block"
}

function isUserBirthday() {
    document.getElementById("birthday").style.display = "block"
}


function isNotUserBirthday() {
    document.getElementById("notBirthday").style.display = "block"
}

function reset() {
    document.getElementById("question1").style.display = "none"
    document.getElementById("question2").style.display = "none"
    document.getElementById("question3").style.display = "none"
    document.getElementById("birthday").style.display = "none"
    document.getElementById("notBirthday").style.display = "none"
}