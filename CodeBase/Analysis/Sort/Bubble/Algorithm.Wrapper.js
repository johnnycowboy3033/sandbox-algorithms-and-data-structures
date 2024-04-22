$(function() {

    let format = new HtmlFormat();
    let data = new DataComponent(['Offset','PlusOne'],format);

    function Algorithm(arr){
        format.title(  `[ ${arr.join()} ]`);

        bubbleSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'ITERATION'){
              format.subsection(element.Action);
            }
            if(element.Action == 'CHECK_SWAPPING'){
              format.paragraph( JSON.stringify (element) );
              
              data.printPointers(element.presentArray,[element.offset, element.offsetPlusOne]);
            }

            format.newLine();
        });
    };

    logging = new Array();
    Algorithm(new Array(5, 3, 4, 6, 2, 1, 7) );

   
    $("#logging").html(format.pageWrite);

});