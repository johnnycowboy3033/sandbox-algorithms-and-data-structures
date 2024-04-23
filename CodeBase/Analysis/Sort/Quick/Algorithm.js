// Function to partition the array and return the partition index
function partition(arr, low, high) {

   logging.push({  Action:"PARTITION_INIT",
                      message:`PARTITION METHOD`,
                      counter:counter++ });

    // Choosing the pivot
    let pivot = arr[high];

    logging.push({  
                    Action:"VARIABLES",
                    PIVOT: `[${high}] = ${pivot}` 
                });

    logging.push({  
                    Action:"ARRAY",
                    presentArray:arr,
                    pi:pivot,
                    low:low,
                    high:high
                });
  
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {

        logging.push({  Action:"DIVIDER" });
        // If current element is smaller than the pivot
        logging.push({  Action:"MESSAGE",
                        message:`Is current element [${j}] = ${arr[j]} is smaller than the pivot ${pivot} ? ${(arr[j] < pivot)}` });
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;

            logging.push({  Action:"MESSAGE",
                        message:`${arr.join()}` });
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements

            logging.push({  Action:"MESSAGE",
                        message: ` ${[arr[i], arr[j]]} = ${[arr[j], arr[i]]}` });

            logging.push({  Action:"MESSAGE",
                        message:`${arr.join()}` });


            logging.push({  
                Action:"ARRAY",
                presentArray:arr,
                pi:-1,
                low:-1,
                high:-1
            });
        }
        
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position

    logging.push({  Action:"MESSAGE",
                        message:`Swap pivot to its correct position ${[arr[i + 1], arr[high]]} = ${[arr[high], arr[i + 1]]}` });


    return i + 1; // Return the partition index
}

 

let logging;
let counter = 0;

// The main function that implements QuickSort
function quickSort(arr, low, high) {

    logging.push({  Action:"QUICK_SORT_INIT",
                    message:`QUICK SORT METHOD (Before Partition Method)`,
                    counter:counter++ });

    logging.push({  Action:"VARIABLES",
                    LOW: low,
                    HIGH : high});

    logging.push({  Action:"DIVIDER" });

    logging.push({  Action:"ARRAY",
                    presentArray:arr,
                    pi:-1,
                    low:low,
                    high:high});

    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);

        logging.push({  Action:"QUICK_SORT_INIT",
        message:`QUICK SORT METHOD (After Partition Method)`,
        counter:counter++ });

        logging.push({  Action:"VARIABLES",
                        'Partition Index':pi });

        logging.push({  Action:"ARRAY",
                        presentArray:arr,
                        pi:-1,
                        low:low,
                        high:pi-1
                     });
        logging.push({  Action:"ARRAY",
                        presentArray:arr,
                        pi:-1,
                        low:pi+1,
                        high:high
                  });

  
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
