const removeFromArray = function(array, ...args) {
    for(let i=0;i<array.length;i++){
        
        for(const arg of args){
            if(array[i]===arg){
                let a = array.splice(i,1);
                console.log('removing' + a);
                i--;
            }
        }
                         
    }
    return array;  
};

let testfn = removeFromArray([3,5,2,2,1,6],3,2);
console.log(testfn);

// Do not edit below this line
module.exports = removeFromArray;
