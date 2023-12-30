function square (a){
    return a*a
}
function cube(a){
    return a*a*a
}

function sumOfSqrOrCb(a,b,fun){
    let sq1=fun(a)
    let sq2=fun(b)
    return sq1+sq2;
}
function sumOfSomething(a,b){
    return a+b
}
let ans=sumOfSqrOrCb(2,3,square);
let ans2=sumOfSqrOrCb(2,3,cube);
let ans3=sumOfSomething(square(2),square(3))
let ans4=sumOfSomething(cube(2),cube(3))
console.log(ans);
console.log(ans2);
console.log(ans3);