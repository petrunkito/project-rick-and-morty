/**
 * este archivo sera el encargado de manejar las rutas de la aplicacion
 */

//useremos express y la funcion Router() para manejar las rutas para servir los archivo html
const express = require("express")
const routes = express.Router()

//estos middlewares se encargaran de servir su respectiva pagina html
const home = require("./resource/home.js")
const favorites = require("./resource/favorites.js")
const page404 = require("./resource/page404")

//servimos la pagina de inicio
routes.get("/", home)
//servimios la pagina de favoritos
routes.get("/favorites", favorites)
//si la pagina no se encuentra, mostramos la pagina 404
routes.use(page404)

module.exports = routes
