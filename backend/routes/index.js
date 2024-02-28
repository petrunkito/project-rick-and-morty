const express = require("express")
const routes = express.Router()
const resourceFavorites = require("./resource/resourceFavorites")

routes.use("/favorites", resourceFavorites)


module.exports = routes