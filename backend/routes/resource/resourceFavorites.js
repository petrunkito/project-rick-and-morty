const express = require("express")
const { controller } = require("../../controller/controllerFavorites")
const app = express()
const shortcut = require("../../shortcut").controller
const controllerFavorites = require(shortcut+"/controllerFavorites")

app.get('/', controllerFavorites.getSeveral)
app.get(":id", controllerFavorites.getOne)
app.post("/", controllerFavorites.create)
app.put("/", controllerFavorites.update)
app.delete("/:id", controllerFavorites.delete)
