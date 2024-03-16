function sum(a:number, b:number):number{
        return a+b;
}
function greeting(name: string,age:number){
    console.log("Hello"+name," Age is "+age);
}

function callbackfunction(fn:()=>void){
setTimeout(fn, 1000);
}

function isLegal(age:number){
    if (age>10){
        return true;
    }else{
        return false;
    }
}


function runafter1s(fn:()=>void,delay:number){
    setTimeout(fn,delay);
}

runafter1s(()=>{
    console.log("Run after")
},1000)