const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, c) => a + c, 0);
};

const multiply = function(arr) {
  return arr.reduce((a, c) => a * c, 1);
};

const power = function(b, e) {
	return b ** e;
};

const factorial = function(f) {
	let res = 1;
  while (f > 1) res = res * f--;
  return res;
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
