const express=require("express");
const zod=require("zod")
const app=express();
app.use(express.json());
const schema=zod.array(zod.number())
// const eschema=zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("Pak").or(zod.literal("US"))
//     kidneys:zod.array(zod.string())
// })
app.post('/health-checkup',(req,res,next)=>{
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys)
    if(!response.success){
        res.status(404).json({
            message:"ErrorOccur"
        })
    }
    else{
        res.send({
            response
        })
    
    }
    // const kidneyLength=kidneys.length;.
   
    // res.send(
    //     "You have" + kidneyLength + " kidneys"
    // )


    res.send(
        response)
})

//global catch
// app.use((err,req,res,next)=>{
//     res.status(500).json({
//         Error:"Some Error Occur"
//     })
// })
app.listen(3000)
