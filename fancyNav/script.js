const navLinks = document.querySelectorAll(".nav-item")

navLinks.forEach(element => {
    element.addEventListener("click", event => {
        navLinks.forEach(link => {
            link.classList.remove("selected")
        })
        element.classList.add("selected")
    })
})