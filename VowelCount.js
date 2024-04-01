var str = prompt("Enter Words...")
const reg = /[aeiou]/gi
let char = str.match(reg)
console.log(char.join(','));
console.log(char.length)
