const repeatString = function(str, t) {
    if (t < 0) return 'ERROR';
    let res = '';
    for (let i = 0; i < t; i++){
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
