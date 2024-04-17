$(function() {

    let format = new Format();

    function printPointers(offset,offsetPlusOne,element){

        format.loggingValue( '[index] = value ' );

        for( let index = 0; index < element.length; index++){

            let label = "";

            if(offsetPlusOne == index || offset== index  ){
                label = label + "<---- ";

                if(offset == index){
                    label = label +" Offset";
                }

                if(offsetPlusOne == index){
                    label = label +" Offset Plus One";
                }



            }

            format.loggingValue(`[ ${index} ] = ${element[index]}  ${label}`);
        }

    };

    function Algorithm(arr){
        format.title(  `------------ ARRAY : [ ${arr.join()} ] ------------ `);

        bubbleSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'ITERATION'){
              format.subSection(element.message);
            }
            if(element.Action == 'CHECK_SWAPPING'){
              format.loggingValue( JSON.stringify (element) );
              printPointers(element.offset, element.offsetPlusOne, element.presentArray) ;
            }

            format.newLine();
        });
    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(5, 3, 4, 6, 2, 1, 7) );





    $("#logging").html(format.pageWrite);

});
