const mongoose = require('mongoose')
const Schema = mongoose.Schema //載入mongoose的Schema

//建立一個Schema
const shortenerSchema = new Schema({
  originalURL: {
    type: String,
    required: true
  },
  // shortURL: {
  //   type: String,
  //   required: true
  // }
})

//匯出
//mongoose.model 會複製我們定義的Schema並編譯成一個可供操作的model物件
//匯出的時候我們這份model命名為Shortener
//以後在其他檔案直接使用Shortener就可以操作和代辦事項有關的資料了！
module.exports = mongoose.model('Shortener', shortenerSchema)