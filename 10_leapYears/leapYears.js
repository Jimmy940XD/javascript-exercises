const leapYears = function(year) {
    const cond1 = year % 4 === 0;
    const cond2 = year % 100 !== 0;
    const cond3 = year % 400 === 0;
    if (cond1 && (cond2 || cond3)) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
