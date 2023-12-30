const currentdate=new Date();
console.log(currentdate.getMonth()+1)
console.log(currentdate.getDate())
console.log(currentdate.getFullYear())
console.log(currentdate.getDay())



function calculateSum(){
    let a=0;
    for(let i=0;i<10000000000;i++){
        a=a+1;
    }

    return a;
}

const beforeDate=new Date();
const beforeTimeInMs=beforeDate.getTime();
calculateSum()
const afterDate=new Date();
const afterTimeinMs=afterDate.getTime();
console.log((afterTimeinMs-beforeTimeInMs)/1000) 