// function myOwnTimeOut(fn,duration) {
//     setTimeout(fn, duration);
// }
// myOwnTimeOut(()=>{
//     console.log("Hello world!");
//     myOwnTimeOut(()=>{
//         console.log("Hello world!");
//     },3000);
// },2000)


// setTimeout(() => {
//     console.log("Hello world!");
//     setTimeout(() => {
//         console.log("Hello world!")
//     }, 2000);
// }, 1000);


function myOwnTimeOut(duration) {
    let p =new Promise((resolve)=>{
        setTimeout(resolve, duration);
    })
    return p;
}

let promisep=myOwnTimeOut(2000);
console.log(promisep)
promisep.then(function(){
    console.log("Hello world!");
})


// waitFor(1000)
// console.log("Hello world!");
// waitFor(2000)
// console.log("Hello world!");
// waitFor(3000)
// console.log("Hello world!");