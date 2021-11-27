// Assignment code here
// dom elements

// make object that runs these
//  var randomFunction = {
//   upper: getRandomUpper,
//   symbol: getRandomSymbol,
//   lower: getRandomLower,
//   number: getRandomNumber
// };
// //
// //generator functions

// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// };
// function getRandomUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// };
// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() *10) + 48);
// };
// function getRandomSymbol() {
//   const symbols = '!@#$%^&*()_+~`[]{}'
//   return symbols[Math.floor(Math.random() * symbols.length)];
// };
// console.log(randomFunction);
//Get references to the #generate element



function generatePassword() {
  // password values
  var up = 'ABCDEF';
  var low = 'abcdef';
  var sym = '!@#$%^&*()';
  var num = '1234567890';
  var password = '';
  var newPassword = [];

  // create prompt for password length
  var lengthInput = parseInt(prompt("Please input the password length:", '8 - 128 characters'));
  if (lengthInput != null && lengthInput != '') {
    if (isNaN(lengthInput)) {
      return alert("Must input at the least 8 and the most 128 characters.");
    } else if (lengthInput < 8) {
      return alert("Password must be more than 8 characters in length!"); 
    } else if (lengthInput > 128) {
      return alert("Password must be less than 128 characters in length!");
    } else {
      confirm("You have chosen " + lengthInput + "!");
    }
    console.log(lengthInput);
  };

  // create prompt for uppercase letters boolean
  var upper = confirm("Would you like the password to contain uppercase letters?");
    if (upper = true) {
      (newPassword.push(up))
    } else {
      alert("You would not like to use uppercase letters.")
    }
    console.log(upper);

  // create prompt for lowercase letters
  var lower = confirm("Would you like the password to contain lowercase letters?");
    if (lower = true) {
      (newPassword.push(low))
    } else {
      alert('You would not like to use lowercase letters.');
    }
    console.log(lower);

  // create prompt for symbols
  var symbol = confirm("Would you like the password to contain symbols?");
    if (symbol = true) {
      (newPassword.push(sym));
    } else {
      alert('You would not like to use symbols.');
    }
    console.log(symbol);

  // create prompt for numbers
  var number = confirm('Would you like the password to contain numbers?');
    if (number = true) {
      (newPassword.push(num));
    } else {
      alert('You would not like to use numbers.');
    }
    console.log(number);

    // create loop to choose password
    var newPassString = newPassword.join("");

    for (var i = 0; i <= lengthInput; i++) {
      var randomPass = newPassString.charAt(Math.floor(Math.random() * newPassString.length));
      password = password.concat(randomPass);
    }
    return password;
    
  };
var generateBtn = document.querySelector("#generate",);

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
