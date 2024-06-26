const { createTodo, updateTodo, deleteTodo } = require('./types')
const { todo } = require('./db') 
const cors = require('cors')
const express = require('express')

const app = express();
console.log("Server Started");

app.use(express.json());
app.use(cors())

app.post('/todo', async function(req, res){ 
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        msg: "Todo Created"
    })
})
app.get('/todos', async function (req, res) {
    const todos = await todo.find({})
    res.json({
        todos
    })
})
app.put('/completed', async function(req, res){ 
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
    }
    await todo.updateOne(
        { _id: req.body.id},
        {completed: true}
    )
    res.json({
        msg: "Todo marked as completed"
    })
})
app.delete('/delete', async function (req, res) {
    const deletePayload = req.body
    const parsedPayload = deleteTodo.safeParse(deletePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    await todo.deleteOne(
        {_id: req.body.id}
    )
    res.json({
        msg: "Data deleted successfully!"
    })
})
app.listen(3000)