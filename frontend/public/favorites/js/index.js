/**
 * el archivo index.js de la pagina favorites.html es el archivo principal, desde aqui, unimos los demas modulos de la pagina
 */

//dibuja los personajes favoritos cuando entran a la pagina favorites.html
import drawFavorites from "/favorites/js/drawFavorites.js"
//elimina un personaje favorito de la base de datos y la vista html
import deleteFavorites from "/favorites/js/deleteFavorite.js"

//encerramos la funcionalidad dentro de una funcion asincrona para evitar bloquear el hilo principal
async function init(){
    //dibuja los personajes favoritos
    await drawFavorites()
    //elimina a un personaje siempre y cuando se les haga click a las cards(ver funcinamiento interno)
    await deleteFavorites()
}
init()
// console.log(api)