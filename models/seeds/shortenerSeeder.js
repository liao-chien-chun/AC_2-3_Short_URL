const Shortener = require('../shortener') //載入Shortener model

//引用 mongoose 連線設定
const db = require('../../config/mongoose')

//成功
db.once('open', () => {
  console.log('add Seed data')
  Shortener.create({
    originalURL: 'https://www.facebook.com/meeric.tony/',
    shortURL: 'http//localhost:3000/123AB'
  })
  console.log('done')
})