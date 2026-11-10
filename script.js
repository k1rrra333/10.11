

let requsestUsers = fetch('https://jsonplaceholder.typicode.com/users/',
    {
        method: "GET"
    }
)

requsestUsers
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)

        data.forEach((user) => {
            
            let userCard = document.createElement("div")

            userCard.classList.add("userCard")

            let name = document.createElement("h2")
            name.textContent = user.name

            let email = document.createElement("p")
            email.textContent = user.email

            let city = document.createElement("p")
            city.textContent = user.address.city

            userCard.append(name)
            userCard.append(email)
            userCard.append(city)

            users.append(userCard)
        })
    })
    .catch((error) => {
        console.log(error.message)
    })





let users = document.querySelector(".users")

