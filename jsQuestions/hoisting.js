// hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
// javascript allocates memory even its code is being executed.
// console.log(a);
// var a=99 // undefined
// console.log(hosting());
// function hosting(){
//     console.log("i am from hosting")
// }

function test(a,b){
    console.log("test")
    return a+b
    
}

console.log(test(5,6))
console.log(()=>{test(3,4)})