const findTheOldest = function(arr) {
    return arr.reduce((oldest, curr) =>
        (("yearOfDeath" in oldest ? oldest.yearOfDeath : new Date().getFullYear()) - oldest.yearOfBirth) > 
        (("yearOfDeath" in curr ? curr.yearOfDeath : new Date().getFullYear()) - curr.yearOfBirth) ? oldest : curr
    );
}
// Do not edit below this line
module.exports = findTheOldest;
