$(function() {

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

});