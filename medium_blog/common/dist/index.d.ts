import z from 'zod';
export declare const signupSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export declare const signinSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const newBlogSchema: z.ZodObject<{
    title: z.ZodString;
    Content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    Content: string;
}, {
    title: string;
    Content: string;
}>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodString;
    Content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    Content: string;
    id: string;
}, {
    title: string;
    Content: string;
    id: string;
}>;
export type SignUpType = z.infer<typeof signupSchema>;
export type SignInType = z.infer<typeof signinSchema>;
export type newBlogType = z.infer<typeof newBlogSchema>;
export type updateBlogType = z.infer<typeof updateBlogSchema>;
