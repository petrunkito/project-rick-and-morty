import api from "/shared/apiBackend.js"
async function init() {

    const $container = document.querySelector(".container")

    let timeout
    document.addEventListener('click', async (e) => {
        let target = e.target
        if (!target.matches(".img-c")) return

        clearTimeout(timeout)
        timeout = setTimeout(async () => {
            await deleteFavorite(target)
            await deleteElement(target)
        }, 150)
    })


    // let timeout
    async function deleteFavorite(target) {   
        let idCharacter = target.dataset.id
        await api.deleteOne(idCharacter)
    }

    async function deleteElement(target){
        const child = document.querySelector(`.content-element[data-id="${target.dataset.id}"]`)
        $container.removeChild(child)
    }

}

export default init