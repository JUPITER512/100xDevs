// console.log("Starting")
// // console.log(a)


// let a = 1;
// a = 2;
// console.log(a);


// const b = 2;
// // b=3 give error here of const type
// console.log(b);


// let c = 0
// for (let i = 0; i < 1000; i++) {
//     c = i;
// }
// console.log(c);



// let ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 100]
// let ageslength = ages.length;
// for (let i = 0; i < ageslength; i++) {
//     if (ages[i] %= 0) {
//         console.log(ages[i])

//     }
// }


// const personarray=['ali','murtaza','fatima']
// const persongender=['male','male','female']

// const user1={
//     name:'Ali murtaza',
//     gender:'male'
// }
// console.log(user1.name)
// console.log(user1.gender)
// for (let i=0;i<personarray.length;i++){
//     if(persongender[i]=='male'){
//         console.log(personarray[i]+' is male')
//     }
// }


// const objsinarray=[{
//     firstname:'Qasim',
//     gender:'male',
// },{
//     firstname:'Ali Akbar',
//     gender:'male',
//     metaData:{
//         age:2,
//         address:'uae'
//     }
// },
// {
//     firstname:'Fatima',
//     gender:'female',
// }]

// for (let i=0;i<objsinarray.length;i++){
//     if (objsinarray[i].metaData && objsinarray[i].metaData.age === 2) {
//         console.log(objsinarray[i].firstname + ' is male');
//     }

// }


// console.log("\n\n\nFunction Starting\n")
// function sum(a,b){
//     return a+b
// }
// console.log(sum(1,2))






// let sum2=0;
// for (let i=0;i<10000000000000;i++){
//     sum2+=i
// }
// console.log(sum2)


function sum(a,b,fnToCall){
    result=a+b;
    fnToCall(result)
}

function displayResult(data){
    console.log("Sum of result is ",data)
}
function resultInPassiveVoice(data){
    console.log(
        "Result of sum is ",data
    )
}

const ans=sum(1,2,resultInPassiveVoice)


function calculateArithmetic(a,b,type){
    if(type=='add'){
        return a+b;
    }
    if(type=='sub'){
        return a-b;
    }
}
const calculateArithmeticans=calculateArithmetic(1,2,'add')
console.log(calculateArithmeticans)




function greet(){
    console.log("Hello")

}
// setTimeout(greet, 3*1000);
// setInterval(greet, 1*1000);

