let fs= require('fs')

// fs.readFile('readme.txt','utf8',(err,data) =>{
//   if (err) throw err

//   let result = data 
//   fs.writeFile('readme.txt',result, (err)=>{
//       if (err) throw err;
//       console.log('done');
//   })
// })
console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');

// fs.readFile('readme.txt','utf8',(err,data) =>{
//     if (err) throw err
  
//     let result = data + " Запись в конец файла " 
//     fs.writeFile('readme.txt',result, (err)=>{
//         if (err) throw err;
//         console.log('done');
//     })
//   })
  console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
  // * Прочитаем файл и разобьем содержимое на сиволы и запишем каждый симфол в отдельный файл
  fs.readFile('readme.txt','utf8',(err,data) =>{
    if (err) throw err
    
        let digits = data.split('');
        //console.log(digits)
        for (digit of digits){
    
    fs.writeFile('digits/'+digit+'.txt',digit*digit, (err)=>{
        if (err) throw err;
         console.log('done');
    })}
  })
  console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
 fs.readFile('readme.txt','utf8', (err,data) => {
     if (err) throw err

     let result = data

     fs.writeFile('newFile.txt',result,err =>{
     if (err) throw err
      console.log('done')
     })
 })
 console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
 fs.readFile('textFile.txt','utf8', (err,data) => {
     if (err) throw err

     let result = data + " текст в конце "
     fs.writeFile('textFile.txt',result, err=>{
         console.log('done')
     })
 })
 console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
 fs.readFile('number.txt','utf8', (err,data) =>{
     if (err) throw err

     let result = data * data
     fs.writeFile('number.txt',result,err => {
         if (err) throw err

         console.log('done')
     })
 })
 console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>');
 fs.readFile('digits.txt','utf8',(err,data) =>{
     if (err) throw err

     let result = data.split(',')
     let sum =0
     for (let i =0; i<result.length;i++){
         sum +=result[i]
         
     }
     let res =(sum/result.length)
     fs.writeFile('result.txt',res, err=>{
         console.log('success')
     })
 })