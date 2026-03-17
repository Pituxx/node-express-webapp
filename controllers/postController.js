const Post = require('../models/Post')

exports.getPosts = async (req, res) => {

 try {

  const posts = await Post.findAll()

  res.json(posts)

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}

exports.createPost = async (req, res) => {

 try {

  const post = await Post.create(req.body)

  res.json(post)

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}