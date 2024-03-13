function sum(a:number, b:number){
        return a+b;
}
function greeting(name: string,age:number){
    console.log("Hello"+name," Age is "+age);
}

function callbackfunction(fn:()=>void){
setTimeout(fn, 1000);
}