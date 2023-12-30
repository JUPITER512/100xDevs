

// function sum(a,b){
//     return a+b;
// }
const fs=require('fs')// console.log(sum(1,2))


function onDone(){
    console.log('Before setTimeout');
}
setTimeout(onDone,1000);
setTimeout(onDone,1000);
console.log('After setTimeout');
console.log('Hi there');
// let a=0;
// for(let i=0;i<200;i++){
//     a+=1
// }


let a=1;
console.log(a);
fs.readFile("a.txt", "utf8", function(err,data){
    console.log("Data read from file is ")
    console.log(data);
});

let ans=0;
for(let i=0;i<200;i++){
    ans+=i;
}
console.log(ans);