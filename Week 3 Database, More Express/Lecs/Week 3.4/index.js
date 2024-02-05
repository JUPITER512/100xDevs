const jwt = require('jsonwebtoken');
const value = {
    name: "Alu",
    accountnum: 1231231
};

// Use jwt.sign() instead of jwt.generate()
const token = jwt.sign(value, '123123123' , {expiresIn:"1m"}); // Replace 'your-secret-key' with your actual secret key
console.log(token);

function verifytoken() {
    const verification=jwt.verify(token,'123123123')
    console.log(verification)
}
verifytoken()