function swap(_baseArr,_offsetIndex){
    var temp;

     temp = _baseArr[_offsetIndex];
     _baseArr[_offsetIndex] = _baseArr[_offsetIndex +1];
     _baseArr[_offsetIndex + 1] = temp;

      return _baseArr;

}


let logging;
let counter;

function bubbleSort(arr) {

    for (var mainIndex = 0; mainIndex < arr.length; mainIndex++) {

        logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"bubbleSort" });

        // Last i elements are already in place  
        for (var offset = 0; offset < (arr.length - mainIndex - 1); offset++) {
            logging.push({  Action:"DIVIDER" });

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[offset] > arr[offset + 1]) {

                // If the condition is true
                // then swap them
                arr = swap(arr,offset);

                logging.push({Action:"MESSAGE", Counter:counter++, message:`Swaps the [${offset}]=${arr[offset]} and [${offset+1}]=${arr[offset+1]}`});

            }else{
                logging.push({Action:"MESSAGE", Counter:counter++, message:`NO Swaps`});
            }

            logging.push({Action:"ARRAY",presentArray:arr.slice(),indexes: [offset,offset +1]});
        }
    }

    // Print the sorted array
    logging.push({Action:"RESULTS", Counter:counter++, message:`The sorted array is ${arr.join()}`});
    return arr;
}

 
