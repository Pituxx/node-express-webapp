const express = require('express')
const router = express.Router()

const { home, status } = require('../controllers/mainController')
const upload = require('../middlewares/upload') 

router.get('/', home)
router.get('/status', status)


router.post('/upload', upload.single('file'), (req, res) => {

 console.log("FILE:", req.file)
 console.log("BODY:", req.body)

 res.json({ file: req.file })

})

module.exports = router