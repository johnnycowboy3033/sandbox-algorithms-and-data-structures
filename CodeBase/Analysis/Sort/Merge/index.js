$(function() {

    let consoleNotebook = new ConsoleNotebook([]);

     //Algorithm logging
     function Algorithm(arr){
        let result = mergeSort(arr);

        consoleNotebook.insertSteps("steps-algorithm",logging);
        

    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(6,5,3,1,8,7,2,4) );

});