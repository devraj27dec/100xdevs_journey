import { Hono } from 'hono'
import { userRouter } from './route/userRoute'
import { blogRouter } from './route/blogRoute'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET:string
  },
  Variables: {
    userId: string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route("/api/v1/user" , userRouter)
app.route("/api/v1/blog" , blogRouter)



export default app