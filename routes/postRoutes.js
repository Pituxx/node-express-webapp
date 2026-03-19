const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')

router.get('/posts',auth, getPosts)
router.post('/posts', auth, createPost)
router.put('/posts/:id', auth, updatePost)
router.delete('/posts/:id',auth, deletePost)

module.exports = router