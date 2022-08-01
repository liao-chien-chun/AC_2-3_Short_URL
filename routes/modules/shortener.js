const express = require('express')
const router = express.Router()

router.post('/shortener', (req, res) => {
  console.log()
  res.render('new')
})

module.exports = router