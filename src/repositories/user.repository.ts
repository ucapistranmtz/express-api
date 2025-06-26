import { CreateUserDto, UserDto } from '../models/user.schema'

export interface UserRepository {
    list(): Promise<UserDto[]>
    create(user:CreateUserDto): Promise<UserDto | undefined>
}