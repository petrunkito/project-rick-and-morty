Indicaciones para la instalacion 



Estructura del proyecto:

frontend 
        public
            404
                css
                js
                404.html
            favorites
                css
                    style.css
                js
                    deleteFavorite.js
                    drwaFavorites.js
                    index.js
                favorites.html
            home
                css
                    style.css
                js
                    addFavorite.js
                    drawImages.js
                    index.js
                home.html
            shared
                img
                    .png, .jpg
                apiBackend.js
                apiRickAndMorty.js
        routes
            resource
                favorites.js
                home.js
                page404.js
            index.js
    .gitignore
    app.js
    package-lock.json
    package.json
    paths.js
    README.md
    server.js

Esta es la estructura del proyecto frontend.

Raiz: 
En la raiz del proyecto nos encontramos con app.js que contiene las configuraciones iniciales de todo proyecto express(rutas, servidor, puerto), tambien server.js que se encarga de levantar el servidor. path.js es un archivo que contiene rutas a los diferentes niveles del proyecto, eso se hizo asi, ya que nodejs usa rutas absolutas asi: "C:/ruta/ruta" en vez de relativa "../../file.js".

luego tenemos a package.json que contiene informacion del proyecto, comandos y dependencias

Public:

la carpeta public contiene los archivos publicos, por ejemplo 404, favorites, home, son carpeta que contienen las diferentes paginas, y cada una de ellas, tiene por aparte sus archivo js y css.

la carpeta shared contiene, archivos, imagenes, scripts, que pueden ser accedido por todas las paginas, por ejemplo apiBackend.js es el arhivo que contiene cada uno de los metodos par las peticiones hacia la api del backend, y el archivo apiRickAndMorty.js hacia la api publica de Rick and Morty.


Pero, ¿por donde empieza este proyecto?

aqui te explicaremos por donde se empieza a ejecutar el proyecto.

El proyecto comienza por el archivo server.js en la raiz del proyecto despues de ejecutar el comando npm start para iniciar la ejecucion del mismo.

En ese mismo script, se importa el archivo app.js, que requerira todos los modulos necesarios para su funcionamiento, asu vez manda a llamar al archivo routes/index.js, que es el encargado de manejar las rutas de la aplicacion(se refiera a las paginas de la aplicacion)

En el archivo routes/index.js, se mandan a llamar a los arhivos: home.js, favorites.js y page404, que se encargan de servir las paginas de la aplicacion, cuando se hace una peticion de tipo 'get' por parte del navegador.

Volvemos al archivo app.js para luego indicarle cuales seran los archivos estaticos. luego se esta a la espera de cualquier peticion para poder empezar a cargar las paginas.

¿como se veria el flujo del proyecto de manera grafica?

server.js
    app.js
        routes/index.js
            routes/resource/home.js
                paths.js
            routes/resource/favorites.js
                paths.js
            routes/resource/page404.js
                paths.js
        public
            404
                404.html
            favorites
                css
                    style.css
                js
                    deleteFavorite.js
                    drawFavorite.js
                    index.js
                favorites.html
            home
                css
                    style.css
                js
                    addFavorite.js
                    drawImages.js
                    index.js
                home.html
            shared
                img
                    .png, jpg
                apiBackend.js
                apiRickAndMorty.js

Este mas o menos seria el flujo de la aplicacion

