const express = require("express")
const http = require("http")
const cors = require("cors")
const routes = require("./routes/index")
const whiteList = require("./config/whiteList").url

require('./model/dbConection')()


const app = express()
const server = http.createServer(app)

// app.disable("x-powered-by");
app.set("port", process.env.PORT || 3000)

/*const corsOptions = {
    origin: (origin, callback)=>{
        if(whiteList.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))*/
app.use(express.json())
app.use("/api", routes)

module.exports = {app, server}




