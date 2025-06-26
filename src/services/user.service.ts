import {UserDto,} from '../models/user.schema'
import { memmoryUserRepository } from '../repositories/memory.repository'
 
const repository = new memmoryUserRepository();
export const getAllUsers = ():UserDto[] => {
    const users:UserDto[]=repository.list();
    return users
}