// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for password characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+";
var passwordVar = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var passwordText = document.querySelector("#password");
    passwordText.value === "";
    var password = "";

    // Password selection criteria
    var lowerCaseSel = confirm("Do you want password to contain lowercase letters?");
    if (lowerCaseSel) {
        passwordVar = lowerCase;
    }
    var upperCaseSel = confirm("Do you want password to contain UPPERCASE letters?");
    if (upperCaseSel) {
        passwordVar = upperCase;
    }
    var numberSel = confirm("Do you want password to contain numbers?");
    if (numberSel) {
        passwordVar = numbers;
    }
    var symbolSel = confirm("Do you want password to contain Symbols?");
    if (symbolSel) {
        passwordVar = symbols;
    }
    var passwordLength = prompt("Select a password length of at least 8 characters and no more than 128 characters.");

    // Limits password to 8-128 characters and 
    if (passwordLength < 8 || passwordLength > 128) { 
        alert ("Password is not between 8 and 128 characters. Please try again.");
        var passwordLength = prompt("Select a password length of at least 8 characters and no more than 128 characters.")
    }
    // Generate password
    for (var i = 0; i < passwordLength; i++) {
        password = passwordVar.charAt(Math.floor(Math.random() * passwordVar.length));
    }

    passwordText.value = password;
}