import app from './../general-server-classes/App'
import profile from './Profile'
import connection from './../general-server-classes/Database'
import { isNull, isDeepStrictEqual } from 'util';
import admin from './AdminUser'

class User {
    
    private username: String
    private id: String
    private isAdmin: boolean

    public constructor() {
        this.username = ''
        this.id = null
        this.isAdmin = false
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
                    // if we did not get an error, then we check if they are an admin or not.
                    this.setAdmin()
                    console.log("ID got")
                })
            }
        })
        // If the id has been set, then we will return true.
        return !isNull(this.id)
    }

    // Getter for the ID of the user
    public getID(): String {
        return this.id
    }

    private setAdmin(){
        let adminArray: String[] = connection.query("SELECT id_number FROM admin", (err) =>{
            if(err){
                throw err
            }
            for(var item in adminArray){
                if(isDeepStrictEqual(item, this.id)){
                    this.isAdmin = true
                    break //lets leave the loop
                }
            }
        })
    }
}

export default new User()