import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupSchema , signinSchema } from "@devraj2002/medium-common";
import { useAuthenticated } from "../lib/middleware";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL:string
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>

userRouter.use("*" , useAuthenticated)

userRouter.post("/signup" , async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    })
    // console.log('url', c.env.DATABASE_URL)

    try {
        const body = await c.req.json()
        const { success } = signupSchema.safeParse(body)
        
        if(!success){
            c.status(411)
            return c.json({msg:"Check Input"})
        }
        // console.log(prisma)
        const user = await prisma.user.create({
            data: {
                name:body.name,
                email:body.email,
                password:body.password
            }
        })
    
        const token = await sign({id:user.id }, c.env.JWT_SECRET!)
    
        console.log("created user" ,user)
        return c.json(token)
    } catch (error) {
        return c.text("Invalid")
        
    }
})


userRouter.post('/signin' , async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    })
    // console.log('url', c.env.DATABASE_URL)

    const body = await c.req.json()
    const { success } = signinSchema.safeParse(body)

    if(!success){
        c.status(411)
        return c.json({msg:"Check loggedIn Input"})
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email:body.email,
                password:body.password
            }
        })
        if(!user) {
            c.status(403)
            return c.json({msg:"User Not found!"})

        }
        const token = await sign({id:user.id }, c.env.JWT_SECRET!)
    
        console.log("created user" ,user)
        c.text("User SignedIn Succesfully")
        return c.json(token)
    } catch (error) {
        return c.text("Invalid")
    }
})

userRouter.get('/me' , async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    })
    const userId = await c.get("userId")
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            posts: true
        }
    })
    if (!user) {
        c.status(404);
        return c.json({ msg: "User not found" });
    }
    return c.json(user);
})