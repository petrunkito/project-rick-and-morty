
import drawImages from "/home/js/drawImages.js"
import addFavorite from "/home/js/addFavorite.js"
import changePage from "/home/js/changePage.js"

async function init(){
    await drawImages()
    await addFavorite()
    await changePage()
}
init()