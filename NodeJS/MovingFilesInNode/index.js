let fs = require('fs')

fs.rename('readme.txt','folder/readme.txt', err=>{
    if (err) throw err
})
// fs.rename('folder/readme.txt','readme.txt', err=>{
//     if (err) throw err
// })