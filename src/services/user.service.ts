
import { UserDto } from '../models/user.schema';
let allUsers: UserDto[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'j.doe@doe.com'
    }
]


export const getAllUsers = async (): Promise<UserDto[]> => {

    return allUsers;
}
export const getUser = async (id: number): Promise<UserDto | undefined> => {
    const user: UserDto | undefined = allUsers.find(user => user.id === id);

    return user;
}

export const deleteUser = async (id: number): Promise<void> => {
    allUsers = allUsers.filter(user => user.id !== id);
}

export const newUser = async (user: UserDto): Promise<UserDto> => {

    const maxId = allUsers.reduce((max, user) => Math.max(max, user.id), 0);

    const newUser: UserDto = {
        ...user,
        id: maxId + 1
    };
    allUsers.push(newUser);
    return newUser;

}

