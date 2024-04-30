// Function to partition the array and return the partition index
function partition(arr, low, high) {

    logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"partition" });

    // Choosing the pivot
    let pivot = arr[high];

    logging.push({  
                    Action:"VARIABLES",
                    Counter:counter++,
                    PIVOT: `[${high}] = ${pivot}` 
                });

    logging.push({Action:"ARRAY",presentArray:arr.slice(),indexes: [pivot,low,high]});
  
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
    logging.push({  Action:"MESSAGE", Counter:counter++,
    message:`Index of smaller element and indicates the right position of pivot found so far. i = low - 1, low = ${low} so i = ${i}` });
  
    for (let j = low; j <= high - 1; j++) {

        logging.push({  Action:"DIVIDER" });
        // If current element is smaller than the pivot
        logging.push({  Action:"MESSAGE", Counter:counter++,
                        message:`Is current element [${j}] = ${arr[j]} is smaller than the pivot ${pivot} ? ${(arr[j] < pivot)}` });
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            logging.push({  Action:"MESSAGE", Counter:counter++,
                            message:`Increment index of smaller element i = ${i}` });

            logging.push({  Action:"MESSAGE", Counter:counter++,
                            message:`${arr.join()}` });

                            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements

            logging.push({  Action:"MESSAGE", Counter:counter++,
                             message: ` ${[arr[i], arr[j]]} = ${[arr[j], arr[i]]}` });

            logging.push({  Action:"MESSAGE", Counter:counter++,
                            message:`${arr.join()}` });

        }
        
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position

    logging.push({  Action:"MESSAGE", Counter:counter++,
                        message:`Swap pivot to its correct position ${[arr[i + 1], arr[high]]} = ${[arr[high], arr[i + 1]]}` });

    logging.push({Action:"ARRAY",presentArray:arr.slice(),indexes: [-1,-1,-1]});

    return i + 1; // Return the partition index
}

 

let logging;
let counter = 0;

// The main function that implements QuickSort
function quickSort(arr, low, high) {

    logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"quickSort" });


    logging.push({  Action:"VARIABLES",
                    Counter:counter++,
                    LOW: low,
                    HIGH : high});

    logging.push({  Action:"DIVIDER" });

    logging.push({  Action:"ARRAY", presentArray:arr.slice(), indexes: [-1,low,high] });

    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);

        logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"binarySearh" });
        logging.push({Action:"RESULTS", Counter:counter++, message:`QUICK SORT METHOD (After Partition Method)`});

        logging.push({  Action:"VARIABLES", Counter:counter++, 'Partition Index':pi });


        logging.push({  Action:"ARRAY", presentArray:arr.slice(), indexes: [-1,low,pi-1] });
        logging.push({  Action:"ARRAY", presentArray:arr.slice(), indexes: [-1,pi+1,high] });


  
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }else{
        logging.push({  Action:"MESSAGE",
                        Counter:counter++,
                        message:`DO NOT CALL Quick Sort Method.` });
    }
}
