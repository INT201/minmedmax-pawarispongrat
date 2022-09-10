const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
    let swap;
    let done;
    let swapped;
    let array = [n1,n2,n3]
    while (!done) {
       swapped =0;
        for(i = 1; i < 3; i++) {
           if(array[i - 1] > array[i]) {
             swap = array[i];
             array[i] = array[i - 1];
             array[i - 1] = swap; 
             swapped =1;     
    };
    if (swapped == 0){
      done = true;
    }
  };
};
  return {min: array[0],mid: array[1],max: array[2]};
};

console.log(minMedMax(10,9,32));

module.exports = minMedMax
