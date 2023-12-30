//get length of string

function getLength(str) {
    console.log(str.length)
}
getLength('Hello How are you')

function findIndexof(str,target){
    console.log("Index of "+target+" in "+str+" is "+ str.indexOf(target))
    console.log("Last Index of "+target+" in "+str+" is "+ str.lastIndexOf(target))
}
findIndexof('Hello How are you y','y')


function getSlice(str,start,end){
    console.log("Original String: "+str)
    console.log("After slice: "+str.slice(start,end))
    // let newStr=""
    // for(let i=0;i<str.length;i++){
    //     if(i>=start && i<=end){
    //         newStr+=str[i]
    //     }
    // }
    
    console.log('After Substring : '+ str.substring(start,end))
    
}
getSlice('Hello World',2,7)

const str='Hello World'
console.log(str.replace('World','JavaScript'))



function splitString(str,separator){
    console.log("Original String: "+str)
    console.log("After split:"+str.split(separator))
}
splitString('Hello World',' ')

const strValue='Hi My Name is Ali Murtaza'
const words=strValue.split(' ')
console.log(words)

const trimStr='     hell    o           '
console.log(trimStr.trim())
console.log(trimStr.toLocaleLowerCase())
console.log(trimStr.toLowerCase())
console.log(trimStr.toLocaleUpperCase())
console.log(trimStr.toUpperCase())