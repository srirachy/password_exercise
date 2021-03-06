// flow of code
let thePassword = initialInput(); //string
let validLength = checkLength(thePassword); //boolean
let validFirstChar = checkFirstChar(thePassword); //boolean
let whichAlert = acceptOrReject(validLength, validFirstChar); //boolean
let alertMsg = setOutputMsg(); //string
alert(alertMsg); //display ending message

// prompt for user input ft cancel button handler
function initialInput(){
    const pw = prompt("Please enter a password (Must be 6-20 characters long and must start with a letter):");
    //cancel button handler
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
function acceptOrReject(){
    let isValid;
    if (validLength == true && validFirstChar == true){
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}

// self-explanitory, but set output message
function setOutputMsg(checkAlert, isValidLength){
    let outputMsg;
    if (whichAlert == true){
        outputMsg = "Password accepted!";
    } else {
        if (validLength == false){
            outputMsg = "Invalid password. Password must be 6-20 characters long.";
        } else {
            outputMsg = "Invalid password. Password must start with a letter.";
        }
    }

    return outputMsg;
}