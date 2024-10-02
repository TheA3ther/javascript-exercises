const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr, 1);
};

const power = function(a, b) {
  result = 1;
  for (i = 0; i < b; i++){
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
	if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
