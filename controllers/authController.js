const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('../models')

exports.login = async (req, res) => {

 const { email, password } = req.body

 const user = await User.findOne({ where: { email } })

 if (!user) {
  return res.status(404).json({ message: "Usuario no encontrado" })
 }

 const validPassword = await bcrypt.compare(password, user.password)

 if (!validPassword) {
  return res.status(401).json({ message: "Password incorrecta" })
 }

 const token = jwt.sign(
  { id: user.id },
  "secretkey",
  { expiresIn: "1h" }
 )

 res.json({ token })

}