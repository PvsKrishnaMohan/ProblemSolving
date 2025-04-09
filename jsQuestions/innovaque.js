const myStr= "Mohann"

function MycustomFun(myStr) {
    let count = 1
    const checKDup = myStr.split("").reduce((acc,curr)=>{
        if(!acc[curr]){
            acc[curr]= count
        }else{
            acc[curr] = count+1
        }
        return acc;
    },{})
    
    const res = (Object.values(checKDup))
    const IsUnique = res.find((item)=> item > 1)
    if(IsUnique){
        const res = Object.fromEntries(Object.entries(checKDup).filter(([key,value]) =>  value>1))
        return res
     
    }else{
        let empArr = ""
        for(let letter of myStr){
            empArr= letter+empArr
        }
        return empArr
    }
}

const result = MycustomFun(myStr)
console.log(result)

