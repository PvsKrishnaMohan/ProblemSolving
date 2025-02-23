const scores = [
    { name: "Alice", subject: "Math", score: 85 },
    { name: "Bob", subject: "Math", score: 90 },
    { name: "Charlie", subject: "Science", score: 78 },
    { name: "David", subject: "Science", score: 88 },
    { name: "Eve", subject: "Math", score: 76 },
    { name: "Frank", subject: "Science", score: 95 }
];
//output should be
// {
//   Math: { totalScore: 251, averageScore: 83.67 },
//   Science: { totalScore: 261, averageScore: 87 }
// }
const emp = {}
const res = scores.reduce((acc,current) => {
  if(!acc[current.subject]){
    acc[current.subject] = {totalScore: 0, count: 0}
  }
    acc[current.subject].totalScore = acc[current.subject].totalScore + current.score
    acc[current.subject].count = acc[current.subject].count + 1
  
  return acc
},{})
console.log(res)

// object methods
const a1 = Object.keys(res)
const a2 = Object.values(res)
const a3 = Object.entries(res)
  console.log(a1)
// console.log(a2)
// console.log(a3)

const pm = scores.sort((a,b)=>a.score-b.score)
console.log(pm)



