$(function() {

    let consoleNotebook = new ConsoleNotebook(['Pointer']);


    function Algorithm(arr,x){
        let result = linearSearch(arr, x);

        consoleNotebook.insertSteps("steps-algorithm",logging);
        

    };
    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),0);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),20);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),30);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),40);

});