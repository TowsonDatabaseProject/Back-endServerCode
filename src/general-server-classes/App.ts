import * as express from 'express'

class App{
    public express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    //Mounts all routes for our application
    private mountRoutes (): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Home Page'
            })
        })
        router.get('/user-profile', (req, res) => {

        })
        router.get('/library', (req, res) => {
            
        })
        router.get('/console', (req, res) =>{

        })
        router.get('/publisher', (req, res) =>{

        })
        router.get('/developer', (req, res) =>{

        })
        router.get('/Forum', (req, res) => {

        })
        router.get('/thread-', (req, res) => {
            
        })
        this.express.use('/', router)
    }
}

export default new App().express