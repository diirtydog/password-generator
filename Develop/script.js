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
    if (!(lengthInput)) {
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
    if (upper == true) {
      (newPassword.push(up))
    } else {
      alert("You would not like to use uppercase letters.")
    };
    console.log(upper);

  // create prompt for lowercase letters
  var lower = confirm("Would you like the password to contain lowercase letters?");
    if (lower == true) {
      (newPassword.push(low))
    } else {
      alert('You would not like to use lowercase letters.');
    };
    console.log(lower);

  // create prompt for symbols
  var symbol = confirm("Would you like the password to contain symbols?");
    if (symbol == true) {
      (newPassword.push(sym));
    } else {
      alert('You would not like to use symbols.');
    };
    console.log(symbol);

  // create prompt for numbers
  var number = confirm('Would you like the password to contain numbers?');
    if (number == true) {
      (newPassword.push(num));
    } else {
      alert('You would not like to use numbers.');
    };
    console.log(number);

    // create loop to choose password
  if ((!upper) && (!lower) && (!symbol) && (!number)) {
    confirm("Must choose at least one character type.")
  }
  

    var newPassString = newPassword.join("");

    for (var i = 0; i <= lengthInput; i++) {
      var randomPass = newPassString.charAt(Math.floor(Math.random() * newPassString.length));
      password = password.concat(randomPass);
    };
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
