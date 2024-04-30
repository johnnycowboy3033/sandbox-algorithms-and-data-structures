$(function() {

    let consoleNotebook = new ConsoleNotebook(['Offset','PlusOne']);

     //Algorithm logging
     function Algorithm(arr){
        let result = bubbleSort(arr);

        consoleNotebook.insertSteps("steps-algorithm",logging);
        

    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(5, 3, 4, 6, 2, 1, 7) );

});