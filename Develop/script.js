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
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    // Password selection criteria
    var lowerCaseSel = confirm("Shall your password to contain lowercase letters?");
    if (lowerCaseSel) {
        passwordVar += lowerCase;
    }
    var upperCaseSel = confirm("Shall your password to contain uppercase letters?");
    if (upperCaseSel) {
        passwordVar += upperCase;
    }
    var numSel = confirm("Shall your password to contain numbers?");
    if (numSel) {
        passwordVar += numbers;
    }
    var symbolSel = confirm("Shall your password to contain special characters?");
    if (symbolSel) {
        passwordVar += symbols;
    }
    var passwordLength = prompt("Select a password length of at least 8 characters and no more than 128 characters.");

    passwordText.value = password;
}