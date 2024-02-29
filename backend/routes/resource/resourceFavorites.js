/**
 * este archivo contendra cada uno de los metodos disponible para la api
 */

//para el manejo de rutas y verbos http
const express = require("express")
const routes = express.Router()
//obtenemos el controlador del recurso 'favorites'
const controllerFavorites = require("../../controller/controllerFavorites")

//este middleware nos ayudara a validar la creacion de un nuevo personaje
const fieldsValidation = require("../../middleware/validationCreateFavorites")
//este middleware nos ayudara a la validacion de un personaje existente en la base de datos
const validationExistence = require("../../middleware/existenceValidationFavorites")

//obtiene a todos los personajes de la base de datos
routes.get('/', controllerFavorites.getAll)
//obtiene a un personaje de la base de datos
routes.get(":id", validationExistence, controllerFavorites.getOne)
//agregamos o creamos un nuevo personaje
routes.post("/", fieldsValidation, controllerFavorites.create)
//actualizamos la informacion de un personaje
routes.put("/", validationExistence, controllerFavorites.update)
//eliminamos a un personaje de la base de datos
routes.delete("/:id", validationExistence, controllerFavorites.delete)

module.exports = routes  