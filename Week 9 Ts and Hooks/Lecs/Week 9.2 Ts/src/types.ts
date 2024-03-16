
type User1={
    firstname:string;
    lastname:string;
    age:number;
    email?:string;
}

type User2={
    firstname:string;
    lastname:string;
    age:number;
    email?:string;
    phonenumber?:number;
}

type numberorstring= string | number
type newuser=User1 & User2