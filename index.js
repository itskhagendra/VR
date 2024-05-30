const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
let images = [
    "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg",
    "https://t4.ftcdn.net/jpg/05/68/06/93/360_F_568069372_X1vDTdjtvKbVLOEegIPZZrIorrHlQc7R.jpg",
    "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg"
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get("/image", (req, res) => {
    let intg = randomIntFromInterval(0, images.length)
    console.log("ping")
    res.send({image:images[intg]})
})
app.get("/video", (req, res) => {
    let intg = randomIntFromInterval(0, images.length)
    console.log("ping")
    res.send({video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"})
})

app.listen(8000, () => {
    console.log("api running")
})