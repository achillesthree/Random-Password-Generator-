// Assignment Code
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!', '@', '#', '$', '%', '^','&','*','<','>','?','/','+',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',]; 


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword ();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

  //WHEN the password is generated THEN the password is either displayed in an alert or written to the page
// 
}
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters between 8 - 128 would you like your PW 2B?")); 

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Characters MUST be a number, at least 8 characters and less than 128 characters. Try again.");
    return false;
}

if (confirm("Lowercase Letters in your PW?")) {
  choiceArr = choiceArr.concat (lowerCaseArr);
}

if (confirm("Uppercase Letters in your PW?")) {
  choiceArr = choiceArr.concat (upperCaseArr);
}
if (confirm("Special Characters in your PW?")) {
  choiceArr = choiceArr.concat (specialCharArr);
}
if (confirm("Numbers in your PW?")) {
  choiceArr = choiceArr.concat (numberArr);
}
return true;
}
  // THEN I am presented with a series of prompts for password criteria WHEN prompted for password criteria
  // look up window.Prompt
  
  //  WHEN prompted for password criteria THEN I select which criteria to include in the password 
  // save each window prompt as VAR

  // WHEN prompted for the length of the password THEN I choose a length of at least 8 characters and no more than 128 characters
  // Window.Prompt to ask the user the length of the password "how long do yuo want your password? User enter number- saving this vaule as a VAR"

  // WHEN asked for character types to include in the password THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// Window.Confirm for each charchter type (four different window confirms lower case upper case numbers and special charc- save as VARS as well

//WHEN I answer each prompt THEN my input should be validated and at least one character type should be selected
// Check at least one WC is true (that's why were saving as VARS)

//WHEN all prompts are answered THEN a password is generated that matches the selected criteria
//biggest part of function- concat user selections to the possible charcatres array (that array starts out as empty)

