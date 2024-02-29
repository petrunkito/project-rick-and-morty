/**
 * este archivo se encargara de servir el archivo html 'home.html' a travez de streams,
 * recibiendo asi el navegor la informacion
 */

let fs = require('fs')
let paths = require("../../paths.js")

let home = async (req, res)=>{
    try{
        //buscamos la ruta del archivo para servirlo por partes al cliente
        let home = fs.createReadStream(`${paths.pages}/home/home.html`)
        //lo envia como respuesta
        return home.pipe(res)
    }catch(err){
        return res.status(500).json({ok:false, message:"ocurrio un error con el servidor"})
    }
}

module.exports = home
