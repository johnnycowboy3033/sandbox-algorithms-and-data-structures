$(function() {

    let consoleNotebook = new ConsoleNotebook(['Pivot','Low','High']);

     //Algorithm logging
     function Algorithm(arr,x){
        let result = quickSort(arr, 0, arr.length - 1);

        consoleNotebook.insertSteps("steps-algorithm",logging);
        

    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(10, 7, 8, 9, 1, 5) );

    logging = new Array();
    counter = 0;
    Algorithm(new Array(10, 4, 8,  1, 5) );


});