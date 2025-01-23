const reverseString = function(string) {
    const stringArr = string.split('');
    return stringArr.reverse().join('');
};

let revers = reverseString('thomaskassiotis');
console.log(revers);

// Do not edit below this line
module.exports = reverseString;
