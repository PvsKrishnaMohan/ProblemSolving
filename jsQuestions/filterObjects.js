const data = { a: 5, b: 12, c: 8, d: 20 };
// Expected Output:
// { b: 12, d: 20 }

const res = Object.fromEntries(Object.entries(data).filter(([key,value])=>value>10))
console.log(res)
