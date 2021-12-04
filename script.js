// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  let length = window.prompt(
    "enter password between the length of 8 and 128 characters"
  )
  while (length < 8 || length > 128 || isNumeric(length) === false){
    length = window.prompt(
      "enter password between the length of 8 and 128 characters"
    )
  }
  let results = { 
    length:length,
lowercase: confirm ("Do you want to include lowercase letters in your password?"),
uppercase: confirm ("Do you want to include uppercase letters in your password?"),
numeric: confirm ("Do you want to include numbers in your password?"),
special_characters: confirm ("Do you want to include special characters in your password?") 

  }
  console.log (results)
}