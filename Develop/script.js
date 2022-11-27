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
    var upperCaseSel = confirm("Shall your password to contain uppercase letters?");
    var numSel = confirm("Shall your password to contain numbers?");
    var symbolSel = confirm("Shall your password to contain special characters?");

    passwordText.value = password;
}