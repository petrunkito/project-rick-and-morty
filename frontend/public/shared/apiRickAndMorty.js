/**
 * este archivo sera el encargado de usar los metodos de la api publica de rick and morty,
 * aqui podremos obtener una pagina completa de personajes, uno en particular, obtener la 
 * informacion de la api, como cantidad de personajes, paginas, etc.
 */

/**
 * Este metodo se encarga de traernos los personajes de una pagina entera(por defecto son 20 registros)
 * @param {Number} num - el numero de la pagina que contiene a sus respectivos personajes
 * @returns {Array} -  retorna un arreglo de objetos, con los personajes disponibles en dicha pagina
 */
const getPage = async (num=1) => {
    try {
        //realizamos la peticion
        let response = await fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)

        //si la peticion no se concreto arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')

        //retornamos los personajes que se encuentran en dicha pagina
        return (await response.json()).results
    } catch (err) {
        return false
    }
}

/**
 * Este metodo se encarga de obtener la informacion de un personaje en particular usando su id
 * @param {Number} id - el id de un personaje en particular
 * @returns {Object} retorna el objeto con la informacion del personaje
 */
const getOne = async (id) => {
    try {
        //realizamos la peticion
        let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        //si la peticion no se concreto arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')
        //retornamos la informacion del personaje
        return  await response.json()
    } catch (err) {
        return false
    }
}

/**
 * Este metodo se encarga de obtener informacion general de la api, por ejemplo: la cantidad de personajes, 
 * las paginas disponibles, etc.
 * @returns {Object} - retorna un objeto con informacin de la api
 */
const getInfo = async () =>{
    try{
        //realizamos la peticion
        let response = await fetch("https://rickandmortyapi.com/api/character");

        //si la peticion no se concreto arrojamos el siguiente error
        if (!response.ok) throw new Error('data collection failed')

        //retornamos la informacion de la api
        return (await response.json()).info
    }catch(err){
        return false
    }
}

export default {
    getPage,
    getOne,
    getInfo
}