const fs=require('fs')
fs.readFile('a.txt','utf-8',function(error,data){
    console.log(data);
})
let a=0;
console.log('Hello World')
for (let i=0;i<10;i++){
    a+=1
}
console.log(a)