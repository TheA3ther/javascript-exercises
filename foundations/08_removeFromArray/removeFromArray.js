const removeFromArray = function(arr, ...args) {
    let blacklist = new Set(args);
    return arr.filter((num) => !(blacklist.has(num)));
};

// Do not edit below this line
module.exports = removeFromArray;
