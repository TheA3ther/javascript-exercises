const repeatString = function(string, count) {
    if (count < 0) return "ERROR";
    arr = new Array(count).fill(string);
    return arr.join('');
};

// Do not edit below this line
module.exports = repeatString;
