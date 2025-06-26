import {UserDto,UserSchema,CreateUserSchema,CreateUserDto} from '../models/user.schema';
import memoryUserRepository from '../repositories/memoryUser.repository';

const userRepository = new memoryUserRepository();

export const getAllUsers=  async ()=> {
    return  await userRepository.list();
}

export const createNewUser =async  (user: CreateUserDto) => {
   return await userRepository.create(user)
}