import drawFavorites from "/favorites/js/drawFavorites.js"
import deleteFavorites from "/favorites/js/deleteFavorite.js"

async function init(){
    await drawFavorites()
    await deleteFavorites()
}
init()
// console.log(api)