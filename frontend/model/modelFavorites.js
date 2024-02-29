const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    status: {type: String, required: true},
    species: {type: String, required: true},
    type: {type: String, required: true},
    gender: {type: String, required: true},
    image: {type: String, required: true},
    url: {type: String, required: true},
    created:{type: Date, default: Date.now()}
})

const ModelFavorites = new mongoose.model('Favorites',Schema)
module.exports = ModelFavorites