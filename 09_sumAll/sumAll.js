const sumAll = function(a, b) {
    switch (false) {
        case (Number.isInteger(a) && Number.isInteger(b)):
        case (a >= 0 && b >= 0):
            return "ERROR";
    }
    let arr = [a, b].sort((a, b) => a - b);
    sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
