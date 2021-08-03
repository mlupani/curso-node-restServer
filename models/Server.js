const express = require('express')
const cors = require('cors');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users';

        //MiddleWares
        this.middlewares()

        //Routes
        this.routes()
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        //PARSE JSON
        this.app.use(express.json())
        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server;