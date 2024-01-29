const express=require('express');
const app = express();


app.use(express.json())
// app.use(bodyParser.json/())
var users=[{
	name:'Ali Murtaza',
	kidneys:[{
		healthy:false
	}] 
}]

app.get('/',(req,res)=>{
	let MyKidney=users[0].kidneys
		let numberofkidneys=MyKidney.length;
	let numberOfHealthyKidney=0
	for(let i=0;i<MyKidney.length;i++)
	{
		if(MyKidney[i].healthy){
			numberOfHealthyKidney+=1
		}
	}
	let unhealthy=numberofkidneys-numberOfHealthyKidney
	res.send({
		MyKidney,
		numberOfHealthyKidney,
		unhealthy
	})
})
app.post('/post',(req,res)=>{
	console.log(req.body)
	const isHealthy=req.body.isHealthy;
	users[0].kidneys.push({
		healthy:isHealthy
	})
	res.json({
		msg:"Done"
	})
})

app.put('/put',(req,res)=>{
	for (let i=0;i<users[0].kidneys.length;i++){
		users[0].kidneys[i].healthy=true
	}
	res.send("Done")
})

app.delete('/delete',(req,res)=>{
    healthy=true;
    for (let i=0;i<users[0].kidneys.length;i++){
        if (users[0].kidneys.healthy!=true){
                healthy=false
        }
    }
    if(!healthy){
        res.send("Error",404)
    }
	const newKidneys=[];
	for(let i=0;i<users[0].kidneys.length;i++){
	if (users[0].kidneys[i].healthy){
		newKidneys.push({
			healthy:true
		}
		)
	}}
    users[0].kidneys=newKidneys
    res.send("Done")
})
app.listen(3000)

