const express = require('express')
const router = express.Router()
const shortUniqueId = require('short-unique-id')
const uriModel = require('../models/modelUrl')

const baseUrl = 'spotless-suit-foal.cyclic.app'

router.post('/', async (req, res) => {
  try{
    const {longUrl} = req.body
    const cheack = await uriModel.findOne({longUrl: longUrl})
    if(cheack != null) {
      return res.status(200).json({shortUrl: `${baseUrl}/${cheack.id}`})
    } 
    const uid = new shortUniqueId()
    const id = uid(6)
    const doc = new uriModel({
      id: id,
      longUrl: longUrl
    })
    await doc.save()
    return res.status(200).json({shortUrl: `${baseUrl}/${id}`})

  }catch(e) {
    console.error(e)
    return res.send(err.messege)
  }
})



router.get('/:shortId', async (req, res) => {
  try {
    const shortId = req.params.shortId
    const id = await uriModel.findOne({id: shortId})
    
    res.redirect(id.longUrl)
    
  } catch (error) {
    console.error(error)
  }
})


module.exports = router