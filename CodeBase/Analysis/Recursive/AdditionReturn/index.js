$(function() {

    let consoleNotebook = new ConsoleNotebook(['Head','Midpoint','Tail']);

     //Algorithm logging
     function Algorithm(x){
        let result = sumDecrease(x);

        logging.push({Action:"RESULTS", Counter:counter++, message:`The results from Sum Decrease :  ${result}`});

        consoleNotebook.insertSteps("steps-algorithm",logging);
        

    };

    logging = new Array();
    counter = 0;
    Algorithm(5);


});