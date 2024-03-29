import api from "/shared/apiRickAndMorty.js"

async function init(page=1){
    const $container = document.querySelector('.container')
    const template = document.querySelector('.template-img')
    const fragment = document.createDocumentFragment()
    let characters = await api.getPage(page)


    characters.forEach(element => {
        let clone = template.content.cloneNode(true);
        let content = clone.querySelector(".content-element")
        let spanName = clone.querySelector(".character-name")
        let spanStatus = clone.querySelector(".character-status")
        let img = clone.querySelector('.character-img')
        let imgC = clone.querySelector('.img-c')
        
        clone.querySelector(".data-species").innerHTML = `Species: ${element.species}`
        clone.querySelector(".data-type").innerHTML = `Type: ${element.type||"unknown"}`
        clone.querySelector(".data-gender").innerHTML = `Gender: ${element.gender}`

        let status = element.status.toLowerCase()
        if(status === "alive") content.classList.add("live")
        if(status === "dead") content.classList.add("dead")
        if(status === "unknown") content.classList.add("unknow-status")

        content.dataset.id = element.id
        content.dataset.status = status
        spanName.innerHTML = element.name
        spanStatus.innerHTML = element.status
        img.src = element.image
        imgC.dataset.id = element.id
        fragment.appendChild(clone)

    });

    $container.innerHTML = ""
    $container.appendChild(fragment)


}

export default init