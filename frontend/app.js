/**
 * este archivo contendra la configuracion inicial del proyecto, como la creacion del servidor, 
 * disponer las paginas de la aplicacion
 */

const express = require("express")//para la construccion de la api
const http = require("http")//para crear nuestro servidor
const pages = require('./routes/index')

//creamos el servidor
let app = express()
let server = http.Server(app)

app.disable('x-powered-by');//desactivamos la cabecera "x-powered-by", para evitar que los atacantes sepan que usa express, e  iniciar ataques con destinos específicos.
app.use(express.static(`${__dirname}/public`))//aqui servimos los archivos publicos
app.set("port", process.env.PORT || 5050)//vemos que puerto usaremos
app.use(pages)//servimos las paginas

module.exports = {server, app}



