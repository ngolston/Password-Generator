// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assignment Code
var numbers = [1,2,3,4,5,6,7,8,9,0]
var symbols = "`!@#$%^&*()_+"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var upperLetters = lowerLetters.toUpperCase()
// console.log(upperLetters)
var splitLowerSymbols = symbols.split("")
var splitLowerLetters = lowerLetters.split("")
var splitUpperLetters = upperLetters.split("")
// console.log(splitLowerLetters)

var all = []

var character = []
var password = []
var passwordText = []

generateBtn.addEventListener("click", function(){
  // Password Length
  var passwordLength = window.prompt("Choose a password length")

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
    return generatePassword();
  }
  
  var pickedNumbers = window.confirm("Confirm if you want Numbers")
// console.log(pickedNumbers)
  var pickedUpperLetters = window.confirm("Confirm if you want Upper Letters")
// console.log(pickedUpperLetters)
  var pickedLowerLetters = window.confirm("Confirm if you want Lower Letters")
// console.log(pickedLowerLetters)
  var pickedSymbols = window.confirm("Confirm if you want Symbols")
// console.log(pickedSymbols)
// console.log(passwordLength)

  if (pickedNumbers) {
    character = character.concat(numbers); }
  // console.log(character)
  if (pickedUpperLetters) { character = character.concat(splitUpperLetters); }
  // console.log(character)
  if (pickedLowerLetters) { character = character.concat(splitLowerLetters); }
  // console.log(character)
  if (pickedSymbols) { character = character.concat(splitLowerSymbols); 
  }
  
  if (passwordLength.length)
    for (i = 0; i < passwordLength; i++) {
      var randomCharacter = character[Math.floor(Math.random() * character.length)];

      // console.log(randomNum)
      password.push(randomCharacter); 
    }
    password.join("");
    // password.join("");
  passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

});


