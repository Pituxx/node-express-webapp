require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

const sequelize = require('./config/database')

const mainRoutes = require('./routes/mainRoutes')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')

const logger = require('./middlewares/logger')

app.use(express.json())

app.use(logger)

app.use('/api', userRoutes)
app.use('/api', postRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRoutes)

sequelize.sync({ force: true })
 .then(() => {
  console.log("Base de datos conectada")
 })
 .catch(err => console.log(err))

app.listen(PORT, () => {
 console.log(`Servidor iniciado en puerto ${PORT}`)
})