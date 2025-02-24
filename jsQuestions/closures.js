// closures

// function returning along with its lexical scope bundled together is closure
function OuterFun() {
    let z = 9;
    function inner() {
        console.log(z);
    }
    return inner;
}

const res = OuterFun(); // Call OuterFun to get the inner function
console.log(res);
res()

// uses
//👉 used in currying
//👉 setTimeuts
//👉  for iterators
//👉 used for memorization
//👉 maintaining state for async world
