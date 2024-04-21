$(function() {

    let format = new HtmlFormat();
    let data = new DataComponent(['Pointer'],format);


    function Algorithm(arr,x){
        let result = linearSearch(arr, x);

        format.title(  `Boundary Condition ${x}`);

        format.newLine();
    
        format.section('STEP THOUGH THE CODE');
    
        logging.forEach((element) => {
            format.paragraph( JSON.stringify (element) );
    
            data.printPointers(arr,[element.index]);
            format.newLine();
        });

        format.variables(['Index of the Target','Target Value'],[x, result] ); 
    
    }
    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),0);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),20);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),30);

    logging = new Array();
    counter = 0;
    Algorithm(new Array(0, 10, 20, 30),40);

   
    $("#logging").html(format.pageWrite);

});