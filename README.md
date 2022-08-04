# Shortener URL 短網址產生器

## 介紹

可以將很長的網址轉換成簡短的網址

## 功能

* 把輸入的網址轉換成短網址
* 點擊按鈕可以一鍵複製網址
* 如果該網址已經轉換過，傳入一樣的網址會回傳一樣的短網址
* 使用者沒有輸入就按下送出會跳轉的錯誤提示頁面

## 環境與套件版本

* node.js v16.15.1
* Express v4.18.1
* body-parser v1.20.0
* express-handlebars v6.0.6
* mongoose v6.5.0
* nodemon v2.0.19
* MongoDB

## 如何使用

1. 確認有node.js 與npm
2. 將專案下載到本地
3. 下載完畢後，使用終端機進入資料夾然後輸入:
  ```properties
    npm install
  ```
4. 修改資料庫連線設定，改成您個人的資料庫
5. 都安裝修改完後輸入：
  ```properties
    npm run dev
  ```
6. 終端機看見，代表專案順利運行，即可以在網頁輸入localhost:3000進入網頁
  ```properties
     server is running on localhost:3000
  ```
7. 要暫停伺服器
  ```properties
     control + C
  ```
   