import { z } from 'zod';

export const UserSchema = z.object({
    id:z.number().positive(),
    name:z.string().min(4,'name should have at least 4 characters'),
    email:z.string().email('invalid format')
});

export type UserDto = z.infer<typeof UserSchema>

export const CreateUserSchema = UserSchema.omit({id:true});
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
