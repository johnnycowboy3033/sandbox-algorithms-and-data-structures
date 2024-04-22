function swap(_baseArr,_offsetIndex){
    var temp;

     temp = _baseArr[_offsetIndex];
     _baseArr[_offsetIndex] = _baseArr[_offsetIndex +1];
     _baseArr[_offsetIndex + 1] = temp;

      return _baseArr;

}


let logging;

function bubbleSort(arr) {

    for (var mainIndex = 0; mainIndex < arr.length; mainIndex++) {

        logging.push({  Action:"ITERATION"});

        // Last i elements are already in place  
        for (var offset = 0; offset < (arr.length - mainIndex - 1); offset++) {

            let newMessge = "";
            let tempPresentArray = arr.slice()

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[offset] > arr[offset + 1]) {

                // If the condition is true
                // then swap them
                arr = swap(arr,offset);

                newMessge = 'SWAP';
            }else{
                newMessge = 'NO SWAP';
            }


            logging.push({  Action:"CHECK_SWAPPING",
                                messge:newMessge,
                                offset:offset,
                                offsetPlusOne:offset +1,
                                presentArray:tempPresentArray});
        }
    }

    // Print the sorted array
    return arr;
}

 
