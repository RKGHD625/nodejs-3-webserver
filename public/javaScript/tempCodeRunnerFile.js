
fetch('http://localhost:3000/help').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})