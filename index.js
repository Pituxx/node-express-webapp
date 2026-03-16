require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

const sequelize = require('./config/database')

const mainRoutes = require('./routes/mainRoutes')

const userRoutes = require('./routes/userRoutes')

app.use(express.json())
app.use('/api', userRoutes)

const logger = require('./middlewares/logger')

app.use(logger)

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRoutes)

sequelize.sync()
 .then(() => {
  console.log("Base de datos conectada")
 })
 .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})