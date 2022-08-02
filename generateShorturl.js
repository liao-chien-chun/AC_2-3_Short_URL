function generateShortUrl () {
  let newUrl = ''

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '1234567890'
  //把可能會用到的字母跟數字存在一個變數字串
  const collection = lowerCaseLetters + uperCaseLetters + number
  
  for (let i = 0; i < 5; i++) {
    newUrl += collection[Math.floor(Math.random() * collection.length)]
  }
  
  const shortUrl = myApp + newUrl
  return shortUrl
}

module.exports = generateShortUrl

