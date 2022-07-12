require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const {seed, getUserTrails, createTrail, getBst} = require('./controller.js')

// HEROKU
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/webpage.html'))
})
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/styles.css'))
})
app.get('/new-page', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/page2.html'))
})
app.get('/new-page/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/page2.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/index.js'))
})


//Seeding for Postgres
app.post('/seed', seed)

//Get Requests for Buttons
app.get('/bst-trail', getBst)
app.get('/gm-trail', getGm)
app.get('/er-trail', getEr)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})