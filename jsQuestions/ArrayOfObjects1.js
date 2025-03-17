const arr = [
    { framework: 'React.JS', website: 'Paypal' },
    { framework: 'React.JS', website: 'Tesla' },
    { framework: 'Angular', website: 'Google' },
    { framework: 'Vue.JS', website: 'Vue' },
    { framework: 'JavaScript', website: 'inblack67' }
];
// output:-
// [
//     { victim: 'React.JS', count: 2 },
//     { victim: 'Angular', count: 1 },
//     { victim: 'Vue.JS', count: 1 },
//     { victim: 'JavaScript', count: 1 }
// ]

const res = arr.reduce((acc,curr)=>{
    if(!acc[curr.framework]){
        acc[curr.framework] = {victim:curr.framework,count:1}
    }else{
        acc[curr.framework].count = acc[curr.framework].count + 1
    }
    return acc
},{})

console.log(Object.values(res))