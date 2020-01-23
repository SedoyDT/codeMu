for (let i =1;i<=10;i++){
    console.log(i)
}
console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
console.log('Every second output !');
let i =0;

setInterval(function(){
  //  console.log("!")
},1000)
console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
let date = new Date()

setInterval(function(){
    // console.log(date.getHours()+" "+date.getMinutes()+" "+date.getSeconds())
    // console.log(date.toTimeString())
    // console.log(date.toLocaleTimeString())

},1000)
console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
let v= 1

setInterval(function(){
    // console.log(v++)
    console.log(++v)
},1000)