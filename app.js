const express = require('express')
const gamesList = require('./gameRecom')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => res.status(200).send('Bingo! Your API is up and running 🐐✅'))

app.get('/howto', (req, res) => res.json("🌐 Search 'https://github.com/Cams-Plan/node-express-ec2' to learn how to deploy your api using AWS"))

app.get('/games', (req, res) => {
    try {
        res.status(200).send('Game Recommendations')
    } catch (error) {
        next(error)
    }
})

app.post('/games', (req, res) => {
    const newRecomm = req.body
    newRecomm['timestamp'] = new Date()
    newRecomm['id'] = gamesList.length
    gamesList.push(newRecomm)
    FileSystem.writeFile('./gameRecom.json', JSON.stringify(gamesList), (error) => {
        if (error) {
            res.status(500).send('Failed to add a game recommendation')
        } else {
            res.status(200).send(newRecomm)
        }
    })

})

module.exports = app
