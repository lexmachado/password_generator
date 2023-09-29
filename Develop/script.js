// Assignment Code
var generateBtn = document.querySelector("#generate");
function getRandomValueFromArray(array) {
  var Numbers=Math.floor(Math.random() *  array.length);
  array
  var generateBtn = document.querySelector("#generate");

function getRandomValueFromArray(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}
if (isNaN(howManyCharacters) || howManyCharacters < 8 || howManyCharacters > 30) {

}
var password = ""
function generatePassword() {
  var howManyCharacters= parseInt(prompt("how many characters do you want to use in your password?"));
  var SpecialCharacters= confirm("Do you want special case characters?");
  var LowerCharacters= confirm("Do you want to use lower case characters?");
  var Numbers= confirm ("do you want numbers?");
  var UpperCharacters= confirm("Do you want upper case characters?");
  
  var SpecialCharacters= ["!","@","#","$","%","^","&","*","(",")","?","<",">"];
  var UpperCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var LowerCharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var Numbers=["0","1","2","3","4","5","6","7","8","9"];
  var characters=[];
  
  if (SpecialCharacters) {
    characters = characters.concat(SpecialCharacters);
  }
  if (UpperCharacters) {
    characters = characters.concat(UpperCharacters);
  }
  if (LowerCharacters) {
    characters = characters.concat(LowerCharacters);
  }
  if (Numbers) {
    characters = characters.concat(Numbers);
  }
}

if (characters.length === 0) {  return ""; }

var password = "";
  for (var i = 0; i < howManyCharacters; i++) {
    var randomChar = getRandomValueFromArray(characters);
    password += randomChar;
  }

  return password; {
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  



var generatePassword;
console.log;

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

}
