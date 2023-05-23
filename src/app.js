import express from 'express'

const app = express()
app.get('/', (req, res) => res.send('<h1>Hola Mundo!</h1>'))

app.listen(8080, () => console.log('Server Up'))