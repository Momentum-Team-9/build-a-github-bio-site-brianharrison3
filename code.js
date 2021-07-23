const root = document.getElementById('root')

fetch('https://api.github.com/users/brianharrison3')
.then(res => res.json())
.then(data =>     {

    const login1label = document.createElement('p')
    login1label.innerText = "Look me up!!"
    const login1 = document.createElement('h2')
    login1.innerText = data.login
    root.appendChild(login1label)
    root.appendChild(login1)

         const labelname = document.createElement('h6')
        const firstlast = document.createElement('h4')
        labelname.innerText = "Name :"
        firstlast.innerText = data.name
        root.appendChild(labelname )
        root.appendChild(firstlast)

        const labelbio = document.createElement("h5")
        labelbio.innerText = "About me"
        const bio = document.createElement('h3')
        bio.innerText = data.bio
        root.appendChild(labelbio)
        root.appendChild(bio)






    







//     fetch(data.repos_url)
//     .then(res => res.json())
//     .then (repos => {

// for (repo of repos){
// const reposs = document.createElement('h4')
// reposs.innerText = repo.name
// root.appendChild(reposs)
//     }

//     } )

} )




  






