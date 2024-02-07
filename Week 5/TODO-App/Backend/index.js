const express = require('express')
const app = express()
const {todo} = require('./db/db')
const cors = require('cors')
const { createTodo , updateTodo} = require('./Types');
app.use(express.json())
app.use(cors())
app.post("/todo",async (req,res)=>{
    try {
        const createPayload = req.body;
        const ParserdPayload = createTodo.safeParse(createPayload);
        if(!ParserdPayload){
            res.json({
                msg: 'You sent Wrong Input to Api Point'
            })
            return;
        }
    
        await todo.create({
            title:createPayload.title,
            description : createPayload.description,
            completed:false
        })
        res.json({
            msg: 'Todo is create Successfully'
        })
    } catch (error) {
        res.json({
            msg: "Facing some error "+error
        })
    }
    
})

app.get("/todos", async (req,res)=>{
    const todos = await todo.find({});
    res.send({
        todos:todos
    })
})

app.post("/completed",async (req,res)=>{
    try {
    const payload = req.body;
    const parsedPayload = updateTodo.safeParse(payload);
    if(!parsedPayload){
        res.json({
            msg: 'You sent Wrong Input to Api Point'
        })
        return;
    }
    await todo.findOneAndUpdate(
        { _id: req.body.id },
        { $set: { completed: true } },
        { new: true }
    );
    res.json({
        msg:'Todo markes as completed'
    })
    } catch (error) {
        res.json({
            msg:'Facing some errors'+error
        })
    }
})

app.post('/delete',async(req,res)=>{
    try {
        const payload = req.body;
        const parsedPayload = updateTodo.safeParse(payload);
        if(!parsedPayload){
            res.json({
                msg: 'You sent Wrong Input to Api Point'
            })
            return;
        }
        await todo.findOneAndDelete({
            _id:req.body.id
        })
        res.json({
            msg:'Todo Deleted Sucessfully'
        })
    } catch (error) {
        res.json({
            msg:'Facing some errors'+error
        })
    }
})

const PORT = 3000
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})