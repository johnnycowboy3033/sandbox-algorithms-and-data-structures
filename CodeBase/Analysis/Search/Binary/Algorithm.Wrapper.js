$(function() {

    let format = new Format();

    function printPointers(head,middle,tail,element){
    
        format.loggingValue( '[index] = value ' );
        
        for( let index = 0; index < element.length; index++){
            
            let label = "";
            
            if(head == index || middle == index || tail == index){
                label = label + "<---- ";
                
                if(head == index){
                    label = label +" Head";
                }
                
                if(middle == index){
                    label = label +" Middle";
                }
                
                if(tail == index){
                    label = label +" Tail";
                }
            }
            
            
            
            format.loggingValue(`[ ${index} ] = ${element[index]}  ${label}`);
        }
        
    };

    function Algorithm(arr,x){
        let result = binarySearch(arr, x);

        format.title(  `------------ Boundary Condition :  ${x}  ------------ `);

        format.newLine();
    
        format.section('STEP THOUGH THE CODE');
    
        logging.forEach((element) => {
            format.subSection( `------------ COUNT = ${element.counter} ------------` );
            format.loggingValue( JSON.stringify (element) );
    
            printPointers(element.header,element.midpoint,element.tail,arr) ;
            format.newLine();
        });

        format.subSection (`Index of the ${x} target value: ${result} `); 
    }
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