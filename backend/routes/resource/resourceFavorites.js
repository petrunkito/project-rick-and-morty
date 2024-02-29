const express = require("express")
const app = express()
const controllerFavorites = require("../../controller/controllerFavorites")

app.get('/', controllerFavorites.getSeveral)
app.get(":id", controllerFavorites.getOne)
app.post("/", controllerFavorites.create)
app.put("/", controllerFavorites.update)
app.delete("/:id", controllerFavorites.delete)
