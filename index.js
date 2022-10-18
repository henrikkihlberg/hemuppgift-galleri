console.log('HEJSAN')

const setCookie = () => {

}

const fetchImages = () => {
    fetch('http://localhost:3000/images')
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
            document.querySelector("#image_carousel").insertAdjacentHTML("afterbegin",
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
fetchImages()



const loop = (data) => {
    const gallery = document.createDocumentFragment()

    data.map()
}

// var imageLibrary

// fetch('http://localhost:3000/images')
// .then((response) => response.json())
// .then((data) => imageLibrary = data.photos.photo)
// .then(() => console.log(imageLibrary))

// imageLibrary.photos.photo?.[1]

// let loop = imageLibrary.map((image) => {
//     console.log(image)
// })