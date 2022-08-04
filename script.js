// variable to set the min characters and a var that creates and "any" arr which will be completed by user
var characterLength = 8;
var choiceArr = [];

// variables to name our arrays (strings) which hold and corspond to all of the possible user selection criteria 
var specialCharArr = ['!', '@', '#', '$', '%', '^','&','*','<','>','?','/','+',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['0','1','2','3','4','5','6','7','8','9',]; 

// variable to make a button to generate password with a click event that will write PW for user
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// function to write a password with variables to recognize correct prompts to get those prompts
function writePassword() {
  var correctPrompts = getPrompts();
  // fumction to write a pasword text based on the DQS "password"
  var passwordText = document.querySelector("#password");

  // if statement- if the correct prompts gets/cleears/accepts? NPW and GPW then to the PW text value and THAT will be the NPW 
  if (correctPrompts) {
    var newPassword = generatePassword ();
    passwordText.value = newPassword;

    // else (not everything goes through correctly) then an empty password text VALUE
  } else {
    passwordText.value = "";
  }
}

// function to genetrate password with var password to equal user PW incorperating a for loop until specifications are met
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    // used var randomindex with math floor to make integers and a random open () multiplied by user choice of length 
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  // password is returned if all criteria met
  return password;
}

// funtion to get prompts based on the choice array which was made empty up top
function getPrompts() {
  choiceArr = [];
// this was named above in or for loop and parseInt to return a string as a number (for number of characters)
  characterLength = parseInt(prompt("How many characters between 8 - 128 would you like your PW 2B?")); 
  // this function of not a number is a check on the criteria if it's NOT the right less than 8 OR greater than 128 it will return as false and display the alert text in orange and quotes 
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
  

