$(function() {

    let format = new Format();
    function printPointers(type,currentIndex,lastIndex,element){

        format.loggingValue( '[index] = value ' );

        for( let index = 0; index < element.length; index++){

            let label = "";

            if(currentIndex == index || lastIndex== index  ){
                label = label + "<---- ";

                if(currentIndex == index){
                    label = label +" Current";
                }

                if(lastIndex == index){
                    label = label +" Last";
                }

            }

            if(type == "HOLE"){
                if(currentIndex == index){
                    format.loggingValue(`[ ${index} ] =  [ ] ${label}`);
                }else{
                    format.loggingValue(`[ ${index} ] = ${element[index]}  ${label}`);
                }
            }

            if(type == "MOVE"){
                if(lastIndex == index){
                    format.loggingValue(`[ ${index} ] =  [ ] ${label}`);
                }else{
                    format.loggingValue(`[ ${index} ] = ${element[index]}  ${label}`);
                }
            }

            if(type == "INSERT"){

               format.loggingValue(`[ ${index} ] = ${element[index]}  ${label}`);
            
            }

            
        }
    }


    function Algorithm(arr){
        format.title(  `------------ ARRAY : [ ${arr.join()} ] ------------ `);

        insertionSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'ITERATION'){
              format.subSection(element.message);
            }else{
                format.loggingValue( JSON.stringify (element) );
                format.loggingValue(` CURRENT [ ${ element.currentIndex } ] = ${element.currentElement}`);
  
                printPointers(element.Action, element.currentIndex,element.lastIndex,element.presentArray) ;
            }

            format.newLine();
        });
    };

    logging = new Array();

    Algorithm(new Array(6,5,3,1,8,7,2,4) );





    $("#logging").html(format.pageWrite);

});
