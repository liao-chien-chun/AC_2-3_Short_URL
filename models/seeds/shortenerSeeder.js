const Shortener = require('../shortener') //載入Shortener model

//引用 mongoose 連線設定
const db = require('../../config/mongoose')

//成功
db.once('open', () => {
  console.log('add Seed data')
  for (let i = 1; i < 6; i++) {
    Shortener.create({ url: `url-${i}`})
  }
  console.log('done')
})