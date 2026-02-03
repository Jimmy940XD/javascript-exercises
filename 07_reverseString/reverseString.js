const reverseString = function(string) {
    if (!string) return string;
    let arr = string.split("");
    arr.reverse();
    const newString = arr.reduce((str, char) => str + char);
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
