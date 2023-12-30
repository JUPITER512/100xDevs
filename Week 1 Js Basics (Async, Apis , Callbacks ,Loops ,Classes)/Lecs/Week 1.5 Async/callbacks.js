const fs=require("fs");
function readFIle(){
    console.log("Inide Read FIle")
    return new Promise(function(resolve,reject){
        console.log("Inside Promise:")
        fs.readFile('a.txt','utf-8',function(error,data){
            resolve(data);
        })
    })
}

function printing(data){
    console.log(data)
}

readFIle().then(printing)