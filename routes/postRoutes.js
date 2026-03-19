const express = require('express')
const router = express.Router()

const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

module.exports = router