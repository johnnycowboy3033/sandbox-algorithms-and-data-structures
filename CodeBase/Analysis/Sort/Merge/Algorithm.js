let logging;
let counter = 0;

function merge(leftArray, rightArray) {

  logging.push({  Action:"MERGE_INIT",
                      message:`MERGE METHOD `,
                      counter:counter++ });

  logging.push({  Action:"RECURSIVE_CALLS",message:`LEFT ARRAY : ${ leftArray }`, ArrayElements:leftArray });   
  logging.push({  Action:"RECURSIVE_CALLS",message:`RIGHT ARRAY : ${ rightArray }`, ArrayElements:rightArray  });  

    let sortedArray = [] // the sorted items will go here

    while (leftArray.length && rightArray.length) {

      // Insert the smallest item into sortedArr
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift())
      } else {
        sortedArray.push(rightArray.shift())
      }

    }

    logging.push({  Action:"RECURSIVE_CALLS",message:`SORTED ARRAY : ${ sortedArray }`, ArrayElements:sortedArray });   

    logging.push({  Action:"RECURSIVE_CALLS",message:`RETURNED ARRAY : ${ [...sortedArray, ...leftArray, ...rightArray] }`, ArrayElements:[...sortedArray, ...leftArray, ...rightArray] });  

    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArray, ...leftArray, ...rightArray]
  }

  function mergeSort(arr) {

    logging.push({  Action:"MERGE_SORT_INIT",
                      message:`MERGE SORT METHOD`,
                      counter:counter++ });

    logging.push({  Action:"STOP_CONDITION",
                      message:`ARRAY LENGTH ${arr.length}. Is the array SORTED ? ${arr.length <= 1}` });                 

    // Base case
    if (arr.length <= 1){

      logging.push({  Action:"BASE_CASE",
                      message:`ARRAY LENGTH ${arr.length}. The Array is ${arr}`, ArrayElements:arr });  
      return arr;
    } 

    let mid = Math.floor(arr.length / 2);

    logging.push({  Action:"RECURSIVE_CALLS",message:`LEFT ARRAY : ${ arr.slice(0, mid) }`, ArrayElements:arr.slice(0, mid) });   
    logging.push({  Action:"RECURSIVE_CALLS",message:`RIGHT ARRAY : ${ arr.slice(mid) }` , ArrayElements:arr.slice(mid)  });  

    // Recursive calls
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));



    return merge(left, right)
  }
 
