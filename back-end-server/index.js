require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const { 
    getUserTrails, 
    createTrail, 
    getBst,
    getEr,
    getGm
} = require('./controller.js')

const bp = require('body-parser')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

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
app.get('/js2', (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/page2.js'))
})




//Get and Post Requests for Buttons webpage.html
app.get('/bst-trail', getBst)
app.get('/gm-trail', getGm)
app.get('/er-trail', getEr)
app.post('/create-trail', createTrail)

//Get Request for Buttons page2.html
app.get('/all-trails', getUserTrails)


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})