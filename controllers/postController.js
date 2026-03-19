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

  const { title, content, userId } = req.body

  if (!title || !content || !userId) {
   return res.status(400).json({ error: "Faltan campos obligatorios" })
  }

  const post = await Post.create(req.body)

  res.status(201).json(post)

 } catch (error) {
  res.status(500).json({ error: error.message })
 }
}

exports.updatePost = async (req, res) => {
 try {
  const post = await Post.findByPk(req.params.id)

  if (!post) {
   return res.status(404).json({ message: "Post no encontrado" })
  }

  await post.update(req.body)

  res.json(post)

 } catch (error) {
  res.status(500).json({ error: error.message })
 }
}

exports.deletePost = async (req, res) => {
 try {
  const post = await Post.findByPk(req.params.id)

  if (!post) {
   return res.status(404).json({ message: "Post no encontrado" })
  }

  await post.destroy()

  res.json({ message: "Post eliminado" })

 } catch (error) {
  res.status(500).json({ error: error.message })
 }
}