let fs = require('fs');

let fileName = 'Algorithms.txt';

let linearSearch = (arr, target) => {

  fs.appendFileSync(fileName, `==================================== \n`);
  fs.appendFileSync(fileName, `Target ${target} \n`);

    for (let i in arr) {

      fs.appendFileSync(fileName, `Index ${i} Item ${arr[i]} \n`);

      if (arr[i] === target){
        return +i;
      } 
        
    }
    return -1;

  };

  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let messageResult = 'Linear Search Method return value: ';
  fs.appendFileSync(fileName,  `${ messageResult } ${ linearSearch(nums, 3) } \n `);
  fs.appendFileSync(fileName,  `${ messageResult } ${ linearSearch(nums, 9) } \n `);
  fs.appendFileSync(fileName,  `${ messageResult } ${ linearSearch(nums, 1) } \n `);
  fs.appendFileSync(fileName,  `${ messageResult } ${ linearSearch(nums, 0) } \n `);