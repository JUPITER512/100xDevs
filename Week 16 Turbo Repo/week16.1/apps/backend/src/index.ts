import express from "express";
import {URL} from '@repo/common/configs'
const app= express();
app.get('/api/',(req,res)=>{
    res.json("Hello, world!");
})
app.listen(3000)