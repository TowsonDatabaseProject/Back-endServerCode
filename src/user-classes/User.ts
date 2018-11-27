import app from './../general-server-classes/App'
import profile from './Profile'
import connection from './../general-server-classes/Database'
import { isNull } from 'util';

class User {
    private username: String
    private id: String

    public constructor() {
        this.username = ''
        this.id = '0000000'
    }

    public validateUser(currentName: String, currentPassword: String): boolean{
        connection.query("SELECT password FROM users WHERE username = " + currentName, (err, result) => {
            if(err){
                throw err;
            }
            else if(result == currentPassword){
                this.username = currentName
                this.id = connection.query("SELECT id_number FROM users WHERE username = " + currentName, (err) => {
                    if(err){
                        throw err;
                    }
                    console.log("ID got")
                })
            }
        })
        // If the id has been set, then we will return true.
        if(!isNull(this.id)){
            return true
        }
        return false
    }

    // Getter for the ID of the user
    public getID(){
        return this.id
    }
}

export default new User()