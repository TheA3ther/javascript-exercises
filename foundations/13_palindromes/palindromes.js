const palindromes = function (str) {
    let l = 0, r = str.length - 1;
    while (l < r) {

        while (!((str.charCodeAt(l) > 47 && str.charCodeAt(l) < 58) ||
            (str[l].toLowerCase().charCodeAt(0) > 96 && str[l].toLowerCase().charCodeAt(0) < 123))) l++;
        while (!((str.charCodeAt(r) > 47 && str.charCodeAt(r) < 58) ||
                (str[r].toLowerCase().charCodeAt(0) > 96 && str[r].toLowerCase().charCodeAt(0) < 123))) r--;
        if (str[l++].toLowerCase() !== str[r--].toLowerCase()) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
