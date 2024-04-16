function swap(_baseArr,_baseIndex,_offsetIndex){
    var temp;

     temp = _baseArr[_baseIndex];
     _baseArr[_baseIndex] = _baseArr[_offsetIndex];
     _baseArr[_offsetIndex] = temp;

      return _baseArr;

}

let logging;

function bubbleSort(arr){

    for(var mainIndex = 0; mainIndex < arr.length - 1; mainIndex++){

      logging.push({  Action:"ITERATION",
                      message:"========================================================="});

            for(var offset = 1 + mainIndex; offset < arr.length; offset++){

                let newMessge = "";
                let tempPresentArray = arr.slice()

                if (arr[offset] < arr[mainIndex]) {
                    arr = swap(arr, mainIndex, offset);
                    newMessge = 'SWAP';
                }else{
                    newMessge = 'NO SWAP';
                }

                logging.push({  Action:"CHECK_SWAPPING",
                                messge:newMessge,
                                mainIndex:mainIndex,
                                offset:offset,
                                presentArray:tempPresentArray});

            }

    }

}
