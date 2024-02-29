/**
 * este archivo se encarga unicamente de levantar el servidor del proyecto
 */
const {app, server} = require("./app")
server.listen( app.get('port'), ()=>{
    console.log(`server listening on port ${app.get('port')}`)
})