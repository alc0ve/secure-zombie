// Assignment Code
//set main variables and values
let conLowercase;
let conUppercase;
let conNumeric;
let conSpecialchar;
let enter;
//the actual values in array form
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//setting this as long string to test-- ended up using it in 'all character options selected'
let allOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-.\"/:;<=>?@[\]^_`{|}~";

// setting 'choices' variable below to set a value for later in the conditional statements
let choices;

let generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters will your password be? Choose between 8 and 128."));
  console.log(enter);
  if (!enter) {
    alert("Needs value! Please try 'Generate Password' again.");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose a number of characters between 8 and 128!"))
  } else {
    conLowercase = confirm("Will the password contain any lowercase letters?");
    conUppercase = confirm("Will the password contain any uppercase letters?");
    conNumeric = confirm("Will the password contain any numerical values?");
    conSpecialchar = confirm("Will the password contain any special characters?");
    console.log(conLowercase,conUppercase,conNumeric,conSpecialchar);
  };

    //listing conditional statements to what is chosen in prompts

    //if 'cancel' for all four prompts, this throws an alert to choose an option and takes user back to beginning
    if (!conLowercase && !conUppercase && !conNumeric && !conSpecialchar) {
      alert("You must choose a criteria!");
      generatePassword();
    }

    //if all 4 OKs are selected through prompts
    else if (conLowercase && conUppercase && conNumeric && conSpecialchar) {
      choices = allOptions;
      // choices = lowerCase.concat(upperCase, numeric, specialChar);
    }

    //if 3 OKs are selected through prompts
    else if (conLowercase && conUppercase && conNumeric) {
      choices = lowerCase.concat(upperCase, numeric);
    }
    else if (conLowercase && conUppercase && conSpecialchar) {
      choices = lowerCase.concat(upperCase, specialChar);
    }
    else if (conLowercase && conSpecialchar && conNumeric) {
      choices = lowerCase.concat(specialChar, numeric);
    }
    else if (conSpecialchar && conNumeric && conUppercase) {
      choices = specialChar.concat(numeric, upperCase);
    }

    //if 2 OKs are selected through prompts
    else if (conLowercase && conUppercase) {
      choices = lowerCase.concat(upperCase);
    }
    else if (conLowercase && conNumeric) {
      choices = lowerCase.concat(numeric);
    }
    else if (conLowercase && conSpecialchar) {
      choices = lowerCase.concat(specialChar);
    }
    else if (conUppercase && conNumeric) {
      choices = upperCase.concat(numeric);
    }
    else if (conUppercase && conSpecialchar) {
      choices = upperCase.concat(specialChar);
    }
    else if (conNumeric && conSpecialchar) {
      choices = numeric.concat(specialChar);
    }

    //if 1 OK is selected through prompts
    else if (conLowercase) {
      choices = lowerCase;
    }
    else if (conUppercase) {
      choices = upperCase;
    }
    else if (conNumeric) {
      choices = numeric;
    }
    else if (conSpecialchar) {
      choices = specialChar;
    }

    //set password to "clear cache" or "clear the text box" so that when it runs again, it won't be added to first generated password
    password = '';

    //for loop to choose password characters- choices.length minus 1 because first is always 0
    for (var i = 0; i < enter; i++) {
      let chosenChar = Math.floor(Math.random() * Math.floor(choices.length - 1));

      password = password + choices[chosenChar];
    }
    //checking to see what happens in console to make sure I know what I'm doing    
      console.log(password);
      //return so that the hard work in the function that generated the desired password, shows up in the text box
      return password;

  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
