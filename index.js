 
var line = []

function takeANumber(array, new_peep) {
 array.push(new_peep)
 return `Welcome, ${new_peep}. You are number ${array.length} in line.`
}
function nowServing(array) {
 if (array.length >0) {
 return `Currently serving ${array.shift()}.`
 }
 return "There is nobody waiting to be served!"
}

function currentLine(line) {
 if (line.length === 0) {
   return "The line is currently empty."
 }
 var str = "The line is currently: "
   for (var i = 0; i < line.length; i++) {
     if (i === line.length - 1){
     str += `${i + 1}. ${line[i]}`
     }
   else{
     str += `${i + 1}. ${line[i]}, `
   }
 }

 return str
}