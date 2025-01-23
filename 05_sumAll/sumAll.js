const sumAll = function(num1, num2) {
    if(typeof num1 !== 'number'||typeof num2!=='number'){
        return 'ERROR';
    }
    let smallest = Math.min(num1,num2);
    let biggest = Math.max(num1,num2);
    //console.log(smallest,biggest+'haha');
    let sum = 0;
    if (smallest<0||!Number.isInteger(smallest)||!Number.isInteger(biggest)){
        return 'ERROR';
    }
    for(let step = smallest;step<=biggest;step++){
        //console.log(step);
        sum+=step;
    }
    return sum;
};

// let testSum = sumAll(5,3);
// console.log(testSum);

// Do not edit below this line
module.exports = sumAll;
