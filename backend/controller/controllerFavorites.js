const modelFavorites = require('../model/modelFavorites')

const controllerFavorites = {}

controllerFavorites.getOne = (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.getSeveral = (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.create = (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.update = (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

controllerFavorites.delete = (req, res)=>{
    try{
        return res.status(200).json({ok:true});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}