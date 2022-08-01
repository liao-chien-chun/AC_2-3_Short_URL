const express = require('express')  //載入express
const exphbs = require('express-handlebars') ////載入express-handlebars
const bodyParser = require('body-parser') //載入body-parser 不用下載

const routes = require('./routes') //引用路由器

//引用mongoose連線設定
//Mongoose 連線設定只需要被執行，不需要接到任何回傳參數利用，所以不需要再設定變數
require('./config/mongoose')

const port = 3000
const app = express()

//設定樣版引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs') //啟用樣版引擎

//將請求導入路由器
app.use(routes)
//設定靜態檔案
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})