const express = require('express')
const route = express.Router()
const path = require('path')

route.get('/', (req, res) => {
  const htmlpath = path.join(__dirname, 'public', 'index.html')
  res.sendFile(htmlpath)
})

module.exports = route