import api from "/shared/apiRickAndMorty.js"
import apiBackend from "/shared/apiBackend.js"
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


    // let timeout
    async function addFavorite(target) {

        let idCharacter = target.dataset.id
        let character = await api.getOne(idCharacter)
        console.log(character, ", ")

        let {id, name, status, species, type, gender, image, url, created} = character
        
        await apiBackend.create({
            id, name, status, species, type, gender, image, url, created
        })


    }


}

export default init