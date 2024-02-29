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

        let {id, name, status, species, type, gender, image, url, created} = req.body
        



        return res.status(201).json({ok:true});
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