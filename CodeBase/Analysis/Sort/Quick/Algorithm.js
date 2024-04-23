// Function to partition the array and return the partition index
function partition(arr, low, high) {

   logging.push({  Action:"PARTITION_INIT",
                      message:`PARTITION METHOD`,
                      counter:counter++ });

    // Choosing the pivot
    let pivot = arr[high];

    logging.push({  Action:"VARIABLES",
                    PIVOT: `[${high}] = ${pivot}` });
  
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            logging.push({  Action:"MESSAGE",
                      message:`SWAP ELEMENTS ${arr} ` });

            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            logging.push({  Action:"MESSAGE",
                      message:`SWAP ELEMENTS [${i}]  [${j}]` });

            logging.push({  Action:"MESSAGE",
                      message:`SWAP ELEMENTS ${arr} ` });
        }
        
    }

    logging.push({  Action:"MESSAGE",
                      message:`SWAP PIVOTS ${arr} ` });
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position

    logging.push({  Action:"MESSAGE",
                      message:`SWAP PIVOTS [${i+1}]  [${high}]` });

    logging.push({  Action:"MESSAGE",
                      message:`SWAP PIVOTS ${arr} ` });

    return i + 1; // Return the partition index
}

 

let logging;
let counter = 0;

// The main function that implements QuickSort
function quickSort(arr, low, high) {

    logging.push({  Action:"PARTITION_INIT",
                      message:`QUICK SORT METHOD`,
                      counter:counter++ });

    logging.push({  Action:"VARIABLES",
                    LOW: low,
                    HIGH : high});

    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);

        logging.push({  Action:"QUICK_SORT_INIT",
        message:`QUICK SORT METHOD`,
        counter:counter++ });

        logging.push({  Action:"VARIABLES",
                        'Partition Index':pi });

        logging.push({  Action:"ARRAY",
                        presentArray:arr,
                        pi:pi,
                        low:low,
                        high:pi-1
                     });
        logging.push({  Action:"ARRAY",
                        presentArray:arr,
                        pi:pi,
                        low:pi+1,
                        high:high
                  });

  
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
