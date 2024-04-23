let logging;
let counter = 0;

function stableSelectionSort(a, n){
    // Iterate through array elements
    for (let i = 0; i < n - 1; i++) {

        logging.push({  Action:"DIVIDER" });

        // Loop invariant : Elements till 
        // a[i - 1] are already sorted.

        // Find minimum element from 
        // arr[i] to arr[n - 1].
        let min = i;
        logging.push({  Action:"VARIABLES", min:min});
        for (let j = i + 1; j < n; j++){

            logging.push({  Action:"MESSAGE", message:` [${min}]=${a[min]} > [${j}]=${a[j]} (${a[min] > a[j]})` });
            if (a[min] > a[j]){
                min = j;
                logging.push({  Action:"VARIABLES", min:min});
            }
                

        }
            

        // Move minimum element at current i.
        let key = a[min];
        while (min > i) {

            logging.push({  
                Action:"ARRAY",
                presentArray:a.slice(),
                minimum:min,
                current:i
            });

            a[min] = a[min - 1];
            min--;
        }
        
           
        a[i] = key;
    }
    
}
