//write basic express boilerplate code
// with express.json() middlewar
const express = require('express');
const { createTodo } = require('./types');
const {todo}=require('./db');
const app=express();
const cors=require('cors');
const port = 3000
app.use(cors());



app.use(express.json());

// body{
//     title:String,
//     description:string
// }
app.post('/todo', async function(req,res){
    const createPayLoad=req.body
    const parsePayload=createTodo.safeParse(createPayLoad);
    if (!parsePayload.success) {
      res.status(411).json({
        msg:"You Send the wrong input"
      })
      return
    }
    await todo.create({
      title:createPayLoad.title,
      description:createPayLoad.description,
      completed:false
    })
    res.json({
      msg:"TODO CREATED"
    })
})
app.get('/todos',async function(req,res){
    const todos=await todo.find({
    })
    console.log(todos)
    res.json({
      todos
    })
})

app.put('/completed',async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updatePayload.safeParsePar(updatePayload)
    if (!parsePayload.success) {
      res.status(411).json({
        msg:"You Send the wrong input"
      })
      return
    }
    await todo.update({
      _id:req.body.id
    },{
      completed:true
    })


    res.json({
      msg:"TODO MARKED AS COMPLETED"
    })
})
  
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })