import { z } from 'zod';

import { ZodNameString, ZodEmailString, ZodSimpleString, ZodMin1UpdateRefine } from "../../../utils/zod.util";

export const CreateUserDto = z.object({
    id: ZodSimpleString,
    name: ZodNameString.min(3).max(200),
    email: ZodEmailString,
    avatar: ZodSimpleString,
    created_at: z.date()
});

export type ICreateUserDto = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = CreateUserDto.extend({
    password: ZodSimpleString,
}).partial().refine(ZodMin1UpdateRefine, {
    message: "At least one field must be updated"
})

export type IUpdateUserDto = z.infer<typeof UpdateUserDto>;