
import { User } from '../models/user.model';

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'j.doe@doe.com',
    },
];

const getAllUsers = async (): Promise<User[]> => users;

const getUserById = async (id: number): Promise<User | undefined> => {
    return users.find((u) => u.id === id);
};

const createUser = async (data: Omit<User, 'id'>): Promise<User> => {
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const user = { id, ...data };
    users.push(user);
    return user;
};

export default {
    getAllUsers,
    getUserById,
    createUser,
};
