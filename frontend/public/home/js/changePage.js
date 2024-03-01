import api from "/shared/apiRickAndMorty.js"

import drawImages from "/home/js/drawImages.js"

async function init(){
    
    const buttonLeft = document.querySelector('.button-left')
    const buttonRight = document.querySelector('.button-right')

    let info = await api.getInfo();
    let body = document.body

    body.dataset.current = 1
    const totalPages = info.pages

    buttonLeft.addEventListener('click', left)
    buttonRight.addEventListener('click', rigth)

    async function left(e){
        let currentPage = parseInt(body.dataset.current)
        if(currentPage === 1) {
            currentPage = totalPages
        }else{
            currentPage--
        }
        body.dataset.current = currentPage
        drawImages(currentPage)
    }

    async function rigth(e){
        let currentPage = parseInt(body.dataset.current)
        if(currentPage === totalPages) {
            currentPage = 1
        }else{
            currentPage++
        }
        body.dataset.current = currentPage
        drawImages(currentPage)
    }

}

export default init