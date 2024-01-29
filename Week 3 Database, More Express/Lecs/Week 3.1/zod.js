const zod=require("zod");
function validateForm(arr){
    const arrSchema=zod.array(zod.string());
    const response=arrSchema.safeParse(arr)
    console.log(response['success']);
}
function validateObject(obj){
    const objSchema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(9)
    })
    const validate=objSchema.safeParse(obj)
    console.log(validate.success)
}
validateForm(['1','2','3','4'])
validateObject({
    email:"abc@example.com",
    password:"1m231,1213123"
})