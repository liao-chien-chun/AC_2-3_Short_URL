const express = require('express')
const router = express.Router()

//引入創造短網址函式
const generateShortUrl = require('../../generateShorturl')

// 引用Shortener model
const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
  res.render('index')
})


router.post('/', (req, res) => {
  const newUrl = req.body.url
  Shortener.find()
    .lean()
    .then(url => {                         //url是一個陣列
      const urlData = url.filter
      (data => 
        // console.log(data.originalURL)
        // console.log(newUrl)
        data.originalURL === newUrl
      )
      res.render('new', { url: urlData[0] })
    })  
  
})

router.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  const url = 'http://localhost' + shortURL
  console.log(req.headers.host)

  Shortener.findOne({ url })
    .then(data => {
      if(!data) {
        return res.render('error')
      }
      res.redirect(data.originalURL)
    })
    .catch(err => console.log(err))
})

module.exports = router