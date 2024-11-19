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
    const todo = todos.find(t => t.id === req.query.id)
    res.json({
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



app.listen(port , () => {
    console.log(`server running at port ${port}`)
})