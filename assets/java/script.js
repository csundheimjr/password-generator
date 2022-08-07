// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global Variables
var alphaUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLC = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specialCharacter = "!@#$%^&*()-=_+[]\\{}|;':\",./<>?`~"; // Escape special characters

// Creating a password the the function
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// The user click initiates the function above
generateBtn.addEventListener("click", writePassword);

// Inputs: user length
// Outputs: user defined length
// Description: user is prompted desired password length and is told it must be between 8-128 characters
function generatePassword() {
  var desLength = prompt(
    "How many characters shall your generated password to contain?" +
      "\n" +
      "(Value must be 8 - 128)"
  );

  // The user is alerted if the selected length is out of accepted range
  if (desLength < 8 || desLength > 128) {
    alert("Please enter a value 8 - 128");
    generatePassword();
  }

  // User promted to select what character types are included in the password
  var uc = confirm("Shall the generator include uppercase characters?");
  var lc = confirm("Shall the generator include lowercase letters?");
  var num = confirm("Shall the generator include numerals?");
  var sc = confirm("Shall the generator include special characters?");
  // User shall be alerted if no character types are selected
  if (uc == false && lc == false && num == false && sc == false) {
    alert("Please select at least one character type.");
    generatePassword();
  }

  // User input will add character options to the pool
  var sourcePool = "";

  // Collection of charaters from the random selection from source pool
  var finalPassword = "";

  // Adding uppercase characters to pool if user selects UC
  if (uc == true) {
    sourcePool = sourcePool.concat(alphaUC);
  }

  // Adding lowercase characters to pool if user selects C
  if (lc == true) {
    sourcePool = sourcePool.concat(alphaLC);
  }

  // Adding numeric characters to pool if user selects NUM
  if (num == true) {
    sourcePool = sourcePool.concat(numeric);
  }

  // Adding special characters to pool if user selects SC
  if (sc == true) {
    sourcePool = sourcePool.concat(specialCharacter);
  }
  console.log(sourcePool);
  console.log(sourcePool.length);

  // Loop and end statement selecting random characters from pool for final password
  for (i = 0; i < desLength; i++) {
    finalPassword = finalPassword.concat(
      sourcePool.charAt(Math.floor(Math.random() * sourcePool.length))
    );

    console.log("Password: " + finalPassword);
  }
  // Returning final password to HTML doc
  return finalPassword;
}
