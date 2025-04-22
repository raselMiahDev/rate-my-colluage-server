import { z } from 'zod';

import { ZodNameString, ZodSimpleString, ZodMin1UpdateRefine } from "../../../utils/zod.util";

export const CreateUserProfileDto = z.object({
    name: ZodNameString.min(3).max(200),
    currentCompany: ZodSimpleString,
    currentDesignation: ZodSimpleString,
    pastCompany: ZodSimpleString,
    pastDesignation: ZodSimpleString,
    agree: z.boolean()
});

export const UserProfileDto = CreateUserProfileDto.extend({
    id: ZodSimpleString,
    userID: ZodSimpleString,
    created_at: z.date(),
    updated_at: z.date()
});
export type IUserProfileDto = z.infer<typeof UserProfileDto>;

export const UpdateUserProfileDto = UserProfileDto.extend({
    password: ZodSimpleString,
}).partial().refine(ZodMin1UpdateRefine, {
    message: "At least one field must be updated"
})

export type IUpdateUserProfileDto = z.infer<typeof CreateUserProfileDto>;