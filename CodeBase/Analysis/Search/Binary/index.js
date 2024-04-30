$(function() {

    let consoleNotebook = new ConsoleNotebook(['Head','Midpoint','Tail']);

     //Algorithm logging
     function Algorithm(arr,x){
        let result = binarySearch(arr, x);

        consoleNotebook.insertSteps("steps-algorithm",logging);
        

    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),0);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),30);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),60);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),100);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(-1, 10, 20, 30, 40, 50, 60),-1);

});