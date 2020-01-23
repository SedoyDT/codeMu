function square(num){
   if (check(num)) return num * num
   else null
}
function cube(num){
   
    if (check(num)) return num * num
   else null
}
function check(num){
    if (num > 0) return true
    else return false
}
function cube(num){
   
    if (check(num)) return num * num
   else null
}
function qua(num){
   
    if (check(num)) return num * num * num * num
   else null
}

exports.square = square
exports.cube = cube
exports.qua = qua