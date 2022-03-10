function initialInput(){
    const pw = prompt("Please enter a password (Must be 6-20 characters long and must start with a letter):");
    if (pw === null){
        return;
    }
    // alert(pw);

    return pw;
}

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

function checkFirstChar(userInput){
    const firstLetter = thePassword.charAt(0);
    // alert(firstLetter);

    return firstLetter.toLowerCase() != firstLetter.toUpperCase();
}

function acceptOrReject(isValidLength, isValidFirstChar){
    let isValid;
    if (validLength == true && validFirstChar == true){
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}

var thePassword = initialInput();
var validLength = checkLength(thePassword);
var validFirstChar = checkFirstChar(thePassword);
var whichAlert = acceptOrReject(validLength, validFirstChar);
if (whichAlert == true){
    alert('Success');
} else {
    alert('Invalid password');
}