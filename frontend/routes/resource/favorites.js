/**
 * este archivo se encargara de servir el archivo html 'favorites.html' a travez de streams,
 * recibiendo asi el navegor la informacion
 */

let fs = require('fs')
let paths = require("../../paths.js")


let favorites = async (req, res)=>{
    try{
        //buscamos la ruta del archivo para servirlo por partes al cliente
        let favorites = fs.createReadStream(`${paths.pages}/favorites/favorites.html`)
        //lo envia como respuesta
        return favorites.pipe(res)
    }catch(err){
        return res.status(500).json({ok:false, message:"ocurrio un error con el servidor"})
    }
}

module.exports = favorites
