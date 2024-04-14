$(function() {
    

    let arr = new Array(0, 10, 20, 30, 40, 50, 60);
    let x = 40;
    let result = binarySearch(arr, x);

    let writePage = `
    <span class='title' >====================== Binary Search ======================</span> <br>
    <span class='title' >====================== Binary Search ======================</span> <br>
    `

    

    for(let i = 0; i < arr.length; i++){
        writePage = writePage + `<span class='loggingValue'> [ ${i} ] = ${arr[i]} </span><br>`;
    }

    writePage = writePage +`<span class='loggingValue'> Index of the 40 target value: ${result} </span><br>`;
    writePage = writePage +`<span class='loggingValue'> Application Title: ${logging[0]} </span><br>`;

    console.log(`### RAW DATA ###`);
    logging.forEach((element) => {
        writePage = writePage + "<span class='loggingValue'>" + JSON.stringify (element) + "</span><br>";
    });

    $("#logging").html(writePage);

});