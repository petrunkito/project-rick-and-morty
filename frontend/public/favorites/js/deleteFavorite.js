/**
 * este archivo se encarga de la funcionalidad de eliminar un favorito de la base de datos y 
 * de la pagina.
 */

//importamos la api del backend
import api from "/shared/apiBackend.js"

//encerramos la funcionalidad dentro de una funcion asincrona para evitar bloquear el hilo principal
async function init() {

    //obtenemos al elemento contenedor de las 'cards'
    const $container = document.querySelector(".container")

    //!Nota: para evitar que el usuario sobre cargue la aplicacion, aplicamos una tecnica llamada antirebote
    //!que conciste en ejecutar una funcion despues que el usuario halla introducido la ultima interaccion
    //!ejemplo: un usuario que presiona varias veces consecutivas un boton, y que este tenga una funcion pesada
    //!a su cargo, esto proporcionaria, un desperdicio de los recuros, y la solucion a este inconveniente seria
    //!ejecutar tal accion hasta el ultimo click.

    let timeout
    document.addEventListener('click', (e) => {
        //si el target no coincide con el selector no hacemos nada
        let target = e.target
        if (!target.matches(".img-c")) return

        //eliminamos el timeout anterior
        clearTimeout(timeout)

        //esto se ejecutara luego de un retraso de 150 milisegundos
        timeout = setTimeout(async () => {
            //eliminamos el personaje favorito de la base de datos
            await deleteFavorite(target)
            //eliminamos el personaje de la vista html
            await deleteElement(target)
        }, 150)
    })


    /**
     * este metodo se encarga de eliminar el personaje de la lista de favoritos de la api del backend
     * @param {HtmlElement} target - el elemento al cual se le hizo click
     */
    async function deleteFavorite(target) {   
        //obtenemos el id del personaje
        let idCharacter = target.dataset.id
        //tratamos de eliminarlo
        await api.deleteOne(idCharacter)
    }

    /**
     * este metodo se encarga de eliminar el personaje de la vista html
     * @param {HtmlElement} target - el elemento al cual se le hizo click
     */
    async function deleteElement(target){
        //obtenemos al contenedor del elemento, atravez del selector
        const child = document.querySelector(`.content-element[data-id="${target.dataset.id}"]`)
        //lo elimnamos de la vista html
        $container.removeChild(child)
    }

}

export default init