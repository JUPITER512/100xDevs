function sum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}
function findSumtTill100() {
    console.log(sum(100))
}
function syncSleep(){
    let a=1;
    for(let i=0;i<100000000;i++){
        a+=1;
    }
    return a;
}


// syncSleep()
console.log(syncSleep());
setTimeout(() => {
    findSumtTill100()
}, 1000);
console.log('aaa')