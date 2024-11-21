const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

const todos = [{
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  }, {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  }, {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,
  
  }, {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  }, {
  
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
}]

app.get('/todo' , (req , res) => {
  const id = parseInt(req.query.id, 10);
  const todo = todos.find(t => t.id === id)
  console.log(todo)
  res.json({
    msg:"todos find",
    todo
  })
})

app.get('/todos' , (req ,res) => {
    const randomTodos = []
    for (let i = 0; i < 5; i++) {
        if(Math.random() > 0.5) {
          randomTodos.push(todos[i])
        }
    }
    res.json({
        todos:randomTodos,
    })
})

app.get('/sum' , (req , res) => {
  const a = parseInt(req.query.a)
  const b = parseInt(req.query.b)
  const sum = a + b
  res.send(sum.toString())
})


app.get("/interest", (req, res) => {
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({
    total: total,
    interest: interest,
  })

});


function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messages: getRandomNumber(10),
    notifications: getRandomNumber(10)
  })

})
app.listen(port , () => {
    console.log(`server running at port ${port}`)
})