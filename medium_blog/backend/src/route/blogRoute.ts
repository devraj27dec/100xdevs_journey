import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
import { verify } from "hono/jwt"
import {newBlogSchema , updateBlogSchema} from '@devraj2002/medium-common'

type JwtPayload = {
    id: string;  
};

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>

blogRouter.use("*" , async(c , next) => {
    const authHeader = c.req.header('Authorization') || "";
    const user = await (verify(authHeader , c.env.JWT_SECRET!)) as JwtPayload
    if(user){
        c.set('userId' , user.id)
        c.json({
            msg:"User loggedIn Succesfully"
        })
        await next()
    }else {
        c.status(403)
        return c.json({msg:"Please loggedIn first"})
    }
})

blogRouter.post('/new' , async(c , next) =>{
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()

    const { success } = newBlogSchema.safeParse(body) 
    if(!success){
        c.status(411)
        return c.json({msg:"Check New Blog Input"})
    }
    try {
        const authorId = c.get('userId')
        if(!authorId) {
            return c.json({msg:"user not found"})
        }
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                Content: body.Content,
                published: true,
                authorId: authorId
            }
        })
        return c.json({msg:"Blog Posted" , blog})
    } catch (error) {
        console.log(error)
        c.status(404)
        return c.json({msg:"Something erorr" , error})
    }
})

blogRouter.put('/:id' , async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const { success } = updateBlogSchema.safeParse(body)

    if(!success) {
        c.status(411)
        return c.json({msg:"Check updated Blog Inputs"})
    }
    const authorId = c.get("userId")

    const blog = await prisma.post.update({
        where: {
            id: body.id,
            authorId:authorId
        },
        data: {
            title: body.title,
            Content: body.Content
        }
    })
    
    return c.json({
        msg:"Post Updated",
        blog
    })

})

blogRouter.get('/bulk' , async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany()
    return c.json({blogs})
})

blogRouter.get('/:id' , async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param('id')

    const blog = await prisma.post.findFirst({
        where: {
            id: id
        }
    })
    return c.json(blog , 201)

})







