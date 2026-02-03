const repeatString = function(string, num) {
    const ogString = string.slice()
    if (num < 0) return "ERROR";
    if (num === 0) return "";
    for (let i = 0; i < num - 1; i++) {
        string += ogString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
