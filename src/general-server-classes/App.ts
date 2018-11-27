import * as express from 'express'
import { userInfo } from 'os';

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
        router.route('/:user-:num').get( (req, res) =>{
            req.params['user']['num']
            res.send({
            
            })
        })
        router.get('/:user-:num/profile', (req, res) => {

        })
        router.get('/:user-:num/library', (req, res) => {
            
        })
        router.get('/:console', (req, res) =>{

        })
        router.get('/:publisher', (req, res) =>{

        })
        router.get('/:developer', (req, res) =>{

        })
        router.get('/forum', (req, res) => {

        })
        router.get('/forum/:thread-', (req, res) => {
            
        })
        this.express.use('/', router)
    }
}

export default new App().express