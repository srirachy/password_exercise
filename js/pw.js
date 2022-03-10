// flow of code
var thePassword = initialInput(); //string
var validLength = checkLength(thePassword); //boolean
var validFirstChar = checkFirstChar(thePassword); //boolean
var whichAlert = acceptOrReject(validLength, validFirstChar); //boolean

// ending output
if (whichAlert == true){
    alert('Password accepted!');
} else {
    if (validLength == false){
        alert('Invalid password. Password must be 6-20 characters long.');
    } else {
        alert('Invalid password. Password must start with a letter.');
    }
}

// prompt for user input 
function initialInput(){
    const pw = prompt("Please enter a password (Must be 6-20 characters long and must start with a letter):");
    if (pw === null){
        return;
    }
    // alert(pw);

    return pw;
}

// check length of user input
function checkLength(userInput){
    const pwLength = thePassword.length;
    let isValid;
    // alert(pwLength);
    if (pwLength >= 6 && pwLength <= 20){
        isValid = true;
    } else{
        isValid = false;
    }
    
    return isValid;
}

// check the first character of user input
function checkFirstChar(userInput){
    const firstLetter = thePassword.charAt(0);
    // alert(firstLetter);

    // returns true if first character is not the same when comparing upper/lower cases indicating its a letter
    // returns false otherwise
    return firstLetter.toLowerCase() != firstLetter.toUpperCase();
}

// check if output will be success or not
function acceptOrReject(isValidLength, isValidFirstChar){
    let isValid;
    if (validLength == true && validFirstChar == true){
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}