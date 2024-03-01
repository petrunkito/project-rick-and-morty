/**
 * este archivo sera el encargado de usar los metodos de la api del backend,
 * aqui podremos consultar favoritos, obtener un favorito, crear un favorito
 */

//esta es la url de la api
const urlApi = `http://localhost:3000/api/favorites/`


/**
 *este metodo obtiene todos los personajes que se agregaron a los favoritos.
 * @returns {Array} retorna un erreglo con los personajes favoritos
 */
const getAll = async () => {
    try {
        //hacemos la peticion
        let response = await fetch(urlApi)

        //si la peticion no se concreto arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')

        //retornamos los personajes favoritos
        return (await response.json()).result
    } catch (err) {
        return false
    }
}

/**
 * este metodo obtiene a un solo personaje favorito de la base de datos
 * @param {Number} id - el id del personaje 
 * @returns {Object} retorna un objeto con la informacion del persona
 */
const getOne = async (id) => {
    try {
        //hacemos la peticion
        let response = await fetch(urlApi + id)

        //si la peticion no se concreto arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')

        //retornamos el personaje seleccionado
        return (await response.json()).result
    } catch (err) {
        return false
    }
}

//
/**
 * este metodo crea o agrega un nuevo personaje favorito al backend
 * @param {Object} body - contiene todos los campos a insertar del personaje en favoritos
 * @returns {Boolean} retorna true si todo salio bien, y de lo contrario retorna false
 */
const create = async (body) => {
    try {

        //hacemos la peticion de tipo post, y enviamos los datos en formato JSON
        let response = await fetch(urlApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        //si la peticion tuvo algun problema arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')

        //retornamos true si todo ucurrio de manea exitosa
        return true
    } catch (err) {
        return false
    }
}

/**
 * este metodo esta encargado de eliminar a un personaje de la coleccion de favoritos de la base de datos
 * @param {Number} id - el id del personaje a eliminar de favoritos 
 * @returns {Boolean} retorna true si la eliminacion se concreto, y false si no se logro
 */
const deleteOne = async (id) => {
    try{
        //realizamos la peticion de tipo delete
        let response = await fetch(urlApi+id, {
            method:"DELETE"
        })

        //si la peticion tuvo algun problema arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')
        
        //retornamos true si todo ucurrio de manea exitosa
        return true
    }catch(err){
        return false
    }
}

export default {
    getAll,
    getOne,
    create,
    deleteOne
}