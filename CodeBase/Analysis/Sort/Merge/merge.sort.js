let logging;
let counter;

function merge(leftArray, rightArray) {

  logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"merge" });

  logging.push({Action:"MESSAGE", Counter:counter++, message:`LEFT ARRAY : ${ leftArray.join() }`});
  logging.push({Action:"MESSAGE", Counter:counter++, message:`RIGHT ARRAY : ${ rightArray.join() }`});

    let sortedArray = [] // the sorted items will go here

    while (leftArray.length && rightArray.length) {

      // Insert the smallest item into sortedArr
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift())
      } else {
        sortedArray.push(rightArray.shift())
      }

    }

    logging.push({Action:"MESSAGE", Counter:counter++, message:`SORTED ARRAY : ${ sortedArray.join() }`});
    logging.push({Action:"MESSAGE", Counter:counter++, message:`RETURNED ARRAY : ${ [...sortedArray, ...leftArray, ...rightArray].join() }`});

    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArray, ...leftArray, ...rightArray]
  }

  function mergeSort(arr) {

    logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"mergeSort" });

    logging.push({Action:"MESSAGE", Counter:counter++, message:`STOP CONDITION : ARRAY LENGTH ${arr.length}. Is the array SORTED ? ${arr.length <= 1}`});
             

    // Base case
    if (arr.length <= 1){

      logging.push({Action:"MESSAGE", Counter:counter++, message:`BASE CASE : ARRAY LENGTH ${arr.length}. The Array is ${arr}`});

      return arr;
    } 

    let mid = Math.floor(arr.length / 2);

    logging.push({Action:"MESSAGE", Counter:counter++, message:`LEFT ARRAY : ${ arr.slice(0, mid) }`});
    logging.push({Action:"MESSAGE", Counter:counter++, message:`RIGHT ARRAY : ${ arr.slice(mid) }`});


    // Recursive calls
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
  }
 
