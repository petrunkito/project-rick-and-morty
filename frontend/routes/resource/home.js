let fs = require('fs')
let paths = require("../../paths.js")
// console.log("puta madre")

let home = async (req, res)=>{
    try{
        let home = fs.createReadStream(`${paths.pages}/home/home.html`)
        return home.pipe(res)
    }catch(err){
        return res.status(500).json({ok:false, message:"ocurrio un error con el servidor"})
    }
}

module.exports = home
