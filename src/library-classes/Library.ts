import connection from './../general-server-classes/Database'

export default class Library{
    private name: String
    private gameList: String[]

    constructor(name: String){
        this.name = name
        this.gameList = Array()
    }

    public getGameList(){
        this.gameList.fill(connection.query("SELECT ", (err) =>{
            if(err){
                throw err;
            }
            console.log("we got the list")
        }), 0, -1)
    }


}

// export default new Library(name)