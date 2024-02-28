const mongoose = require('mongoose')
const config = require('../config/db.config.json').local
const MONGO_URL = process.env.MONGO_URL || `mongodb://${config.local.host}/${config.local.db}`

async function init() {
    //?nos conectamos a la base de datos
    mongoose.connect(MONGO_URL)

    //?se ejecutara cuando se conecte a la base de datos
    mongoose.connection.on('connected', function () {
        console.log('connected to the database. --> : ' + MONGO_URL)
    })
    //?se ejecutara cuando halla algun error en la conexion
    mongoose.connection.on('error', function (err) {
        console.log('failed to connect to database: ' + err)
        mongoose.connection(MONGO_URL)//?si ocurrio un error al tratar de conectar a la base de datos lo volvemos a intentar
    })
    //?se ejecutara cuando la base de datos se sierre o desconecte
    mongoose.connection.on('disconnected', function () {
        console.log('disconnected from the database.')
    })

    //?este evento se ejecuta cuando usamos Ctrl + C, cerrando la conexion de la base de datos y cerrando el proceso
    process.on('SIGINT', async function () {
        //?cerramos la conexion de la base de datos y si es exitoso, se cierra el proceso de nodejs
        await mongoose.connection.close()
        console.log('Disconnected from the database when the app is terminated')
        process.exit(0)
    })
}

module.exports = init