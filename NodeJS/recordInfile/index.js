let fs = require('fs')
fs.writeFile('data.txt','!!!',(err)=>{
    if (err) throw err
})

let obj = {name: 'Tolya', lastName: "Frolov" }
fs.writeFile('data.json',(JSON.stringify(obj)),(err)=>{
    if (err) throw err
})
fs.readFile('data.json','utf8', function(err,data){
    if (err) throw err
    console.log(data)
    console.log(data.length)
  
let answer = JSON.parse(data)
console.log(answer)
console.log(answer.name)
console.log(answer.lastName)
console.log(answer['name'])
console.log(answer["lastName"])
})
let arr = ["name","name1","name2"]
for (let i =0;i<arr.length;i++){
    fs.writeFile(arr[i],arr[i],(err)=>{
        if (err) throw err
    })
}
