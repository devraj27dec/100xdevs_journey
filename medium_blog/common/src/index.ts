import z from 'zod'

export const signupSchema = z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
})

export const signinSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

export const newBlogSchema = z.object({
    title: z.string().min(10),
    Content: z.string().min(10)
})


export const updateBlogSchema = z.object({
    title: z.string().min(10),
    Content: z.string().min(10),
    id: z.string()
})


export type SignUpType = z.infer<typeof signupSchema>
export type SignInType = z.infer<typeof signinSchema>
export type newBlogType = z.infer<typeof newBlogSchema>
export type updateBlogType = z.infer<typeof updateBlogSchema>
