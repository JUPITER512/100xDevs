type Input=number|string
function firstEl<Tx>(arr:T[]){
    return arr[0]

}
function secondEl(arr:string[]|number[]){
    return arr[0]

}

const value=firstEl<string>(["abc","def"]);
const value3=firstEl<number>([1,2]);
console.log(value.toUpperCase());
console.log(value3*10)

const value2=secondEl(["abc","def"]);