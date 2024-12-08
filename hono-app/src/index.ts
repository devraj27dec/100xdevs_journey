import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  // body , header , query parameters , middlewares , connecting to data
  return c.text('Hello Hono!')
})

// middleware

async function autMiddleware(c:any , next:any) {
  
  if(c.req.header("Authorization")){
    await next()
  }else {
    return c.text("You don't have access")
  }
}

// app.use(autMiddleware)

app.get('/', autMiddleware, async(c) => {
  const body = await c.req.json()
  console.log(body)

  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));
  return c.json({msg: "Hello Hono"})

})

export default app
