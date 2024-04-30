let logging;
let counter;

let insertionSort = (array) => {

    logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"insertionSort" });

    for (let i = 1; i < array.length; i++) {

      logging.push({  Action:"DIVIDER" });

      /*
      This is the element which be moved. This create element with not data so the elements to the left 
      can be copied to this index if needed. The elements to the left will be moved until you find new 
      location for this element in the array.  
      */

      //Move the Current Element in tempory storage
      let currentElement = array[i]; 
      let lastIndex = i - 1;

      logging.push({Action:"MESSAGE", Counter:counter++, message:`HOLE: the current element ${currentElement}`});
      
      logging.push({Action:"ARRAY",presentArray:array.slice(),indexes: [i,lastIndex]});

      
      //Shifts the elements to the right. 
      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        array[lastIndex + 1] = array[lastIndex];
        lastIndex--;

        logging.push({Action:"MESSAGE", Counter:counter++, message:`MOVE: the current element ${currentElement}`});

        logging.push({Action:"ARRAY",presentArray:array.slice(),indexes: [i+1,lastIndex]});

      }

      array[lastIndex + 1] = currentElement;

      logging.push({Action:"MESSAGE", Counter:counter++, message:`INSERT: the current element ${currentElement}`});

      logging.push({Action:"ARRAY",presentArray:array.slice(),indexes: [i+1,lastIndex]});
    }
  
    logging.push({Action:"RESULTS", Counter:counter++, message:`The results of the array ${array.join()}`});
    return array;
  };
 
