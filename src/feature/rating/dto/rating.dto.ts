import { z } from "zod";
import { ZodSimpleString, ZodNumericString } from "../../../utils/zod.util"

export const CreateRatingDto = z.object({
    id: ZodSimpleString,
    workRelationShip: z.enum(['peer', 'supervisor']), // enum
    companyID: ZodSimpleString,
    recommedation: z.boolean(),
    communication: ZodNumericString,
    review: ZodSimpleString,
    pr_echnical_skill: ZodNumericString,
    pr_accountability: ZodNumericString,
    pr_problem_solving: ZodNumericString,
    pr_adaptability: ZodNumericString,
    pr_professionalism: ZodNumericString,
    created_at: z.date(),
    updated_at: z.date()
})

export type ICreatePrRatingDto = z.infer<typeof CreateRatingDto>
