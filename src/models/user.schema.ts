import {z} from 'zod';

export const UserSchema = z.object({
    id:z.number().int().positive(),
    name:z.string().min(4,'Name must have 4 characters at least'),
    email:z.string().email('Invalid email format'),
});

export type UserDto = z.infer<typeof UserSchema>;