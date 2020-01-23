'use strict'

let fs = require('fs')
/*
let text = fs.readFileSync('readme.txt', 'utf8')
console.log(text) */

fs.readFile('readme.txt','utf8',function(err,data){
        if (err) throw err
        console.log(data)
})
console.log('!!!')
fs.readFile('readme.json','utf8',function(err,data){
    if (err) throw err
    console.log(data)
})