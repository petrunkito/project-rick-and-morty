const express = require("express")
const routes = express.Router()
const controllerFavorites = require("../../controller/controllerFavorites")

routes.get('/', controllerFavorites.getSeveral)
routes.get(":id", controllerFavorites.getOne)
routes.post("/", controllerFavorites.create)
routes.put("/", controllerFavorites.update)
routes.delete("/:id", controllerFavorites.delete)


module.exports = routes