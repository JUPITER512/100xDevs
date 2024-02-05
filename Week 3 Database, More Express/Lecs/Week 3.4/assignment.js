const jwt = require('jsonwebtoken');
const zod=require('zod')
const jwtpassword='jwtpassword123@'

const emailSchema=zod.string().email()
const passwordSchema=zod.string().min(6)
function sign(userName,password){
	const userNameResponse=emailSchema.safeParse(userName)
	const passResponse=passwordSchema.safeParse(password)
	if (!userNameResponse.success || !passResponse.success) {return null}
	else{
		const signature=jwt.sign({
			userName
		},jwtpassword)
		return signature
	}
}
token=sign('ali@gmail.com','abcd123')
console.log(token)
function veirfyToken(token){
    const verifyToken=jwt.verify(token,jwtpassword)
    if(verifyToken){
        return verifyToken
    }else{
        return null
    }
}
try{
    console.log(veirfyToken(token))

}catch(e){
    console.log(String(e))
}
function decodeJwt(token)
{
    const decoded=jwt.decode(token)
    if (decoded){
        return true
    }
    else{
        return false
    }
}
console.log(decodeJwt(token))