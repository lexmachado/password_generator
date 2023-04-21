// Assignment Code
var generateBtn = document.querySelector("#generate");
function getRandomValueFromArray(array) {
  var randomNum=Math.floor(Math.random() *  array.length);
  array
  
}
var password = ""
function generatePassword() {
  var howManyCharacters=window.confirm("how many characters do you want to use in your password?");
  var SpecialCharacters=window.confirm("Do you want special case characters?");
  var LowerCharacters=window.confirm("Do you want to use lower case characters?");
  var Numbers=window.confirm ("do you want numbers?");
  var UpperCharacters=window.confirm("Do you want upper case characters?");
  
  var characterSpecial= ["!","@","#","$","%","^","&","*","(",")","?","<",">"];
  var UpperCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var Lowercharacters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var toNumbers=["0","1","2","3","4","5","6","7","8","9"];
  var characters=[];
  if (howManyCharacters) {LowerCharacters, UpperCharacters,Numbers, SpecialCharacters };
  if(SpecialCharacters && LowerCharacters || UpperCharacters);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  const length = 10;
  for (var i = 0; i <= length; i++) {
    let random = writePassword {
      getRandomValueFromArray () * characters.length
    };
  }
  generatePassword.innertext = pass;
  passwordText.value = password;

}
var generatePassword;
console.log;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); { getRandomValueFromArray};


