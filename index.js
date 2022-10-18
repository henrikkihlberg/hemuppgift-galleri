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
    fetch('http://localhost:3000/rivers')
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
    fetch('http://localhost:3000/forests')
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
    fetch('http://localhost:3000/mountains')
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
    fetch('http://localhost:3000/nature')
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
        // console.log(pictures[randomPicture].id)
        document.querySelector("#random-picture").insertAdjacentHTML("afterbegin",
            `
            <p>
                <img src="https://live.staticflickr.com/${pictures[randomPicture].server}/${pictures[randomPicture].id}_${pictures[randomPicture].secret}.jpg" alt="Random Image" />
            </p>
                <div class="random-picture-description">${pictures[randomPicture].title}</div>
            `
        )       
    })
    .catch(error => {
        console.log(error)
    })
}
fetchNature()