const express = require('express')
const path = require('path')
const cors = require('cors')
require.dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/webpage.html'))
})

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/page2.html'))
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})