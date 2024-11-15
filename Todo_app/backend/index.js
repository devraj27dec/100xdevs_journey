const express = require('express');
const dbConnect = require('./config/db');
const Todo = require('./config/model');
const app = express()
const port = 5000;
const cors = require('cors')
const {createTodo}  = require('./config/types')

app.use(express.json())
app.use(cors())

app.get('/' , (req , res)  =>{
    res.send("Hello world")
})

app.post('/todo', async function(req, res) {
    try {
        const createPayload = req.body;
        console.log(createPayload)
        const parsedPaylod = createTodo.safeParse(createPayload)
        console.log(parsedPaylod)
        if (!parsedPaylod.success) {
            return res.status(411).json({
                msg: "Your set the wrong inputs"
            });
        }

        const todo = await Todo.create({
            title: createPayload.title,
            description: createPayload.description
        });

        return res.status(201).json({
            msg: "Todo Created",
            todo
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        return res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }
});


app.get('/todos' , async function (req , res) {
    const todos = await Todo.find({})
    res.json({todos})
})


app.put('/completed' , async function(req , res) {
    const createPayload = req.body
    const parasePayload = createPayload

    if(!parasePayload.success) {
        res.status(411).json({
            msg:"Your set the wrong inputs"
        })
        return
    }

    await Todo.update({
        _id: req.body
    } , {
        completed: true
    })

    res.json({
        msg: "Todo marked Completed"
    })
})

dbConnect
app.listen(port , (req , res) => {
    console.log(`server running at port : ${port}` )
})