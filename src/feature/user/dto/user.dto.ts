import { z } from 'zod';

import { ZodNameString, ZodEmailString, ZodSimpleString } from "../../../utils/zod.util";

export const CreateUserDto = z.object({
    id: ZodSimpleString,
    name: ZodNameString.min(3).max(200),
    email: ZodEmailString,
    avater: ZodSimpleString,
});

export type ICreateUserDto = z.infer<typeof CreateUserDto>;