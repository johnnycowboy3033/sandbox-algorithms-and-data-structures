$(function() {

    let format = new Format();

    function Algorithm(arr){
        format.title(  `------------ ARRAY : [ ${arr.join()} ] ------------ `);

        quickSort(arr, 0, arr.length - 1);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'PARTITION_INIT' || element.Action == 'QUICK_SORT_INIT' ){
                format.subSection(element.message);
            }

            if(element.Action == 'MESSAGE'){
                format.loggingValue(element.message);
            }

            format.newLine();
        });
    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(10, 7, 8, 9, 1, 5) );





    $("#logging").html(format.pageWrite);

});
