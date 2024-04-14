function swap(_baseArr,_baseIndex,_offsetIndex){
    var temp;

     temp = _baseArr[_baseIndex];
     _baseArr[_baseIndex] = _baseArr[_offsetIndex];
     _baseArr[_offsetIndex] = temp;

      return _baseArr;

}

function bubbleSort(arr){
    var swapped;

    for(var mainIndex = 0; mainIndex < arr.length - 1; mainIndex++){
    
            console.log(`_____________________________________`);

            for(var offset = 1 + mainIndex; offset < arr.length; offset++){
                
        
                if (arr[offset] < arr[mainIndex]) {
                    arr = swap(arr, mainIndex, offset);
                    swapped = true;
                    console.log(`Action: SWAP`);
                }else{
                    console.log(`Action: NO SWAP`);
                }

                console.log(`Main Index ${ mainIndex } Offset ${ offset } Array ${ arr.join() }`);

            }
         
    }

}
    
 

 
// Driver program
/*
console.log(`======================================`);
var arr = [ 4, 3, 2, 1, 0 ];
console.log(`Initial Array: ${ arr.join() } `);

bubbleSort(arr);

console.log(`======================================`);
console.log( ` Sorted Array : ${ arr.join() } ` );


console.log(`======================================`);
var arr = [ 0, 1, 4, 3, 2  ];
console.log(`Initial Array: ${ arr.join() } `);

bubbleSort(arr);

console.log(`======================================`);
console.log( ` Sorted Array : ${ arr.join() } ` );
*/

