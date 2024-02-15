const express=require('express');
const {createTodo,updateTodo}=require('./types')
const {todo}=require('./database')
const cors = require('cors');

const app=express();
app.use(cors({
	origin: 'http://localhost:5173'
	}));

app.use(express.json())
app.get('/todos',async (req,res)=>{
	const todos= await todo.find({})
	res.json({
		todos
	})
}) 

app.post('/todo', async (req, res) => {
    console.log(req.body)
	const createPayload = req.body;
	console.log(createPayload.title);
	console.log(createPayload.description);
	const parsedPayload = createTodo.safeParse(createPayload);
	if (!parsedPayload.success) {
		res.status(411).send("Invalid Input");
		return;
	} else {
		await todo.create({
			title: createPayload.title,
			description: createPayload.description,
			completed: false
		});
		res.json({
			message: "Todo created successfully"
		});
	}
});
app.put('/completed',async(req,res)=>{
	const updatePayload=req.body
	const parsedPayload=updateTodo.safeParse(updatePayload)
	if(!parsedPayload.success){
		res.status(411).json({
			msg:"You sent wrong inputs"
		})
		return
	}else{
		await todo.findByIdAndUpdate(req.body.id, { completed: true });

		res.json({
			msg:"Todo marked as completed"
		})
	}
})
app.put('/uncompleted',async(req,res)=>{
	const updatePayload=req.body
	const parsedPayload=updateTodo.safeParse(updatePayload)
	if(!parsedPayload.success){
		res.status(411).json({
			msg:"You sent wrong inputs"
		})
		return
	}else{
		await todo.findByIdAndUpdate(req.body.id, { completed: false });

		res.json({
			msg:"Todo marked as completed"
		})
	}
})
app.put('/edit/:id', async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    const updatePayload = req.body;
    const title = req.body.title;
    const description = req.body.description;
    const parsedPayload = createTodo.safeParse(updatePayload);
    
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        });
        return;
    } else {
        try {
            await todo.findByIdAndUpdate(req.params.id, { title: title, description: description });
            res.json({
                msg: "Todo Update as completed"
            });
        } catch (error) {
            console.error('Error updating todo:', error);
            res.status(500).json({
                msg: "Internal server error"
            });
        }
    }
});





app.delete('/delete',async(req,res)=>{
	const updatePayload=req.body
	const parsedPayload=updateTodo.safeParse(updatePayload)
	if(!parsedPayload.success){
		res.status(411).json({
			msg:"You sent wrong inputs"
		})
		return
	}else{
		await todo.findByIdAndDelete(req.body.id);

		res.json({
			msg:"Todo Deleted Successfully"
		})
	}
})

app.use((err,req,res,next)=>{

	res.status(500).send("Error: " + err.message)
	return
})
app.listen(8080,()=>{
	console.log("Backend server Listening on Port 8080");
})
