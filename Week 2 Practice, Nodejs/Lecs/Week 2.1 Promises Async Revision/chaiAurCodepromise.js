const promise1 = new Promise(function (resolve, reject) {
    //Do an async task in promise
    //DB Call
    //CryptoGraphy Related
    //Network Call
    setTimeout(() => {
        console.log("Async Task is complete");
        resolve();
        // reject();
    }, 2000);
})

promise1.then(() => {
    console.log('Inside Promise is Complete')
}).catch((error) => {
    console.log("Error: " + error)
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 is complete");
        resolve()
    }, 2000);
}).then(() => {
    console.log('Inside Promise 2 is Complete')
}).catch((error) => {
    console.log("Error 2: " + error)
})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 3 is complete");
        resolve({ data: 'Data', email: "Hello@gmail.com" })
    }, 3000);
})
promise3.then((data) => {
    console.log("Data: " + data.data, data.email)
}).catch((error) => {

})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside fourth promise 4")
        let error = true
        if (!error) {
            resolve({ username: "Ali Murtaza", passWord: "123123" })
        } else {
            reject('Error: Something went Wrong')
        }
    }, 4000);
})
promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log("UserName" + username)
    })
    .catch((error) => {
        console.log("Error")
    })
    .finally(() => {
        console.log("Promise is Either resolve or reject")
    })



const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside fourth promise 4")
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", passWord: "123" })
        } else {
            reject('Error: JAVASCRIPT went Wrong')
        }
    }, 4000);
})


async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response)
    }
    catch (error) {
        console.log("Error: " + error)
    }
}
consumePromise5()

// async function getAllUsers(){
//     try{

//         const fetchpromise= await fetch("https://jsonplaceholder.typicode.com/users")
//         const data=await fetchpromise.json()
//         console.log(data)
//     }catch(error){
//         console.log("Error: " + error)
//     }
// }
// getAllUsers()



const fetchpromise= fetch("https://jsonplaceholder.typicode.com/users")
fetchpromise
.then((data)=>{return data.json()})
.then((response)=>{console.log(response)})
.catch((error)=>{console.log("Error: " +error)})