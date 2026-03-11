const express = require('express')
const router = express.Router()

const { home, status } = require('../controllers/mainController')

router.get('/', home)
router.get('/status', status)

module.exports = router