const fs = require('fs')

function registrarAcceso(ruta) {

    const fecha = new Date().toLocaleString()

    const log = `${fecha} - Acceso a ${ruta}\n`

    fs.appendFile('./logs/log.txt', log, (err) => {
        if (err) {
            console.log("Error escribiendo log")
        }
    })
}

exports.home = (req, res) => {

    registrarAcceso('/')

    res.send(`
        <h1>Servidor funcionando 🚀</h1>
        <p>Proyecto Node Express</p>
    `)

}

exports.status = (req, res) => {

    registrarAcceso('/status')

    res.json({
        status: "ok",
        message: "Servidor activo"
    })

}