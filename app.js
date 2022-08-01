const express = require('express')  //載入express
const exphbs = require('express-handlebars') ////載入express-handlebars

const routes = require('./routes') //引用路由器

const port = 3000
const app = express()

//設定樣版引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs') //啟用樣版引擎

//將請求導入路由器
app.use(routes)


app.listen(port, () => {
  console.log(`server is running on localhost:${port}`)
})