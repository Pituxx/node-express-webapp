require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

const sequelize = require('./config/database')

const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')

const logger = require('./middlewares/logger')


app.use(express.json())
app.use(logger)
app.use('/api', userRoutes)
app.use('/api', postRoutes)
app.use('/api', authRoutes)
app.use('/', mainRoutes)
app.use('/uploads', express.static('uploads'))
app.use(express.static(path.join(__dirname, 'public')))



sequelize.sync()
 .then(() => {
  console.log("Base de datos conectada")
 })
 .catch(err => console.log(err))

app.listen(PORT, () => {
 console.log(`Servidor iniciado en puerto ${PORT}`)
})