$(function() {

    let format = new HtmlFormat();
    let data = new DataComponent(['Current','Last'],format);

    function Algorithm(arr){
        format.title(  `[ ${arr.join()} ]`);

        insertionSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'ITERATION'){
              format.subsection(element.message);
            }else{
                format.paragraph( JSON.stringify (element) );
                format.paragraph(` CURRENT [ ${ element.currentIndex } ] = ${element.currentElement}`);
  
                //printPointers(element.Action, element.currentIndex,element.lastIndex,element.presentArray) ;

                data.printPointers(element.presentArray,[element.currentIndex,element.lastIndex]);
            }

            format.newLine();
        });
    };

    logging = new Array();

    Algorithm(new Array(6,5,3,1,8,7,2,4) );
   
    $("#logging").html(format.pageWrite);

});