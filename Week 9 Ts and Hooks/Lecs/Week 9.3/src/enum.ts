enum Direction{
    Up,//0
    Down,//1
    Left,//2
    Right//2
}
function doSomething(keyValue:Direction){
    if(keyValue==Direction.Up){
        console.log("Hello!");
    }
}

doSomething(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Up)