function convertToCelsius(tempF) {
  let tempC = (tempF - 32)*(5/9);
  return roundTo(tempC,1);
};

function convertToFahrenheit(tempC) {
  let tempF = (tempC *(9/5)) + 32;
  return roundTo(tempF,1);
};

function roundTo(number, decimals) {
  let factor = 10 ** decimals;
  let step = (number * factor);
  return Math.round(step)/factor;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
