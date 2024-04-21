let logging;
let counter;

function  linearSearch(arr, target) {

    for (let i in arr) {

      logging.push({counter:counter,index:i}) 

      if (arr[i] === target){
        return +i;
      } 

      counter++;
        
    }
    return -1;
};
 
