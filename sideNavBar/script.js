const numberOfIcons = 5

init()

function init() {
    populateNavBar()
}

function populateNavBar() {
    var navBar = document.getElementById("nav-bar")

    for (let i = 0; i < numberOfIcons; i++) {
        var icon = document.createElement("div")

        icon.innerHTML = randomCharacter()
        icon.id = i
        icon.className = "nav-icon"
        icon.addEventListener("click", addSelectedClass)

        navBar.appendChild(icon)
    }
}

function randomCharacter() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return chars[Math.floor(Math.random() * chars.length)]
}

function addSelectedClass(event) {
    var parent = document.getElementById(event.target.parentNode.id)
    this.classList.add("selected")

    for (var child of parent.children) {
        if (child.id != event.target.id) {
            child.classList.remove("selected")
        }
    }
}