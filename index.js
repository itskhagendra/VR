const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT | 8000;
const app = express()
app.use(cors())
app.use(express.json())
const Data = [
    {
        Name:"Big Buck Bunny",
        Image:"https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg",
        Video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        is360:false

    },
    {
        Name:"Elephant Dream",
        Image:"https://t4.ftcdn.net/jpg/05/68/06/93/360_F_568069372_X1vDTdjtvKbVLOEegIPZZrIorrHlQc7R.jpg",
        Video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        is360:false

    },
    {
        Name:"Bigger Blazes",
        Image:"https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg",
        Video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        is360:false
    }   
    
]
const status = {
    status:200,
    timestamp:new Date()
}

// app.get("/image", (req, res) => {
//     let intg = randomIntFromInterval(0, images.length)
//     console.log("ping")
//     res.send({image:images[intg]})
// })
app.get("/health",(req,res)=>{
    res.status(200).send(status);
})
app.get("/video", (req, res) => {
    let intg = randomIntFromInterval(0, images.length)
    console.log("ping")
    res.send({video:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"})
})
app.get("/v1/data",(req,res)=>{
    res.status(200).send(Data);
})

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
// exports.api = functions.https.onRequest(app);