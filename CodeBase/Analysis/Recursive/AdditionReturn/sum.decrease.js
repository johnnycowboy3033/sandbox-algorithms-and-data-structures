let logging;
let counter;

function sumDecrease(x)
{
    
    logging.push({Action:"ENTER_POINT", Counter:counter++, FunctionName:"sumDecrease" });

    if(x == 2){
        logging.push({Action:"MESSAGE", Counter:counter++, message:`BASE CONDITION : return ( ${x} )`});
        return x;
    }

    logging.push({Action:"MESSAGE", Counter:counter++, message:`sumDecrease( ${x-1} ) + ${x}`});
    logging.push({  Action:"DIVIDER" });

    return sumDecrease(x - 1) + x;
}
