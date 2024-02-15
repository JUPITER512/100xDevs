const moongose=require('mongoose');
require('dotenv').config()
const mongoDbUri=process.env.MONGODB_URI
console.log(mongoDbUri)
moongose.connect(mongoDbUri)
const todoSchema=moongose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo=moongose.model('todos',todoSchema)
module.exports={
    todo
}