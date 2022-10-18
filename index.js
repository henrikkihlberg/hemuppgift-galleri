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
        const html = data.photos.photo.map(image => {
            return `
                <div class="image">
                    <p>
                        <img src="https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg" />
                    </p>
                </div>
            `
        })
        console.log(html)
        document.querySelector("#image_carousel").insertAdjacentHTML("afterbegin", html)
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