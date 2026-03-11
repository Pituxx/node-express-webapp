require('dotenv').config()

const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

const PORT = process.env.PORT || 3000

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Función para registrar accesos
function registrarAcceso(ruta) {

    const fecha = new Date().toLocaleString()

    const log = `${fecha} - Acceso a ${ruta}\n`

    fs.appendFile('./logs/log.txt', log, (err) => {
        if (err) {
            console.log("Error escribiendo log")
        }
    })
}

// Ruta principal
app.get('/', (req, res) => {

    registrarAcceso('/')

    res.send(`
        <h1>Servidor funcionando 🚀</h1>
        <p>Proyecto Node Express</p>
    `)

})

// Ruta de estado
app.get('/status', (req, res) => {

    registrarAcceso('/status')

    res.json({
        status: "ok",
        message: "Servidor activo"
    })

})

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`)
})