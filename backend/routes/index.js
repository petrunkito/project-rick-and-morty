/**
 * este archivo es el que funciona como orquestador, cuando se desea agregar mas de un recurso
 * en este caso solo tenemos a 'favorites'
 */


//useremos express y la funcion Router() para manejar las rutas de la Api
const express = require("express")
const routes = express.Router()

const resourceFavorites = require("./resource/resourceFavorites")

routes.use("/favorites", resourceFavorites)


module.exports = routes