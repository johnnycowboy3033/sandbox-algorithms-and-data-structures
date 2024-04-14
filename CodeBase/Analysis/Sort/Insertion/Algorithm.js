let insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      console.log('_______________________'); 
      /*
      This is the element which be moved. This create element with not data so the elements to the left 
      can be copied to this index if needed. The elements to the left will be moved until you find new 
      location for this element in the array.  
      */
      let currentElement = array[i]; 
      let lastIndex = i - 1;
        console.log(`Current Element Index ${i} Last Index ${i-1}`); 
      //Shifts the elements to the right. 
      while (lastIndex >= 0 && array[lastIndex] > currentElement) {
        array[lastIndex + 1] = array[lastIndex];
        lastIndex--;
      }
      array[lastIndex + 1] = currentElement;
    }
  
    return array;
  };
