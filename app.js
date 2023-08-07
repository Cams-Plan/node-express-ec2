const express = require('express')

const app = express()

app.get('/', (req, res) => res.json('Bingo! Your API is up and running 🐐✅'))

app.get('/howto', (req, res) => res.json("🌐 Search 'https://github.com/Cams-Plan/node-express-ec2' to learn how to deploy your api using AWS"))

app.post('/:login', (req, res) => {
    
})

module.exports = app
