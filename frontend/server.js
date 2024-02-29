/**
 * este archivo se encarga unicamente de levantar el servidor del proyecto
 */
let {server, app} = require("./app")
server.listen(app.get("port"), ()=>{
    console.log("ejecutando en el puerto: ", app.get('port'))
})