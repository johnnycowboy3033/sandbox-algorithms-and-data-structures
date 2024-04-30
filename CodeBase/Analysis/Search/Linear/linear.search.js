let logging;
let counter;

function  linearSearch(arr, target) {

    logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"linearSearch" });

    for (let i in arr) {
      logging.push({  Action:"DIVIDER" });

      logging.push({ Action:"VARIABLES", Counter:counter++, index:i });

      logging.push({Action:"ARRAY",presentArray:arr.slice(),indexes: [i]});

      if (arr[i] === target){

        logging.push({Action:"RESULTS", Counter:counter++, message:`The index is ${i} for target ${target}`});
        return i;
      } 
        
    }

    logging.push({Action:"RESULTS", Counter:counter++, message:`The index is -1 for target ${target}`});
    return -1;
};
 
