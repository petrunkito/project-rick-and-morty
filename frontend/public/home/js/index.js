import api from "/shared/apiRickAndMorty.js"
import drawImages from "/home/js/drawImages.js"
import addFavorite from "/home/js/addFavorite.js"
// api.getPage()


async function init(){
    await drawImages()
    await addFavorite()
}
init()