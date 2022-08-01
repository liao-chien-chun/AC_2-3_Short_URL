const express = require('express')
const router = express.Router()

// 引用Shortener model
const Shortener = require('../../models/shortener')

router.get('/', (req, res) => {
  Shortener.find()
    .lean()
    .sort({ _id: 'asc' })  //排列
    .then(shorteners => res.render('index', { shorteners }))
    .catch(err => console.log(err))
})

module.exports = router