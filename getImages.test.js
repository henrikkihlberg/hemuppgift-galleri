import { JSDOM } from "jsdom"

const getImages = require('./index.js')

const dom = new JSDOM()

beforeAll(() => {
    global.fetch = () => Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
            photos : {
                photo: [
                    {
                        id: "52386635554",
                        server: "65535",
                        secret: "9ec34b72f1"
                    }
                ]
            }
        })
    })
    global.document = dom.window.document
    global.window = dom.window
})

test('Fetch test', function () {
    getImages().catch(error => {
        console.log(error)
    })
})