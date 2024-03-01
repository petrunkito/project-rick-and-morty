import api from "/shared/apiRickAndMorty.js"

import drawImages from "/home/js/drawImages.js"

//encerramos la funcionalidad dentro de una funcion asincrona para evitar bloquear el hilo principal
async function init(){
    //el boton encargado de regresar a las paginas anteriores
    const buttonLeft = document.querySelector('.button-left')
    //el boton encargado de avanzar a las siguientes paginas
    const buttonRight = document.querySelector('.button-right')

    //obtenemos la informacion de cuantas paginas existen, cuantos personajes, la anterior y siguiente pagina
    let info = await api.getInfo();
    //obtenemos el body del home
    let body = document.body

    //en este caso solo obtenemos el total de paginas disponibles(cada pagina nos presenta 20 personajes)
    const totalPages = info.pages
    //por defecto la primer pagina es 1(esto es solo para la configuracion inicial)
    body.dataset.current = 1

    //cuando se presione alguno de los botones, avanzamos o retrocedemos en las paginas.
    //nos ayudamos del antirebote para no exigirle demasiado al navegador
    buttonLeft.addEventListener('click', ()=>antiRebound(left))
    buttonRight.addEventListener('click', ()=>antiRebound(rigth))

    //aplicamos una tecnica llamada antirebote
    //si el usuario presiona varias veces algun el boton derecho o izquierdo, se esperara hasta el ultimo click
    //!Importante: una funcion de antirebote no puede ser asincrona por su naturaleza
    let timeout
    function antiRebound(cb){
        clearTimeout(timeout)
        timeout = setTimeout(async()=>await cb(), 200)
    }

    //encargada de mostrar las pagina hacia la izquierda
    async function left(e){
        //obtenemos la pagina actual en la que nos encontramos
        let currentPage = parseInt(body.dataset.current)
        //si estamos en la primer pagina(1), avanzamos hata la ultima
        if(currentPage === 1) {
            currentPage = totalPages
        }else{
            //retrocedemos a la pagina anterior
            currentPage--
        }
        //actualizamos la pagina actual
        body.dataset.current = currentPage
        //dibujamos los nuevos personajes
        drawImages(currentPage)
    }

    //encargada de mostrar la pagina hacia la derecha
    async function rigth(e){
        //obtenemos la pagina en la que nos encontramos
        let currentPage = parseInt(body.dataset.current)
        //si estamos en la ultima pagina(totalPages), avanzamos hasta la primer pagina
        if(currentPage === totalPages) {
            currentPage = 1
        }else{
            //avanzamos a la siguiente pagina
            currentPage++
        }
        //actualizamos la pagina actual
        body.dataset.current = currentPage
        //dibujamos los nuevos personajes
        drawImages(currentPage)
    }

}

export default init