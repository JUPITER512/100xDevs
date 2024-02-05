const express=require('express');
const expressRateLimiter=require('express-rate-limit')
const app=express();


const rateLimiterUsingThirdParty=expressRateLimiter.rateLimit({
    windowMs:24*60*60*1000,
    max:2,
    message:'You exceed the max number of requests per second',
    standardHeaders: true,
    legacyHeaders: false,
})
function ticketCheckers(req,res,next){
    const ticket=req.query.ticket;
    if(ticket=='free'){
        next();
    }else{
        res.status(403).send('Access Denied');
        return
    }
}
function isOldEnough(req, res, next){
    const age=req.query.age;
    if(age>=14){
        next();
    }else{
        res.status(403).send('Access Denied');
        return
    }
}
app.use(ticketCheckers)
app.use(isOldEnough)
app.use(rateLimiterUsingThirdParty)



app.get('/ride1',(req,res)=>{
    const name=req.query.name;
    res.send(`${name} rode first ride`)
})
app.get('/ride2',(req,res)=>{
    const name=req.query.name;
    res.send(`${name} rode first ride`)
})
app.get('/ride3',(req,res)=>{
    const name=req.query.name;
    res.send(`${name} rode first ride`)
})
app.listen(3000,()=>{
    console.log("Server Started on port 3000")
})