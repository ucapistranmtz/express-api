import {users} from '../models/user.model';

export class UserService {
    getAllUsers() {
        return users
    }
}