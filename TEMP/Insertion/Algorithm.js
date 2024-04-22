let logging;


let insertionSort = (array) => {

    for (let i = 1; i < array.length; i++) {

      logging.push({  Action:"ITERATION",
                      message:`${i} =========================================================` });

      /*
      This is the element which be moved. This create element with not data so the elements to the left 
      can be copied to this index if needed. The elements to the left will be moved until you find new 
      location for this element in the array.  
      */

      //Move the Current Element in tempory storage
      let currentElement = array[i]; 
      let lastIndex = i - 1;

      logging.push({ Action:"HOLE",
      currentIndex:i,
      currentElement:currentElement,
      lastIndex:lastIndex,
      presentArray:array.slice()});

      
      //Shifts the elements to the right. 
      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        array[lastIndex + 1] = array[lastIndex];
        lastIndex--;

        logging.push({ Action:"MOVE",
        currentIndex:i,
        currentElement:currentElement,
        lastIndex:lastIndex +1,
        presentArray:array.slice()});

      }

      array[lastIndex + 1] = currentElement;

      logging.push({ Action:"INSERT",
      currentElement:currentElement,
      lastIndex:lastIndex +1,
      presentArray:array.slice()});
    }
  
    return array;
  };
