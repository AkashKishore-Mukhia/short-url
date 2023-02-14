const express = require('express')
const home = require('./Routes/home')
const url = require('./Routes/url')
const connectDb = require('./config/db')

const PORT = 5000;
const app = express()

// midddlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

connectDb()
app.use('/url', url)
app.use('/', home)

app.listen(PORT, () => {console.log('server is listening')})

