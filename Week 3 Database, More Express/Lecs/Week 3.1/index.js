const express= require('express');
const app=express();

app.get('/health-checkup',(req,res)=>{
    const username=req.headers.username
    const pass=req.headers.password
    const kidneyId=req.query.kidneyId
    if(username!='ali' || pass!='abc'){
    res.status(404).json({
        msg:"Something wrong with your inputs1"
        
    })
    return}
    if (kidneyId!=1 && kidneyId!=2){
        res.status(404).json({
            msg:"Something wrong with your inputs2"
        })
    }


    res.json({
        msg:"Kidney is Fine"
    })


})
app.listen(3000);