import app from './../general-server-classes/App'
import profile from './Profile'

class User {
    private username: String
    private id: String
    private password: String

    public constructor() {
        this.username = ''
        this.id = '0000000'
        this.password = ''
    }

    public validateUser(currentName: String, currentPassword: String){
        
    }

    public getID(){

    }
}

export default new User()