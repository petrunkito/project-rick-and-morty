
const modelFavorites = require('../model/modelFavorites')

const {
    validateRequiredFields, validateTypeId,
    validateTypeFields, validateIDRange,
    validateAllowedStates, validateDate,
    validateGender, validateImageFormat,
    validateUrlFormat, validateExistance
} = require("../validations/validationFunctions")


const fieldValidation = async (req, res, next) => {
    try {

        //si el cuerpo de la peticion viene vacia, enviamos la siguiente respuesta
        if (!Object.keys(req.body).length) return res.status(400).json({ ok: false, message: "no data was provided for creation" })

        //validamos aquellos campos que son exigidos o requeridos, enviamos el req.body para que valide los campos
        await validateRequiredFields(req.body)

        //validamos que el 'id' del personaje sea un entero
        await validateIntegerTypeId(req.id)

        //validamos el tipo de datos de ciertos campos, enviamos el req.body para que valide tales campos
        await validateTypeFields(req.body)

        //validamos que el "id" se encuentre dentro de un rango valido indicado por la api
        //!Nota: la api de rick and morty solo tiene 826 personajes, por eso razon no establecemos
        //!el rango de manera dinamica
        await validateIDRange(req.id)

        //validamos que el estado de un personaje sea valido(muerto, vivo, desconocido)
        await validateAllowedStates(req.status)

        //validamos que el campo "created" sea una fecha valida
        await validateDate(req.created)

        //validamos que el genero de un personaje sea valido('female', 'male', 'genderless', 'unknown').
        //enviamos el genero del personaje
        await validateGender(req.gender)

        //validamos que el formato de la direccion de una imagen sea valido
        await validateImageFormat(req.id, req.image)
        await validateUrlFormat(req.id, req.url)

        //!Nota: validamos por ultimo la existencia del elemento en la coleccion de favoritos, esto para evitar hacer una peticion
        //!en vano, si alguna de las validaciones posteriores fallaran.
        await validateExistance(modelFavorites, { id: req.id })

        return next()

    } catch (err) {
        return res.status(400).json({ ok: false, message: err.message })
    }
}

module.exports = fieldValidation