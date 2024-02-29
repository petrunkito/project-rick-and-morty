/**
 * este archivo se encargara de servir el archivo html 'page404.html' a travez de streams,
 * recibiendo asi el navegor la informacion
 */

let fs = require('fs')
let paths = require("../../paths.js")

let page404 = async (req, res)=>{
    try{
        //buscamos la ruta del archivo para servirlo por partes al cliente
        let page404 = fs.createReadStream(`${paths.pages}/404/404.html`)
        //lo envia como respuesta
        return page404.pipe(res)
    }catch(err){
        return res.status(500).json({ok:false, message:"ocurrio un error con el servidor"})
    }
}

module.exports = page404
