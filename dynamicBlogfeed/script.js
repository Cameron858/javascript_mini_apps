const input = document.getElementById("blog-content-input")
const button = document.getElementById("blog-content-btn")
const list = document.getElementById("blog-feed")


button.addEventListener("click", () => {
    console.log(input.value);
    if (input.value === "") {
        alert("You must enter text")
        return;
    }

    let blogPost = document.createElement("div")

    blogPost.innerText = input.value
    blogPost.classList.add("blog-post")

    list.appendChild(blogPost)
})