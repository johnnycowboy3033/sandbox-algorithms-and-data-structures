$(function() {
    

    let arr = new Array(0, 10, 20, 30, 40, 50, 60);
    let x = 40;
    let result = binarySearch(arr, x);

    let format = new Format();

    format.title( arr.join() + " Target = " + x );

    for(let i = 0; i < arr.length; i++){
        format.loggingValue( `[ ${i} ] = ${arr[i]}`);
    }

    format.newLine();

    format.loggingValue(`Index of the 40 target value: ${result} `); 
    
    format.newLine();
    
    format.section('RAW DATA');

    logging.forEach((element) => {
        format.loggingValue( JSON.stringify (element) );
    });



    $("#logging").html(format.pageWrite);

});