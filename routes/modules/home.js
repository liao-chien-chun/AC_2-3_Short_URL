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
        //若網址已存在會導向已存在頁面
        //會去資料庫找資料然後回傳一樣的縮址
        console.log('此網址已存在')
        res.render('exist', { shortURL: data.shortURL, originalURL: data.originalURL })
      } else {
        //資料不存在則新增原本網址與創造縮址並存進資料庫
        const shortUrl = 'http://localhost:3000/' + generateShortUrl()
        console.log('此網址不存在')
        Shortener.create({
          originalURL: url, shortURL: shortUrl })
          .then(() => res.render('new', { originalURL: url, shortURL: shortUrl }))
      }
    })

})


//複製縮網址後，直接在瀏覽器搜尋的路由
//運用params的方式取得後五碼亂碼網址
//加上http://localhost:3000/ 存到url裡面
//去資料庫找資料，資料存在則導向原網址
router.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  const url = 'http://localhost:3000/' + shortURL

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