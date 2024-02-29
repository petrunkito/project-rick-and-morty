"introduccion"

El front-end es una interfaz muy sencilla, lo primero que verias seria el home de la pagina, en el cual podras subir tus videos, ver previamente cuales has subido y poder eliminarlos.

Cuando presiones en algun video que hallas subido, se te redirigira a la pagina de video.html, donde se empezara a reproducir tu video, y a medida que vallas avanzando, el front-end le pedira a la api mas fragmentos para evitar detener la reproduccion e interrumpir la experiencia de usuario. Aqui podras adelantar, retroceder, cambiar la resolucion del video y de manera automatica el reproductor se ira adaptando a tus necesidades.

si quieres subir un video, lo unico que tienes que hacer es presionar el boton de "Subir video", presionas el boton de "buscar" y eliges el video que desearias subir, inmediatamente se te mostrara el nombre del video que quieres subir y se te habilitara el boton de "Subir", para que puedas enviarlo al back-end y este haga toda su magia, los formatos soportados son mp4, webm, mkv, avi, si subes un archivo que no tenga estos formatos, se te mostrara un mensaje indicandote los formatos requeridos, luego de enviarlo, recibiras un mensaje de que el video se subio exitosamente, y esperar hasta que esta ya este listo para su reproduccion, actualizas la pagina y este ya estaria listo para ser visto.

"archivos y su funcionamiento"

En este apartado sabras para que funciona cada archivo, asi te sera mas facil editarlo a tu gusto

|-cliente
|---|pages
|------|index.html
|------|page404.html
|------|video.html
|---|public
|------|css
|---------|style-404.css
|---------|style-video.css
|---------|style.css
|------|img
|---------|img.(jpg,mpg)
|------|js
|---------|index-html
|------------|deleteVideo.js
|------------|drawingElements.js
|------------|index.js
|------------|navFuncionality.js
|------------|uploadFile.js
|---------|video-html
|------------|controlsVideo.js
|------------|drawResolutions.js
|------------|hls.js
|------------|index.js
|------------|mux.min.js
|------------|progressBar.js
|------------|test-hls.js
|---------api.js
|---|routes
|------|resource
|---------|home.js
|---------|page404.js
|---------|video.js
|------|index.js
|---|app.js
|---|package.json
|---|paths.js
|---|README.MD
|---|server.js
|---|.gitignore

pages:

en pages encontraras cada pagina de la aplicacion el index.html(la pagina inicial donde podras ver todos tus video subidos), page404.html(si digitas una ruta incorrecta)

"desgloce"


"empecemos"

//!aurelio seria genial que arreglaras cuando se busca un video y este id esta malo, seria genial que enviaras el error 404