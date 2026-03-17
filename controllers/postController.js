const { Post } = require('../models')

exports.getPosts = async (req, res) => {

 const posts = await Post.findAll()

 res.json(posts)

}

exports.createPost = async (req, res) => {

 const post = await Post.create(req.body)

 res.json(post)

}