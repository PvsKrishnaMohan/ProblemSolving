const userAges = { John: 25, Alice: 30 };

// Expected Output:
// { John: '25', Alice: '30' }
const res = Object.fromEntries(Object.entries(userAges).map(([key,value])=>[key , value.toString()]))
console.log(res)

// Create a list of items that can be reordered via drag-and-drop using HTML Drag API or libraries like react-beautiful-dnd.
// Time-Saver Tip: Provide starter boilerplate or just ask for logic functions (like onDragEnd()).

const arr = [ {id:1}, {id:2}, {id:3} ]
const re1s = arr.find((item) => item.id===2);
console.log(re1s)