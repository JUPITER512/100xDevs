const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const port =3010


app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/route_handler',(req,res)=>{
    res.send("<h1><b>Hello World</b></h1>")
})
app.post('/convo',(req,res)=>{
    console.log(req.headers["authorization"])
    console.log(req.body)
    res.send("G Bhai")
})
app.listen(port,()=>{
    console.log('listening on port',port);
});