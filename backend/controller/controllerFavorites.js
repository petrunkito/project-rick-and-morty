const modelFavorites = require('../model/modelFavorites')

//en este objeto guardaremos cada una de las acciones que realizara la api
const controllerFavorites = {}

//obtiene a un personaje de la base de datos
controllerFavorites.getOne = async (req, res)=>{
    try{
        //obtenemos el id del personaje a buscar
        const id = req.params.id

        //buscamos al elemento en la base de datos. si este no se encuentra, enviamos la siguiente respuesta
        const character = await modelFavorites.findOne({id});
        if(!character) return res.status(404).json({ok:false, message:"resource not found"})

        //enviamos al elemento
        return res.status(200).json({ok:true, result:character});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

//obtiene a todos los personajes de la base de datos
controllerFavorites.getAll = async (req, res)=>{
    try{
        //obtenemos a todos los favoritos
        const characters = await modelFavorites.find({})
        return res.status(200).json({ok:true, message:"successful request", result:characters});
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

//agregamos o creamos un nuevo personaje
controllerFavorites.create = async (req, res)=>{
    try{

        //validamos que solo hallan 10 usuarios en la base de datos, si esta al limite, enviamos la siguiente respuesta
        const total = await modelFavorites.find({}).count();
        if(total >= 10) return res.status(400).json({ok:false, message: "capacity exceeded, you can only enter 10 users"})

        //!Nota: debido a la asincronia de javascript, algunas peticiones se pueden ejecutar al mismo tiempo
        //!evitando las validaciones de manera correcta del middleware "middleware/fieldValidationMiddleware.js"

        //si el personaje que se desea insertar a favoritos por alguna rason pasa las validaciones, y ya se encuentraba
        //en la base de datos, esta nos arrojara un error de campos duplicados, por esa razon, lo manejamos en un 
        //try-catch interno
        try{
            //agregamos el personaje a la base de datos y enviamos la siguiente respuesta
            const character = await modelFavorites.create(req.body);
            return res.status(201).json({ok:true, message:"successfully created resource"});
        }catch(err){
            cosnole.log("codigoa error: ", err)
            //E11000
            if(err.code === 11000 ) return res.status(409).json({ok:false, message:"the informatin is duplicated"})
            //si el error no se debe por la duplicacion de informacion, manejamos el error al primer try-catch
            throw new Error("")
        }
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}


//eliminamos a un personaje de la base de datos
controllerFavorites.delete = async (req, res)=>{
    try{
        //obtenemos el id del personaje a eliminar
        const id = req.params.id

        //lo eliminamos de la base de datos
        const result = await modelFavorites.deleteOne({id})

        //enviamos la siguiente respuesta
        return res.status(200).json({ ok: true, message: "item deleted successfully" })
    }catch(err){
        return res.status(500).json({ok:false, message:"an error ocurred with the server"})
    }
}

module.exports =  controllerFavorites