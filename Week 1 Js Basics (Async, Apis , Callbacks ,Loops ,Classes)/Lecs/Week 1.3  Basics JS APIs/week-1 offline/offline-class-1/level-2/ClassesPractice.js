class Animal{
    constructor(name,speaks,legCount){
        this.name=name
        this.speaks=speaks
        this.legCount=legCount
    }

    speak(){
        console.log(this.name+" speaks "+this.speaks+" have "+this.legCount+" legs")
    }
}

let dog=new Animal("dog","bark",4)
let cat=new Animal("cat","meow",4)

dog.speak()
cat.speak()