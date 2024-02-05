const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '1234';
const connectionString = "mongodb+srv://alimurtaza:alimurtaza123@cluster0.bn8dnvi.mongodb.net/user_Data";
const app=express();

app.use(express.json());

try {

  mongoose.connect(connectionString);

const userSchema = new mongoose.Schema({ name: String, email: String, password: String });
  const User = mongoose.model('users', userSchema);
    app.post('/sign-up',async (req,res)=>{
    const userName=req.body.username
    const password=req.body.password
    const name=req.body.name
    const existingUsers=await User.findOne({email:userName})
    if (existingUsers){
      res.status(400).send('Email already exists')
      return
    }
    const user = new User({
      email: userName,
      password: password,
      name: name
    });
    await user.save()
    res.status(200).send('User added in db')
  })
  
app.use((err,req,res,next)=>{
  if (err){
    res.status(500).send("Error Occured in server")
  }
})

} catch (error) {
  console.error('Error connecting to MongoDB:', error.message);
}

app.listen(3000,()=>{
console.log("Server Started on port 3000");
})
// const user=mongoose.model("User",{
// name:String,
// username:String,
// password:String
// })
// const app=express()
// app.use(express.json())
// function userExists(userName,passowrd){

// }
// app.post("/signin", async function (req, res) {
// const username = req.body.username;
// const password = req.body.password;

// if (!userExists(username, password)) {
// return res.status(403).json({
// msg: "User doesnt exist in our in memory db",
// });
// }

// var token=twt.sign({username: username}, jwtPassword)
// return res.json({
// token,
// });
// });




// app.get("/users", function (req, res) {
// const token = req.headers.authorization;
// try {
// const decoded = jwt.verify(token, jwtPassword);
// const username = decoded.username;
// } catch (err) {
// return res.status(403).json({
// msg: "Invalid token",
// });
// }
// });
// app.listen(3000,()=>{
// console.log("App Started!")
// })
