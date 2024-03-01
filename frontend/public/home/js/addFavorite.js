/**
 * Este archivo se encarga de agregar un personaje a la coleccion de favoritos en la base de datos
 */

//nuestra api de rickandmorty para validar un personaje
import api from "/shared/apiRickAndMorty.js"

//nuestra api del backend para insertar el elemento en la base de datos
import apiBackend from "/shared/apiBackend.js"

//encerramos la funcionalidad dentro de una funcion asincrona para evitar bloquear el hilo principal
async function init() {

    let timeout
    document.addEventListener('click', async (e) => {
        let target = e.target
        if (!target.matches(".img-c")) return

        clearTimeout(timeout)
        timeout = setTimeout(async () => {
            await addFavorite(target)
        }, 150)
    })


    async function addFavorite(target) {
        let idCharacter = target.dataset.id
        let character = await api.getOne(idCharacter)

        let { id, name, status, species, type, gender, image, url, created } = character

        await apiBackend.create({
            id, name, status, species, type, gender, image, url, created
        })
    }


}

export default init