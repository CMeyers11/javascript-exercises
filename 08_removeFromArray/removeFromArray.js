const removeFromArray = function(arrayInput,...removedArgs) {
    return arrayInput.filter(element => !removedArgs.includes(element));
};

//alert(removeFromArray([3,5,"a", 10], 2, "a", 3, "b"));
// Do not edit below this line
module.exports = removeFromArray;
