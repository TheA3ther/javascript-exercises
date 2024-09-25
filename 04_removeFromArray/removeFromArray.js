const removeFromArray = function(arr, ...args) {
    const argsSet = new Set(args);
    return arr.filter(item => !argsSet.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;