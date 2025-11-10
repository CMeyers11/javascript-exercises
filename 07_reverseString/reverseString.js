
// alert(reverseString("Test"));
// Do not edit below this line
module.exports = reverseString;

/* 
Attempt #1 with for loop;
attempt #2 above with string methods

const reverseString = function(stringInput) {
    let length = stringInput.length;
    let stringOutput = ""
    for (i=length-1; i>=0; i--) {
        stringOutput += stringInput.charAt(i);
    }
    return stringOutput;
}
*/