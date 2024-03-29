/**
 * Este middleware se encargara de validar si un personaje existe en la base de datos
 * este se puede usar cuando:
 * se quiere tener un elemento -> https://domain/get/id
 * se quiere eliminar un elemento -> https://domain/delete/id
 * se quiere editar un elemento -> https://domain/get/id
 */


//obtenemos el model de la coleccion de favoritos
const modelFavorites = require('../model/modelFavorites')

//reutilizamos algunas funcionas para realizar validaciones
const {validateIntegerTypeId, validateIDRange, validateExistence} = require("../validations/validationFunctions")

//valida si el personaje se encuentra en la base de datos
const existenceValidation = async (req, res, next) => {
    try {
       
        // validamos que el id sea un entero 
        await validateIntegerTypeId(parseInt(req.params.id))

        //vaidamos que el id este en un rango valido
        await validateIDRange(parseInt(req.params.id))
        
        //validamos si el personaje se encuentra en nuestra base de datos.
        let result = await validateExistence(modelFavorites, parseInt(req.params.id))

        //si no se encontro el elemento en la base de datos, enviamos la siguiente respuesta
        if(!result) return res.status(404).json({ok:false, message:"resource not found"})

        //si el documento se encuentra en la base de datos pasamos al siguiente middleware
        return next()
    } catch (err) {
        return res.status(400).json({ ok: false, message: err.message })
    }
}

module.exports = existenceValidation