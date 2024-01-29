const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
    let flag=false
    for (let i=0;i<ALL_USERS.length;i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password==password) {
            flag= true;
        }
    }
    return flag;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  console.log(token)

  try {
    const decoded = jwt.verify(token, jwtPassword);
    console.log(decoded)
    const username = decoded.username;
    console.log(username)
    let listofusers=ALL_USERS.filter((user)=>{
        if(username==user.username){
            return false
        }
        else{
            return true
        }
    })
    res.json({
        users:listofusers
    })
    } 
    catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)