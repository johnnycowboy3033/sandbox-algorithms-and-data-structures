$(function() {

    let consoleNotebook = new ConsoleNotebook(['Minimum','Current']);

    //Algorithm logging
    function Algorithm(arr){
       let result = stableSelectionSort(arr, arr.length);

       consoleNotebook.insertSteps("steps-algorithm",logging);
       

   };

    logging = new Array();
    counter = 0;
    Algorithm( new Array(2, 8, 5, 3, 9, 4, 1 ) );

});