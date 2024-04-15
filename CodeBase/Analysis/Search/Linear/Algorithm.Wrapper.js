$(function() {

    let format = new Format();

    function printPointers(pointer,element){
    
        format.loggingValue( '[index] = value ' );
        
        for( let index = 0; index < element.length; index++){
            
            let label = "";
            
            if(pointer == index){
                label = label + "<---- ";
                
            }

            format.loggingValue(`[ ${index} ] = ${element[index]}  ${label}`);
        }
        
    };

    function Algorithm(arr,x){
        let result = linearSearch(arr, x);

        format.title(  `------------ Boundary Condition :  ${x}  ------------ `);

        format.newLine();
    
        format.section('STEP THOUGH THE CODE');
    
        logging.forEach((element) => {
            format.loggingValue( JSON.stringify (element) );
    
            printPointers(element.i,arr) ;
            format.newLine();
        });

        format.subSection (`Index of the ${x} target value: ${result} `); 
    }
    logging = new Array();
    Algorithm(new Array(0, 10, 20, 30),0);

    logging = new Array();
    Algorithm(new Array(0, 10, 20, 30),20);

    logging = new Array();
    Algorithm(new Array(0, 10, 20, 30),30);

    logging = new Array();
    Algorithm(new Array(0, 10, 20, 30),40);

    
   
    $("#logging").html(format.pageWrite);

});