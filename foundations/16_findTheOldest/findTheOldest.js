const findTheOldest = function(arr) {
    return arr.reduce((a, c) => {
        return ((c.yearOfDeath ?? new Date().getFullYear())- c.yearOfBirth) > ((a.yearOfDeath ?? new Date().getFullYear())- a.yearOfBirth) ? c : a
    });
};

// Do not edit below this line
module.exports = findTheOldest;
