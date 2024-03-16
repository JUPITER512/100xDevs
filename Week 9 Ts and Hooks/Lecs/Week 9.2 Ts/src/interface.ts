
interface User{
    firstname:string;
    lastname:string;
    age:number;
    email?:string;
}
interface Person{
    name:string;
    age:number;
    greet(phrase:string):void;
}
class Manager implements Person{
    name:string;
    age:number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    greet(phrase: string) {
        console.log(`greeting ${phrase}`);
    }
}









function isNotLegal(user:User){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}
function greettheuser(user:User){
    console.log("Hello",user.firstname,user.lastname)
}
greettheuser({
    firstname:"abc",
    lastname:"abc",
    age:12
})
isNotLegal({
    firstname:"abc",
    lastname:"abc",
    age:12
})