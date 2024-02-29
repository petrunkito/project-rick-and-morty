
/**
 * Este archivo nos ayudara a reutilizar funciones que pudieramos usar en otros controladores o middlewares, ademas
 * de por hacerles pruebas e ir comprobando su funcionamiento una a una.
 * 
 * por ejemplo, validar campos requeridos, validar tipos, validar fechas etc....
 */

/**
 * valida que el cliente nos halla enviado los campos que son requeridos como : id, name, status, species,  
 * gender, image, url, created
 * @param {Object} body - un objeto json con la informacin del personaje a agregar a favoritos
 * @returns {true} retorna true si la validacion es correcta
 */
const validateRequiredFields = async (body) => {
    //obtenemos los campos que la api esta diseñada a recibir
    let { id, name, status, species,  gender, image, url, created } = body

    //validacion de campos obligarios('type' es la excepcion), si no se manda alguno de ellos arrojamos el siguiente error
    if (!(id && name && status && species && gender && image && url && created)) {
        throw new Error("all fields are required")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida que el "id" del personaje sea un entero
 * @param {Number} id - el id del personaje 
 * @returns {true} retorna true si la validacion es correcta
 */
const validateIntegerTypeId = async (id) => {
    //si el id, no es un entero, arrojamos el siguiente error
    if (!Number.isInteger(id)) {
        throw new Error("invalid data type, review the id of the request")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida que el cliente nos halla enviado los tipos de datos correcto para los campos: name, status, 
 * species, type, gender, image, url, en este caso todos tienen que ser 'string'
 * @param {Object} body - un objeto json con la informacin del personaje a agregar a favoritos
 * @returns {true} retorna true si la validacion es correcta
 */
const validateTypeFields = async (body) => {
    //obtenemos los datos a validar
    const { name, status, species, type, gender, image, url} = body
    //los metemos dentro de un arreglo para validar que el tipo de dato sea string
    const isValidType = [name, status, species, type, gender, image, url].every(element => typeof element === "string")
    //si alguno de los campos no tiene un dato de tipo valido, arrojamos el siguiente error
    if (!isValidType) {
        throw new Error("invalid data type, review the body of the request")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida que el "id" del persoaje este en el rango de 1 - 826, que corresponde al 'id' de cada personaje
 * @param {Number} id - el id del personaje
 * @returns {true} retorna true si la validacion es correcta
 */
const validateIDRange = async (id) => {
    //unicamente existen en total 826 personajes, si el 'id' no se encuentra dentro de esta rango, arrojamos el siguiente error
    if (!(id >= 1 && id <= 826)) {
        throw new Error("the id is invalid, the id value should be between 1 and 826")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida si el estado (status) del personaje es valido, ya sea vivo, muerto o desconocido
 * @param {String} status - el estado del personaje que deberia ser: 'alive', 'dead' o 'unknown'
 * @returns {true} retorna true si la validacion es correcta
 */
const validateAllowedStates = async (status) => {
    //el estado de un personaje, unicamente puede ser 'alive', 'dead' o 'unknown'. si el estado(state) no se encuentra
    //en el arreglo 'allowedStates', arrojamos el siguiente error
    const allowedStates = ["alive", 'dead', 'unknown']
    if (!allowedStates.includes(status.toLocaleLowerCase())) {
        throw new Error("the state is invalid, the only options availabe are 'alive', 'dead' and 'unknown' ")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida, si un string es una fecha valida
 * @param {String} created - la fecha de creacion del personaje en formato texto
 * @returns {true} retorna true si la validacion es correcta
 */
const validateDate = async (created) => {
    //validamos que "created" sea una fecha valida. Si "date" llega a ser "NaN" la fecha es invalida entonces arrojamos
    //el siguiente error
    const date = Date.parse(created)
    if (isNaN(date)) {
        throw new Error("'created' isn't a valid date")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida si el genero(gender) del personaje es valido
 * @param {String} gender - el genero del personaje que deberia ser: 'female', 'male', 'genderless' and 'unknown'
 * @returns {true} retorna true si la validacion es correcta
 */
const validateGender = async (gender)=>{
    //el genero de un personaje, unicamente puede ser 'female', 'male', 'genderless' o 'unknown'. Si el genero(gender) 
    //no se encuentra en el arreglo 'allowedGenders', enviamos la siguiente respuesta
    const allowedGenders = ['female', 'male', 'genderless', 'unknown']
    if (!allowedGenders.includes(gender.toLocaleLowerCase())){
        throw new Error("the gender is invalid, the only options available are 'female', 'male', 'genderless' and 'unknown' ")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}


/**
 * valida que el enlace de la imagen del persoaje sea correcto, con un formato 
 * ya establecido como: https://rickandmortyapi.com/api/character/avatar/${id}.jpeg
 * @param {Number} id - el id del personaje
 * @param {String} image - el enlace de la imagen del personaje
 * @returns {true} retorna true si la validacion es correcta
 */
const validateImageFormat = async (id, image)=>{
    //todas las imagenes tienen este formato(el 'id' tambien representa el numero de imagen).
    const imageFormat = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`
    //si el formato de la imagen es invalido o no le corresponde a este personaje, arrojamos el siguiente error
    if (imageFormat !== image){
        throw new Error("the image is invalid or does not belong to this character")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}


/**
 * valida que el enlace del personaje sea correcto, con un formato 
 * ya establecido como: https://rickandmortyapi.com/api/character/${id}
 * @param {Number} id - ide del personaje
 * @param {String} url - el enlace del personaje
 * @returns {true} retorna true si la validacion es correcta
 */
const validateUrlFormat = async (id, url) =>{
    //todas las url tienen este formato(el 'id' representa el id del personaje)
    const urlFormat = `https://rickandmortyapi.com/api/character/${id}`
    //si el formato de la url es invalido o no le corresponde a este personaje arrojamos el siguiente error
    if (urlFormat !== url){
        throw new Error("the url is invalid or does not belong to this character")
    } 
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida que un documento no exista en la base de datos
 * @param {ModelMongoose} model - el modelo de la coleccion a buscar 
 * @param {Number} id - el id del elemento a buscar
 * @returns {true} retorna true si la validacion es correcta
 */
const validateNonExistence = async (model, id)=>{
    //buscamos el documento en la coleccion
    const document = await model.findOne({id})
    //si el documento se encuentra en la base de datos arrojamos el siguiente error, indicando que ya existe en la base de datos.
    if (document){
        throw new Error("the character is already in the database")
    }
    //retornamos si la funcion se ejecuto correctamente
    return true
}

/**
 * valida si un documento en una coleccion de la base de datos existe,
 * @param {ModelMongoose} model - el model de la coleccion a buscar
 * @param {Number} id - el id del elemento a buscar
 * @returns {Boolean} - retorna true si el elemento existe en la base de datos y retorna false si no lo encuentra
 */
const validateExistence = async(model, id)=>{
    //buscamos el documento en la coleccion
    const document = await model.findOne({id})
    //si encontramos el documento, retornamos true, en caso contrario false
    return document? true : false
}

module.exports = {
    validateRequiredFields,
    validateIntegerTypeId,
    validateTypeFields,
    validateIDRange,
    validateAllowedStates,
    validateDate,
    validateGender,
    validateImageFormat,
    validateUrlFormat,
    validateNonExistence,
    validateExistence
}