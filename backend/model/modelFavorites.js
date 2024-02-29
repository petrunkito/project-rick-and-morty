//este archivo contendra el modelo de la coleccion

//mongoose nos ayudara a crear el esquema de los datos
const mongoose = require("mongoose")


const Schema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },//'id' sera de tipo numero, requerido y unico(no se repetira en la coleccion)
    name: { type: String, required: true},//'name' sera de tipo string y requerido
    status: {type: String, required: true},//'status' sera de tipo string y requerido
    species: {type: String, required: true},//'species' sera de tipo string y requerido
    type: {type: String, default: ""},//type sera de tipo string pero no requerido
    gender: {type: String, required: true},//'gender' sera de tipo string y requerido
    image: {type: String, required: true},//'image' sera de tipo string y requerido
    url: {type: String, required: true},//'url' sera de tipo string y sera requerido
    created:{type: Date, required:true}//'create' sera de tipo string y sera requerido
}, 
//con la propiedad 'capped' especificamos que la coleccion solo almacenara 10 usuarios con un tamaño de 5mb
{ capped: { size: 5000000, max: 10} })

//establecemos el nombre de la coleccion y pasamos el Schema
const ModelFavorites = new mongoose.model('Favorites',Schema)
module.exports = ModelFavorites