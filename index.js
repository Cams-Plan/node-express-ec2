import express from 'express';

const app = express();

const port = 3001

app.listen(port, () => console.log('Your API is up and running on port 3001'))

app.get('/', (req, res) => res.json('Bingo! Your API is up and running 🐐✅'))

app.get('/howto', (req, res) => res.json("🌐 Search 'https://github.com/Cams-Plan/node-express-ec2' to learn how to deploy your api using AWS"))
