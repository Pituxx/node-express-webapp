const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.login = async (req, res) => {

 const { email, password } = req.body

 try {

  const user = await User.findOne({ where: { email } })

  if (!user) {
   return res.status(404).json({ error: 'Usuario no existe' })
  }

  if (user.password !== password) {
   return res.status(400).json({ error: 'Contraseña incorrecta' })
  }

  const token = jwt.sign(
   { id: user.id },
   process.env.JWT_SECRET,
   { expiresIn: '1h' }
  )

  res.json({ token })

 } catch (error) {
  res.status(500).json({ error: error.message })
 }

}