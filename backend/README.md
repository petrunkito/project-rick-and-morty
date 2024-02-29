## Comienzo rapido

antes de hacer cualquier accion en esta parte, te recomendamos leer el archivo README.md del inicio del proyecto.

para empezar de manera inmediata, utiliza la consola del sistema y ejecuta el siguiente comando "npm i" para instalar las dependencias del proyecto, espara a que termine la instalacion de los paquetes.

luego ejecuta el demonio de mongodb con el comando desde una consola de comandos:
```sh
mongod
```
Para que el backend se pueda conectar, si ejecutas el backend primero antes de activar el demonio de mongodb, nodejs intentara conectarse hasta lograrlo.
```sh
"local": {
      "host": "127.0.0.1",
      "port": "27017",
      "db": "rickandmorty" <-
    }
```

Por defecto, este proyecto usa la base de datos "rickandmorty", si no deseas que se modifique alguna base de datos de tu maquita, te recomendamos cambiar el nombre de la base de datos, editando el archivo config/db.config.json y cambiar la base de datos en el atributo 'db'.

Para levantar el proyecto en el puerto 3000 ejecute el comando:
```sh
 npm start
```

esto seria todo lo que tendrias que hacer hata el momento en esta parte del proyecto.

## Estructura del proyecto 

```sh
backend
        config
            db.config.json
            whiteList.json
        controller
            controllerFavorites.js
        middleware
            existenceValidationFavorites.js
            validationCreateFavorites.js
        model
            dbConnection.js
            modelFavorites.js
        routes
            index.js
            resource
                resourceFavorites.js
        validations
            validationFunction.js
    .gitignore
    app.js
    README.md
    server.js
```

Esta es la estructura del proyecto backend.


Raiz:
En la raiz del proyecto nos encontramos con app.js que contiene las configuraciones iniciales de todo proyecto express(rutas, servidor, puerto, conexion a base de datos, apis, cors), tambien server.js que se encarga de levantar el servidor.

luego tendras al README.md con los detalles del proyecto y el archivo package.json, con las versiones de paquetes necesarias para el mismo

Config:
En esta parte tenemos a db.config.json para la configuracion inicial de nuestra conexion a la base de datos y whiteList.json que son los origines que estan permitidos para la api.

Controller:
aqui tenemos a los controladores de nuestro proyecto, encargados de editar, guardar, eliminar informacion.

middleware
En esta carpeta tenemos a los middleware que se encargan de validar la insercion, edicion y eliminacion de datos.

model:
En el modelo de la aplicacion, tenemos los modelos o esquemas de nuestra base de datos y la conexion a nuestra base de datos

Routes:
Aqui, tendremos todos los recursos disponibles para nuestra api, en este caso, solo tendremos la api de 'favorites'.

Validations:
Aqui almacenamos aquellas funciones que podemos reutilizar en las diferentes partes de nuestra aplicacion, validacion, creacion, requisitos etc.

## Pero, ¿por donde empieza este proyecto?

aqui te explicaremos por donde se empieza a ejecutar el proyecto.

El proyecto comienza por el archivo server.js en la raiz del proyecto despues de ejecutar el comando 'npm start' para iniciar la ejecucion del mismo.

En ese mismo script, se importa el archivo app.js, que requerira todos los modulos necesarios para su funcionamiento, asu vez manda a llamar al archivo 'routes/index.js', que es el encargado de manejar las rutas de la Api. Apartir de aqui se empiezan a cargar cada recurso de la Api, en este caso solo tenemos a 'routes/resource/resourceFavorites.js' que se pone a la espera de un peticion get, post, put, delete. 

En esta mismo archivo 'routes/resource/resourceFavorites.js', se hace uso de los middleware para validar cada operacion a la api, tambien se require al controlador "controller/controllerFavorites.js", que es el encargado de proporcionar metodos, para la obtencion, edicion, eliminacion de los datos.

De regreso al archivo app.js, se cargan los origines que tendran permiso de acceder a la api. Tambien se manda a llamar el archivo 'model/dbConecction.js' para intentar conectar con la base de datos.

Por ultimo en el archivo 'app.js' se establece el puerto en que la aplicacion se ejecutara, y se habilita a api.


## ¿como se veria el flujo del proyecto de manera grafica?
```sh
server.js
    app.js
        routes/index.js
            resource/favorites.js
                controller/controllerFavorites.js
                middleware/existenceValidationFavorites.js
                    /validations/validationFunctions.js
                middleware/validationCreateFavorites.js
                    /validations/validationFunctions.js
        model/dbConection.js
            config/db.config.json

Este mas o menos seria el flujo de la aplicacion al ejecutarse, al pasar por cada uno de los archivos
```