import z from 'zod'

export const UserSchema= z.object({
    id:z.number().positive(),
    name:z.string().min(4,'Name must have at least 4 character'),
    email:z.string().email('email format is not valid')
});

export const CreateUserSchema = UserSchema.omit({id:true});
export type CreateUserDto = z.infer<typeof CreateUserSchema>
export type UserDto = z.infer<typeof UserSchema>