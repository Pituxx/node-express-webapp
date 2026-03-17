const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

 const token = req.headers.authorization

 if (!token) {
  return res.status(401).json({ message: "Token requerido" })
 }

 try {

  const decoded = jwt.verify(token, "secretkey")

  req.userId = decoded.id

  next()

 } catch (error) {

  res.status(401).json({ message: "Token inválido" })

 }

}