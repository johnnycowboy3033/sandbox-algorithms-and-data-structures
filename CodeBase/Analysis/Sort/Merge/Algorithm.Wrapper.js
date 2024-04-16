$(function() {

    let format = new Format();



    function Algorithm(arr){
        format.title(  `------------ ARRAY : [ ${arr.join()} ] ------------ `);

        let results = mergeSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

    };

    logging = new Array();

     Algorithm(new Array(6,5,3,1,8,7,2,4) );


    $("#logging").html(format.pageWrite);

});
