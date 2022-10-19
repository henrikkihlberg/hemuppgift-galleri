const buttons =  document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

const fetchRivers = () => {
    fetch('https://hemuppgift-api-wopwb5vhiq-lz.a.run.app/rivers')
    .then(response => {
        // console.log(response)
        if (!response.ok) {
            throw Error('ERROR')
        }
        return response.json()
    })
    .then(data => {
        console.log(data.photos)
        data.photos.photo.forEach(image => {
            document.querySelector("#rivers_carousel").insertAdjacentHTML("afterbegin",
            `
                <li class="slide">
                    <img src="https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg" alt="River Image" />
                </li>
            `
            )
        })
       
    })
    .catch(error => {
        console.log(error)
    })
}
fetchRivers()

const fetchForests = () => {
    fetch('https://hemuppgift-api-wopwb5vhiq-lz.a.run.app/forests')
    .then(response => {
        // console.log(response)
        if (!response.ok) {
            throw Error('ERROR')
        }
        return response.json()
    })
    .then(data => {
        console.log(data.photos)
        data.photos.photo.forEach(image => {
            document.querySelector("#forests_carousel").insertAdjacentHTML("afterbegin",
            `
                <li class="slide">
                    <img src="https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg" alt="River Image" />
                </li>
            `
            )
        })
       
    })
    .catch(error => {
        console.log(error)
    })
}
fetchForests()

const fetchMountains = () => {
    fetch('https://hemuppgift-api-wopwb5vhiq-lz.a.run.app/mountains')
    .then(response => {
        // console.log(response)
        if (!response.ok) {
            throw Error('ERROR')
        }
        return response.json()
    })
    .then(data => {
        console.log(data.photos)
        data.photos.photo.forEach(image => {
            document.querySelector("#mountains_carousel").insertAdjacentHTML("afterbegin",
            `
                <li class="slide">
                    <img src="https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg" alt="River Image" />
                </li>
            `
            )
        })
       
    })
    .catch(error => {
        console.log(error)
    })
}
fetchMountains()

const fetchNature = () => {
    let loader = `<div>Loading random picture...</div>`
    document.getElementById('random-picture').innerHTML = loader
    fetch('https://hemuppgift-api-wopwb5vhiq-lz.a.run.app/nature')
    .then(response => {
        // console.log(response)
        if (!response.ok) {
            throw Error('ERROR')
        }
        return response.json()
    })
    .then(data => {
        const pictures = data.photos.photo
        // console.log(pictures)
        const randomPicture = Math.floor(Math.random() * pictures.length)
        const randomPictureCode = `
        <img src="https://live.staticflickr.com/${pictures[randomPicture].server}/${pictures[randomPicture].id}_${pictures[randomPicture].secret}.jpg" alt="Random Image" class="random-picture-image"/>
        <div class="random-picture-description">${pictures[randomPicture].title}</div>
    `
        // console.log(pictures[randomPicture].id)
        document.getElementById("random-picture").innerHTML = randomPictureCode
    })
    .catch(error => {
        console.log(error)
        let randomPictureError = `<div>Failed to fetch random picture. Error : ${error}</div>`
        document.getElementById("random-picture").innerHTML = randomPictureError
    })
}
fetchNature()