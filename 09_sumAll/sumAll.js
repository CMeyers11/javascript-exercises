const sumAll = function(bound1, bound2) {
        if ((bound1 < 0 || bound2 < 0) ||
            (typeof bound1 !== "number" || typeof bound2 !== "number") || 
            (!Number.isInteger(bound1) || !Number.isInteger(bound2))
        ) {
        return "ERROR";
        } else {        
            const upperBound = Math.max(bound1,bound2);
            const lowerBound = Math.min(bound1,bound2);
            const quantity = upperBound - lowerBound + 1;
            let sumInputs = 0;
            for(let i = 0; i < quantity; i++) {
                sumInputs += lowerBound + i;
            }
            return sumInputs;
        }
    }

alert(sumAll(3,5));
// Do not edit below this line
module.exports = sumAll;
