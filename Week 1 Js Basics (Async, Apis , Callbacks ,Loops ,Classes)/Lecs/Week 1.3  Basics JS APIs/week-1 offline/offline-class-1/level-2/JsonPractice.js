const user={
    name:'Ali',
    age:'23',
    gender:'Male'
}
console.log(user['name'])

const jsonUser='{"name":"Ali","age":23,"gender":"Male"}'
//Json .parse .stringyfy

const users=JSON.parse(jsonUser)
console.log(users)
console.log(users['age'])
const users2={
    name:'Ali Murtaza',
    age:23,
    gender:'Male'
}
const finalString=JSON.stringify(users2)
console.log(finalString)