const express = require("express")
const routes = express.Router()

const home = require("./resource/home.js")
const favorites = require("./resource/favorites.js")
const page404 = require("./resource/page404")

routes.get("/", home)
routes.get("/favorites", favorites)
routes.use(page404)

module.exports = routes
