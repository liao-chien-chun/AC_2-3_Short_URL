//總路由器
const express = require('express')
const router = express.Router()

//引入home 程式碼模組
const hmoe = require('./modules/home')
//將網址結構 符合 / 字串的 request 導向home 模組
router.use('/', hmoe)

//引入 shortener模組
const shortener = require('./modules/shortener')
router.use('/url', shortener)

//匯出
module.exports = router