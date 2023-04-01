const button = document.querySelector("form")

// listen to the subtmit event call a function
button.addEventListener("submit", (event)=>{
    event.preventDefault()
    //console.log("hello")

    const input = document.querySelector("input#searchByID")

    //console.log(input.value)

    // fetch the data from the server
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(res => res.json())
    .then(data => {
        const title = document.querySelector("section#movieDetails h4")
        const summary = document.querySelector("section#movieDetails p")

        title.innerText = data.title
        summary.innerText = data.summary
    })
})
    



//select the submit button element 
    //listen to click event and invoke the fetch function
    //create a display function 
    //DOM manipulation inside the display function

