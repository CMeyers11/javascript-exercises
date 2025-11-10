const sumAll = function(bound1, bound2) {
    const upperBound = Math.max(bound1,bound2);
    const lowerBound = Math.min(bound1,bound2);
    const quantity = upperBound - lowerBound + 1;
    let sumInputs = 0;
    for(let i = 0; i < quantity; i++)
        sumInputs += lowerBound + i;
};

// Do not edit below this line
module.exports = sumAll;
