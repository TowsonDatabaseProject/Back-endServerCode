import * as express from 'express'
import user from './../user-classes/User'
import userProfile from './../user-classes/Profile'
import library from './../user-classes/Library'

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

        router.param('userID', (req, res, next, userID) => {
            if(user.validateUser(req.param.userName, req.param.password)){
                userID = user.getID()
            }
            next()
        })

        router.get('/:userID', (req, res) => {
            res.send(req.param.userID)
        })

        router.get('/:userID/profile', (req, res) => {
            // res.json(userProfile.getInfo())
        })
        router.get('/:userID/library', (req, res) => {
            
        })
        router.get('/:console', (req, res) =>{

        })
        router.get('/:publisher', (req, res) =>{

        })
        router.get('/:developer', (req, res) =>{

        })
        router.get('/forum', (req, res) => {

        })
        
        router.param('thread', (req, res, next, thread) => {
            
        })

        router.get('/forum/:thread', (req, res) => {
            
        })
        this.express.use('/', router)
    }
}

export default new App().express