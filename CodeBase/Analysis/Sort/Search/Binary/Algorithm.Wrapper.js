$(function() {
    

    let arr = new Array(0, 10, 20, 30, 40, 50, 60);
    let x = 40;
    let result = binarySearch(arr, x);

    for(let i = 0; i < arr.length; i++){
        console.log(`[ ${i} ] = ${arr[i]}`);
    }

    console.log(`Index of the 40 target value: ${result}`);
    console.log(`Application Title: ${logging[0]}`);

    console.log(`### RAW DATA ###`);
    logging.forEach((element) => {
        console.log( JSON.stringify (element) );
    });

});