// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";
var passwordVar = "";
   
// Write password to the #password input
function writePassword(event) {
    event.preventDefault();
    var passwordText = document.querySelector("#password");
    passwordText.value === "";
    var password = "";

    // Password selection criteria
    var lowerCaseSel = confirm("Do you want password to contain lowercase letters?");
    if (lowerCaseSel) {
        passwordVar += lowerCase;
    }
    var upperCaseSel = confirm("Do you want password to contain UPPERCASE letters?");
    if (upperCaseSel) {
        passwordVar += upperCase;
    }
    var numberSel = confirm("Do you want password to contain Numbers?");
    if (numberSel) {
        passwordVar += numbers;
    }
    var symbolSel = confirm("Do you want password to contain Special Characters?");
    if (symbolSel) {
        passwordVar += symbols;
    }
    var passwordLength = prompt("Enter a password length of at least 8 characters and no more than 128 characters.");

    // Limits password to 8-128 characters and requires a criteria
    if (passwordLength < 8 || passwordLength > 128) { 
        alert ("Password is not between 8 and 128 characters. Please try again.");
    }
    else if (lowerCaseSel === false && upperCaseSel === false && numberSel === false && symbolSel === false) {
        alert("Please choose at least one password criteria.");
    }

    // Generate password
    for (var i = 0; i < passwordLength; i++) {
        password += passwordVar.charAt(Math.floor(Math.random() * passwordVar.length));
    }
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
