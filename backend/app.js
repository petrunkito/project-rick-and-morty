/**
 * este archivo contendra la configuracion inicial del proyecto, como la creacion del servidor, 
 * la opcion de mostrar la api, el manejo de CORS
 */

//express para crear rutas, middleware y mas
const express = require("express")
//http para crear el servidor
const http = require("http")
//cors para permitir el acceso a ciertor origines
const cors = require("cors")
//este es nuestro orquestador, que contiene cada ruta de la api(en este caso solo tiene un recurso que es "favorites")
const routes = require("./routes/index")
//el origen que tiene permitido acceder a la api
const origin = require("./config/whiteList").url

//establecemos la conexin con la base de datos
require('./model/dbConection')()

//creamos nuestro servidor
const app = express()
const server = http.createServer(app)

//express recomienda desabilitar la cabecera 'x-powered-by'
app.disable("x-powered-by");
//configuramos el puerto que usara express
app.set("port", process.env.PORT || 3000)

//en las options de cors, establecemos cual sera el origen
const corsOptions = {
    origin:origin
}

app.use(cors(corsOptions))
//analiza las solicitudes entrates en JSON
app.use(express.json())
//habilitamos nuestra api
app.use("/api", routes)

module.exports = {app, server}




