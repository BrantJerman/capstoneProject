const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})