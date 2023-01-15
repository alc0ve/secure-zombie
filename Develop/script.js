// Assignment Code
let conLowercase;
let conUppercase;
let conNumeric;
let conSpecialchar;
let enter;

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

let allOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&'()*+,-.\"/:;<=>?@[\]^_`{|}~";
let charCount = allOptions.length;

// setting 'choices' variable below to set a value for later...
let choices;

let generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword() {
  enter = parseInt(prompt("How many characters will your password be? Choose between 8 and 128."));
  console.log(enter);
  if (!enter) {
    alert("Needs value! Please try 'Generate Password' again.");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose number of characters between 8 and 128!"))
  } else {
    conLowercase = confirm("Will this contain any lowercase letters?");
    conUppercase = confirm("Will this contain any uppercase letters?");
    conNumeric = confirm("Will this contain any numerical values?");
    conSpecialchar = confirm("Will this contain any special characters?");
    console.log(conLowercase,conUppercase,conNumeric,conSpecialchar);
  };

    //listing conditional statements to what is chosen in prompts

    //if 'cancel' for all four prompts, this throws an alert to choose an option and takes user back to beginning; these are working
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
    //if 1 OK is selected through prompts; these are working
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

    //for loop to choose password characters- choices.length minus 1 because first is always 0
    for (var i = 0; i < enter; i++) {
      const space = " ";
      let chosenChar = choices[Math.floor(Math.random() * Math.floor(choices.length - 1))];
      space.push(chosenChar);

      console.log(space.join());

    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



    //   //if 'cancel' for all four prompts, this throws an alert to choose an option
    // if (!lowerCase && !upperCase && !numeric && !specialChar) {
    //   choices = alert("You must choose a criteria!");
    // };

  // //for loop to choose password characters- charCount minus 1 because the string begins at 0
  // for (var i = 0; i < enter; i++) {
  //   let passwordNew = allOptions[Math.floor(Math.random() * Math.floor(charCount - 1))];
  //   console.log(passwordNew);
  //   return passwordNew;
  // }

//pseudocoding with Celeste:
// target the on click event from generateBtn, when the button is clicked we want something to happen
// step 2 is create a function for the buttons on clickEvent (if button clicked === true, then run generatePassword)
// code out our conditional statements using the values stored from the window prompts