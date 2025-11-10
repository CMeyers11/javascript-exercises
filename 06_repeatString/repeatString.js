function repeatString(inputString, repeatCount) {
    if (repeatCount < 0) {
        return "ERROR";
    }
    let outputString = "";
    for(let i=0; i < repeatCount; i++) {
        outputString += inputString;
    }
    return outputString;
}
// Do not edit below this line
module.exports = repeatString;



/* This version creates an array;
the prompt asks to return a string;
attempt #2 above

const repeatString = function(inputString, repeatCount) {
    let outputArray = []
    for (i=0; i<repeatCount; i++) {
        outputArray[i] = inputString;
    }
    return outputArray;
}
*/
