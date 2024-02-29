const modelFavorites = require('../model/modelFavorites')

const controllerFavorites = {}

controllerFavorites.getOne = async (req, res)=>{
    try{
        const id = req.params.id

        const character = await modelFavorites.findOne({id});
        if(!character) return res.status(404).json({ok:false, message:"resource not found"})

        return res.status(200).json({ok:true, result:character});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.getAll = async (req, res)=>{
    try{
        const characters = await modelFavorites.find({})
        return res.status(200).json({ok:true, message:"successful request", result:characters});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.create = async (req, res)=>{
    try{
        //!Nota: debido a la asincronia de javascript, algunas peticiones se pueden ejecutar al mismo tiempo
        //!evitando las validaciones de manera correcta del middleware "middleware/fieldValidationMiddleware.js"

        //si el personaje que se desea insertar a favoritos por alguna rason pasa las validaciones, pero la base de
        //datos nos arroja un error de campos duplicados, lo manejamos en un segundo trycatch
        try{
            const character = await modelFavorites.create(req.body);
            return res.status(201).json({ok:true, message:"successfully created resource"});
        }catch(err){
            cosnole.log("codigoa error: ", err)
            //E11000
            if(err.code === 11000 ) return res.status(409).json({ok:false, message:"the informatin is duplicated"})
            throw new Error("")
        }
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.update = async (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.delete = async (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

module.exports =  controllerFavorites