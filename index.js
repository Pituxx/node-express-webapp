require('dotenv').config()

const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3000

const mainRoutes = require('./routes/mainRoutes')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRoutes)

app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})