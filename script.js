// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "`", "+", "=", "-", "_", "[", "]", "{", "}", "|", "'", "/"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];



function generatePassword() {
  var password = [""];
  //Password length Prompt
  var passLength = prompt("How long would you like your password? Please type number between 8 and 128");
  if (passLength === null) { 
    return;
  } 
  else if (passLength < 8 || passLength > 128) {
    alert("Password Length needs to be between 8 and 128, please try again.");
    return
  }

  //Setting the character list to randomly select from
  var characterList = [""];

  // Uppercase Prompt
  var upperChoice = prompt("Your Password will be " + passLength + " characters long.\nWould you like to use Uppercase Letters in your Password? Please type yes or no.");
  upperChoice = upperChoice.toUpperCase();
  if (upperChoice === null) { 
    return;
  } 
  else if (upperChoice !== "NO" && upperChoice !== "YES") {
    alert("Please type yes or no to decide if you would like Uppercase Letters in your password. Please try again.");
    return
  }
  // Lowercase Prompt
  if (upperChoice === "NO") {
    var lowerChoice = prompt("Your Password will not include Uppercase Letters.\nWould you like to use lowercase letters in your Password? Please type yes or no.");
  }
  else if (upperChoice === "YES") {
    lowerChoice = prompt("Your Password will include Uppercase Letters.\nWould you like to use lowercase letters in your Password? Please type yes or no.");
    // Adding uppercase letters to characterList
    characterList = characterList.concat(alphaUpper);
  }
  lowerChoice = lowerChoice.toUpperCase();
  if (lowerChoice === null) { 
    return;
  } 
  else if (lowerChoice !== "NO" && lowerChoice !== "YES") {
    alert("Please type yes or no to decide if you would like Numbers in your password. Please try again.");
    return
  }


  // Number Prompt
  if (lowerChoice === "NO") {
    var numberChoice = prompt("Your Password will not include Lowercase Letters.\nWould you like to use numbers in your Password? Please type yes or no.");
  }
  else if (lowerChoice === "YES") {
    numberChoice = prompt("Your Password will include Lowercase Letters.\nWould you like to use numbers in your Password? Please type yes or no.");

    // Adding lowercase letters to characterList
    characterList = characterList.concat(alphaLower);
  }

  numberChoice = numberChoice.toUpperCase();
  if (numberChoice === null) { 
    return;
  } 
  else if (numberChoice !== "NO" && numberChoice !== "YES") {
    alert("Please type yes or no to decide if you would like Numbers in your password. Please try again.");
    return
  }
  
  // Special Character Prompt
  if (numberChoice === "NO") {
    var specialChoice = prompt("Your Password will not include Numbers.\nWould you like to use Special Characters in your Password? Please type yes or no.");
  }
  else if (numberChoice === "YES") {
    specialChoice = prompt("Your Password will include Numbers.\nWould you like to use Special Characters in your Password? Please type yes or no.");

    // Adding numbers to characterList
    characterList = characterList.concat(numbers);
  }

  specialChoice = specialChoice.toUpperCase();
  if (specialChoice === null) { 
    return;
  } 
  else if (specialChoice !== "NO" && specialChoice !== "YES") {
    alert("Please type yes or no to decide if you would like Special Characters in your password. Please try again.");
    return
  }  
  if (specialChoice === "NO") {
    var specialChoicePrompt = prompt("Your Password will not include Special Characters.\nTell me how excited you are to see your password?");
  }
  else if (specialChoice === "YES") {
    specialChoicePrompt = prompt("Your Password will include Special Characters.\nTell me how excited you are to see your password?");

    // Adding special characters to characterList
    characterList = characterList.concat(special);
  }

  // Loop through to randomly select based on length of password
  for (var i = 0; i < passLength; i++) {
    password.push(characterList[Math.floor(Math.random()*characterList.length)]);
  }

  // Removing the commas between the characters in the array
  password = password.join("");

  // Display password in the text box on html function
  function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // Calling display function
  writePassword();
}

// Add event listener to generate button << When button clicks, starts generatePassword Function
generateBtn.addEventListener("click", generatePassword);