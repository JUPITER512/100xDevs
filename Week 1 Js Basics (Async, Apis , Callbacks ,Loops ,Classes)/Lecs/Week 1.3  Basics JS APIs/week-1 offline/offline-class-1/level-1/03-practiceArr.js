const arr=[1,3,2];
arr.push(4)
console.log("Push "+arr);
arr.pop();
console.log("POP "+arr);
arr.unshift(0)
console.log("unShift "+arr);
arr.shift();
console.log("shift "+arr);
const arr2=[1,2,3,4,5];
let newconcatarr=arr.concat(arr2)
console.log("Concat " +newconcatarr);


function logthng(str){
    console.log(str);
}
arr.forEach(logthng)



//callbacks followed by map filter,find,sort


