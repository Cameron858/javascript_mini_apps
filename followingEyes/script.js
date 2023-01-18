const numberOfEyes = 10
const topOffset = 5
const sideOffset = 5

spawnEyes()
document.addEventListener("mousemove", oneMouseMove)

function spawnEyes() {
    
    for (let i = 0; i < numberOfEyes; i++) {
        var eye = createEye(i)
        document.body.appendChild(eye)
    }
}

function oneMouseMove(event) {

    /// 215, 915
    /// 680, 915

    const xOffset = 93
    const yOffset = 62
    
    var mouseX = event.clientX
    var mouseY = event.clientY

    const eyes = document.querySelectorAll(".eye")
    eyes.forEach(eye => {
        var offset = eye.getBoundingClientRect()

        var eyeX = Math.round(offset.x) + xOffset
        var eyeY = Math.round(offset.y) + yOffset
    
        var dx = eyeX - mouseX
        var dy = eyeY - mouseY
        
        var angleRads = Math.atan2(dy, dx);
        var angleDegs = (angleRads * 180) / Math.PI

        eye.style.transform = `rotate(${angleDegs + 180}deg)`
    })
}

function createEye(eyeID) {
    const eye = document.createElement("img")

    eye.id = `eye-${eyeID}`
    eye.src = "eye.png"
    eye.className = "eye"

    eye.style.position = "absolute"
    eye.style.left = `${getRandomPosition(sideOffset)}%`
    eye.style.top = `${getRandomPosition(topOffset)}%`
    
    return eye
}

function getRandomPosition(offset) {
    return Math.floor(Math.random() * 50)
}