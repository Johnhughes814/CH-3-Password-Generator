// Assignment code here
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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
    "Choose a number between 8 and 128 characters for the length of your password."
  );
  while (length < 8 || length > 128 || isNumeric(length) === false) {
    length = window.prompt(
      "Please choose a number between 8 and 128 characters for the length of your password."
    );
  }
  let results = {
    length: length,
    lowercase: confirm(
      "Do you want to include lowercase letters in your password?"
    ),
    uppercase: confirm(
      "Do you want to include uppercase letters in your password?"
    ),
    numeric: confirm("Do you want to include numbers in your password?"),
    special_characters: confirm(
      "Do you want to include special characters in your password?"
    ),
  };

  if (
    results.lowercase === false &&
    results.uppercase === false &&
    results.numeric === false &&
    results.special_characters === false
  ) {
    alert("Must select at least one character type");
  }

  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (results.special_characters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (results.numeric) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters
  if (results.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (results.uppercase) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  console.log(results);
  for (let i = 0; i < guaranteedCharacters.length; i++) {
  result.push(guaranteedCharacters[i])
  }
  var charactersLeftToAdd = results.length-guaranteedCharacters.length
  console.log (charactersLeftToAdd)
  // Make a for loop from 0 to charactersLeftToAdd
  // Inside for loop you're going to select a random element from possible characters
  // Push that random element into the result array
  // Change result array into a string
  // Use the join method
  // Return the string result
  return result;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}
