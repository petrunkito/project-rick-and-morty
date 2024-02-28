const {app, server, server} = require("./app")
const server = server.listen( app.get('port'), ()=>{
    console.log(`server listening on port ${app.get('port')}`)
})