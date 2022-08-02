const { urlencoded } = require('body-parser')
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
  const url = req.body.url
  Shortener.findOne({ originalURL: url })
    .then(data => {
      if (data) {
        console.log('此網址已存在')
        res.render('exist', { shortURL: data.shortURL, originalURL: data.originalURL })
      } else {
        console.log('此網址不存在')
        Shortener.create({
          originalURL: url, shortURL: 'http://localhost/' + generateShortUrl() })
          .then(() => res.render('new', { originalURL: url, shortURL: 'http://localhost/' + generateShortUrl() }))
      }
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