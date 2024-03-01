/**
 * este archivo esta encargado de dibujar los personajes favoritos en el front-end
 */

//llamamos anuestra api del backend
import api from "/shared/apiBackend.js"


//encerramos la funcionalidad dentro de una funcion asincrona para evitar bloquear el hilo principal
async function init(){

    //obtenemos al contenedor de los personajes
    const $container = document.querySelector('.container')
    //el template de cada 'card' del personaje
    const template = document.querySelector('.template-img')
    //creamos un fragmento, para evitar sobre carga al DOM
    const fragment = document.createDocumentFragment()

    //obtenemos a todos los favoritos del backend
    let characters = await api.getAll()

    //aqui empezamos a iterar sobre cada elemento, para crearle de manera dinamica la estructura que tendra en el front-end
    characters.forEach(element => {
        //clonamos el elemento template
        let clone = template.content.cloneNode(true);

        //obtenemos ciertos datos del template
        let content = clone.querySelector(".content-element")
        let spanName = clone.querySelector(".character-name")
        let spanStatus = clone.querySelector(".character-status")
        let img = clone.querySelector('.character-img')
        let imgC = clone.querySelector('.img-c')

        //esta es la informacion que aparece cuando pasa el puntero encima de los personajes
        clone.querySelector(".data-species").innerHTML = `Species: ${element.species}`
        clone.querySelector(".data-type").innerHTML = `Type: ${element.type||"unknown"}`
        clone.querySelector(".data-gender").innerHTML = `Gender: ${element.gender}`

        //convertimos a minusculas el estado del personaje
        let status = element.status.toLowerCase()
        //si esta vivo, le agregamos la clase "live" que agrega un color verde, indicando que esta vivo
        if(status === "alive") content.classList.add("live")
        //si esta muerto, le agregamos la clase "dead" que agrega un color rojo, indicando que esta muerto
        if(status === "dead") content.classList.add("dead")
        //si el estado es desconocidog, le agregamos la clase "unknown" que agrega un color amarillo.
        if(status === "unknown") content.classList.add("unknow-status")

        //cada personaje tendra en su elemento HTML su id y el estado que corresponda
        content.dataset.id = element.id
        content.dataset.status = status

        //agregamos el id del elemento a esta imagen, para que la seleccion del personaje en codigo javascript sea mas facil
        imgC.dataset.id = element.id

        //nombre del personaje que se agregara en la 'card'
        spanName.innerHTML = element.name
        //estado del personaje que se agregra en la 'card'
        spanStatus.innerHTML = element.status
        //indicamos la imagen de cada personaje
        img.src = element.image
        
        //introducimos los elementos en el fragment
        fragment.appendChild(clone)

    });
    //una vez terminado la cracion dinamica de las 'card' las insetamos directamente en el DOM si sobre cargarlo
    $container.appendChild(fragment)


}

export default init