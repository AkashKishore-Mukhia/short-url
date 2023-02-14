const mongoose = require('mongoose')
const {Schema, model} = mongoose


const url = new Schema({
  id: String,
  longUrl: String
})

const uriModel = model('Url', url)

module.exports = uriModel