const axios=require('axios')
function main(){
    fetch("https://sum-server.100xdevs.com/todos").then(data=>{
        return data.json()
    }).then(d=>{
        console.log(d);

    })
}


async function main2(){
    const response =await fetch("https://sum-server.100xdevs.com/todos")
    const data =await response.json();

    console.log(data);
}
async function main3(){
    const response =await axios.get("https://sum-server.100xdevs.com/todos")
    
    console.log(response.data);
}


function main4(){
    fetch(" https://httpdump.app/dumps/97be7c33-0be6-4c2a-bca1-e60556d341de?a=b",{
        method:"POST",
        headers:{
            "Username":"Ali",
            "password":"1212",
            Authorization:"Bearer 123123"
        },
        body:JSON.stringify({
            "data":"data1",
            "data2":"data2",
            "data3":"data3",
        })
    }).then(response=>{
        return response
    }).then(r=>{
        console.log(r)
    })
}

main4()