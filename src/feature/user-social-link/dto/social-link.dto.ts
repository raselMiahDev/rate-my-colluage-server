import z from "zod"
import { ZodSimpleString } from "../../../utils/zod.util"

export const CreateSocialLinkDto = z.object({
    id: ZodSimpleString,
    user_id: ZodSimpleString,
    name: ZodSimpleString.min(3).max(200),
    social_link: ZodSimpleString,
    url: ZodSimpleString,
    icon: ZodSimpleString,
    created_at: z.date()
});

export type ICreateSocialLinkDto = z.infer<typeof CreateSocialLinkDto>;
export const UpdateSocialLinkDto = CreateSocialLinkDto.extend({
    user_id: ZodSimpleString,
}).partial()
export type IUpdateSocialLinkDto = z.infer<typeof UpdateSocialLinkDto>;