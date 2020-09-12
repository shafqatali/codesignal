function firstDigit($inputString) {
        var number = "";
    for(var c=0; c< inputString.length; c++){
        var char = inputString[c];
        if(isNaN(char) == false && char != " " && number == "") {
            number = inputString[c];
        }
    }
    return number;
}
