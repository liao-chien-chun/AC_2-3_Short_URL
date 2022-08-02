function generateShortUrl () {
  let shortUrl = ''

  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const uperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '1234567890'
  //把可能會用到的字母跟數字存在一個變數字串
  const collection = lowerCaseLetters + uperCaseLetters + number
  
  for (let i = 0; i < 5; i++) {
    shortUrl += collection[Math.floor(Math.random() * collection.length)]
  }
  
  return shortUrl
}

module.exports = generateShortUrl

