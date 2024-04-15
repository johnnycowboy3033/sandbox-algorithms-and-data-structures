let logging;

function  linearSearch(arr, target) {

    for (let i in arr) {

      logging.push({i:i}) 

      if (arr[i] === target){
        return +i;
      } 
        
    }
    return -1;
};