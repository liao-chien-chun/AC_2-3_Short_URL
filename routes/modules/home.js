const express = require('express')
const router = express.Router()

// 引用Shortener model
const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const URL = req.body.URL
  Shortener.findOne({ originalURL: URL })
    .then(url => { 
      if(url) {
        console.log('此網址已經存在')
        return res.render('new')
      } else {
        console.log('此網址不存在')
        return Shortener.create({ originalURL: URL })
          .then(() => res.redirect('/'))
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

module.exports = router