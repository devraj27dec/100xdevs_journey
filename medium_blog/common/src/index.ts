import z from 'zod'

export const signupSchema = z.object({
    name:z.string().min(3, "Name must be at least 3 characters long"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6 , "Password must be at least 6 characters long")
})

export const signinSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(6 , "Password must be at least 6 characters long")
})

export const newBlogSchema = z.object({
    title: z.string().min(5 , "Blog title must be atleast 5 characters  long"),
    Content: z.string().min(10 , "Blog title must be atleast 10 characters  long")
})


export const updateBlogSchema = z.object({
    title: z.string().min(5 , "Blog title must be atleast 5 characters  long"),
    Content: z.string().min(10 , "Blog title must be atleast 10 characters  long"),
    id: z.string()
})


export type SignUpType = z.infer<typeof signupSchema>
export type SignInType = z.infer<typeof signinSchema>
export type newBlogType = z.infer<typeof newBlogSchema>
export type updateBlogType = z.infer<typeof updateBlogSchema>
