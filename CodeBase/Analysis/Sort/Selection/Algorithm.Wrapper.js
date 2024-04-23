$(function() {

    let format = new HtmlFormat();
    let util = new ConvertUtil(format);
    let data = new DataComponent(['Minimum','Current'],format);


    function Algorithm(arr){
        format.title(  `[ ${arr.join()} ]`);
        data.printPointers(arr ,[]);

        stableSelectionSort(arr, arr.length);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'MESSAGE'){
                format.paragraph(element.message);
            }

            if(element.Action == 'VARIABLES'){
                util.variables(element);
            }

            if(element.Action == 'ARRAY'){
                data.printPointers(element.presentArray,[element.minimum,element.current]);
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
    Algorithm(new Array(2, 8, 5, 3, 9, 4, 1 ) );


    format.manyNewLine(6);
   
    $("#logging").html(format.pageWrite);
});