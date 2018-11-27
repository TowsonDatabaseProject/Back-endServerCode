import * as express from 'express'
<<<<<<< HEAD
import { userInfo } from 'os';
=======
import user from './../user-classes/User'
import userProfile from './../user-classes/Profile'
import library from './../user-classes/Library'
>>>>>>> 2223e84d86e9cbc51b87cfc705e508f450a0fdb0

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
<<<<<<< HEAD
        router.route('/:user-:num').get( (req, res) =>{
            req.params['user']['num']
            res.send({
            
            })
        })
        router.get('/:user-:num/profile', (req, res) => {
=======
>>>>>>> 2223e84d86e9cbc51b87cfc705e508f450a0fdb0

        router.param('userID', (req, res, next, userID) => {
            if(user.validateUser(req.param.userName, req.param.password)){
                userID = user.getID()
            }
            next()
        })
<<<<<<< HEAD
        router.get('/:user-:num/library', (req, res) => {
=======

        router.get('/:userID', (req, res) => {
            res.send(req.param.userID)
        })

        router.get('/:userID/profile', (req, res) => {
            // res.json(userProfile.getInfo())
        })
        router.get('/:userID/library', (req, res) => {
>>>>>>> 2223e84d86e9cbc51b87cfc705e508f450a0fdb0
            
        })
        router.get('/:console', (req, res) =>{

        })
        router.get('/:publisher', (req, res) =>{

        })
        router.get('/:developer', (req, res) =>{

        })
        router.get('/forum', (req, res) => {

        })
<<<<<<< HEAD
        router.get('/forum/:thread-', (req, res) => {
=======
        
        router.param('thread', (req, res, next, thread) => {
            
        })

        router.get('/forum/:thread', (req, res) => {
>>>>>>> 2223e84d86e9cbc51b87cfc705e508f450a0fdb0
            
        })
        this.express.use('/', router)
    }
}

export default new App().express