$(function() {

    let format = new HtmlFormat();

    function Algorithm(arr){
        format.title(  `[ ${arr.join()} ]`);

        let results = mergeSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'MERGE_INIT' || element.Action == 'MERGE_SORT_INIT' ){
              format.method(element.message,element.counter);
            }

            if(element.Action == 'STOP_CONDITION' ){
                format.paragraph(element.message);
            }

            if(element.Action == 'RECURSIVE_CALLS' ){
                format.paragraph(element.message);
            }

            if(element.Action == 'BASE_CASE' ){
                format.paragraph(element.message);
            }

            format.newLine();
        });

    };

    logging = new Array();

     Algorithm(new Array(6,5,3,1,8,7,2,4) );


   
    $("#logging").html(format.pageWrite);

});