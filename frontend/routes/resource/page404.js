let fs = require('fs')
let paths = require("../../paths.js")

let page404 = async (req, res)=>{
    try{
        let page404 = fs.createReadStream(`${paths.pages}/404/404.html`)
        return page404.pipe(res)
    }catch(err){
        return res.status(500).json({ok:false, message:"ocurrio un error con el servidor"})
    }
}

module.exports = page404
