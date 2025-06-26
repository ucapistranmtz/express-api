import { CreateUserDto, UserDto } from '../models/user.schema'
import {UserRepository} from './user.repository'

export default class memoryUserRepository implements UserRepository  {
    private users:UserDto[]
  constructor(){
    this.users=[{
        id:1,
        name:'John Doe',
        email: 'j.doe'
    }]
  } 
   async list(): Promise<UserDto[]> {
        return this.users
    }
 
    async create(user:CreateUserDto): Promise<UserDto>{
      const maxId = this.users.reduce((max, user) => user.id > max ? user.id : max, 0) + 1;
      const newUser:UserDto = { ...user,id:maxId}
      this.users.push(newUser);
      return newUser;
    }
}