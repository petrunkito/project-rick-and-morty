/**
 * Es middleware se encargara de validar los campos cuando se desea crear o agregar
 * un personaje a la base de datos.
 * 
 * validando tipos de campos, rangos de id, que el elemento a insertar no se encuentre en la 
 * base de datos.
 */

//obtenemos el model de la coleccion de favoritos
const modelFavorites = require('../model/modelFavorites')

//reutilizamos algunas funcionas para realizar validaciones antes de agregar el personaje
const {
    validateRequiredFields, validateIntegerTypeId,
    validateTypeFields, validateIDRange,
    validateAllowedStates, validateDate,
    validateGender, validateImageFormat,
    validateUrlFormat, validateNonExistence
} = require("../validations/validationFunctions")

//este middleware se encargara de validar los campos que nos envia el cliente 
//antes de que se inserte en la base de datos
const fieldsValidation = async (req, res, next) => {
    try {

        //si el cuerpo de la peticion viene vacia, enviamos la siguiente respuesta
        if (!Object.keys(req.body).length) return res.status(400).json({ ok: false, message: "no data was provided for creation" })

        //validamos aquellos campos que son exigidos o requeridos, enviamos el req.body para que valide los campos
        await validateRequiredFields(req.body)

        //validamos que el 'id' del personaje sea un entero
        await validateIntegerTypeId(req.body.id)

        //validamos el tipo de datos de ciertos campos, enviamos el req.body para que valide tales campos
        await validateTypeFields(req.body)


        //validamos que el "id" se encuentre dentro de un rango valido indicado por la api
        //!Nota: la api de rick and morty solo tiene 826 personajes, por eso razon no establecemos
        //!el rango de manera dinamica
        await validateIDRange(req.body.id)

        //validamos que el estado de un personaje sea valido(muerto, vivo, desconocido)
        await validateAllowedStates(req.body.status)

        //validamos que el campo "created" sea una fecha valida
        await validateDate(req.body.created)

        //validamos que el genero de un personaje sea valido('female', 'male', 'genderless', 'unknown').
        //enviamos el genero del personaje
        await validateGender(req.body.gender)

        //validamos que el formato de la direccion de una imagen sea valido
        await validateImageFormat(req.body.id, req.body.image)
        await validateUrlFormat(req.body.id, req.body.url)

        //!Nota: validamos por ultimo la existencia del elemento en la coleccion de favoritos, esto para evitar hacer una peticion
        //!en vano, si alguna de las validaciones posteriores fallaran.
        //validamos que el personaje no se encuentre en la base de datos
        await validateNonExistence(modelFavorites, req.body.id)

        //si todo ocurrio de manera correcta, pasamos al controlador para insertar el personaje
        return next()

    } catch (err) {
        return res.status(400).json({ ok: false, message: err.message })
    }
}

module.exports = fieldsValidation