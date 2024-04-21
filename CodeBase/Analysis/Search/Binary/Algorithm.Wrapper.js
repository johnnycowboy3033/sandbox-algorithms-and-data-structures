$(function() {

    let format = new HtmlFormat();
    let data = new DataComponent(['Head','Midpoint','Tail'],format);

    function Algorithm(arr,x){
        let result = binarySearch(arr, x);

        format.title(  `Boundary Condition :  ${x}`);

        format.newLine();
    
        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {
            format.subsection( `COUNT = ${element.counter}` );
            //format.paragraph( JSON.stringify (element) );
    
            data.printPointers(arr,[element.header,element.midpoint,element.tail]);
            format.newLine();
        });

        format.variables(['Index of the Target','Target Value'],[x, result] ); 
    };

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),0);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),30);


    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),60);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30, 40, 50, 60),100);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(-1, 10, 20, 30, 40, 50, 60),-1);
   
    $("#logging").html(format.pageWrite);

});