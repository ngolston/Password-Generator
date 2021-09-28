// Steps to take
// 1. When I click on the generate button start script
// 
// 2. take all numbers and randomize them
// 3. show random numbers in box


// Assignment Code
var numbers = [1,2,3,4,5,6,7,8,9,0]
var symbols = "`!@#$%^&*()_+"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = lowerLetters.toUpperCase()
// console.log(upperLetters)
var splitLowerSymbols = symbols.split("")
var splitLowerLetters = lowerLetters.split("")
var splitUpperLetters = upperLetters.split("")
console.log(splitLowerLetters)

var all =[]

var char = []
var password = []

var passwordLength = window.prompt("Chose a password length")
var pickedNumbers = window.confirm("Confirm if you want Numbers")
// console.log(pickedNumbers)
var pickedUpperLetters = window.confirm("Confirm if you want Upper Letters")
// console.log(pickedUpperLetters)
var pickedLowerLetters = window.confirm("Confirm if you want Lower Letters")
// console.log(pickedLowerLetters)
var pickedSymbols = window.confirm("Confirm if you want Symbols")
// console.log(pickedSymbols)
// console.log(passwordLength)

all = [pickedNumbers,pickedUpperLetters,pickedLowerLetters,pickedSymbols]

for (i = 0; i < all.length; i++){
  if (all[i] === true){
    char.concat(all[i])
  }
}

for (i = 0; i < passwordLength; i++){
  var randomChar = char[Math.floor(Math.random() * char.length)];


  // console.log(randomNum)
  password.push(randomChar)
 


}
window.alert("Password " + password.join(""))