const palindromes = function (str) {
    let normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let j = normalizedStr.length - 1;
    for (i = 0; i < normalizedStr.length; i++){
        if (i >= j) break;
        if (normalizedStr[i] != normalizedStr[j--]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;