
import {UserDto} from '../models/user.schema'
export class memmoryUserRepository {
    private users:UserDto[];
    constructor (){
        this.users= [{
            id:1,
            name:'Johhn Doe',
            email: 'j.doe@doe.com'
        }]
    }

    list() {
        return this.users
    }

    get(id:number){
        return this.users.find(user=> user.id ===id);
    }

    //create()
}