$(function() {

    let format = new HtmlFormat();
    let util = new ConvertUtil(format);
    let data = new DataComponent(['Pivot','Low','High'],format);

    function Algorithm(arr){
        format.title(  `[ ${arr.join()} ]`);
        data.printPointers(arr ,[]);

        quickSort(arr, 0, arr.length - 1);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'PARTITION_INIT' || element.Action == 'QUICK_SORT_INIT' ){
                format.method(element.message,element.counter);
            }

            if(element.Action == 'MESSAGE'){
                format.paragraph(element.message);
            }

            if(element.Action == 'VARIABLES'){
                util.variables(element);
            }

            if(element.Action == 'ARRAY'){
                data.printPointers(element.presentArray,[element.pi,element.low, element.high]);
            }

            if(element.Action == 'DIVIDER'){
                format.divider();
            }

            


            format.newLine();
        });

        format.section(` SORTED ARRAY : ${arr}`);
    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(10, 7, 8, 9, 1, 5) );


    format.manyNewLine(6);
   
    $("#logging").html(format.pageWrite);

});