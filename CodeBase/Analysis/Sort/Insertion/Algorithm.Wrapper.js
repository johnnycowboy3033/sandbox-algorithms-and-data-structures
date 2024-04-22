$(function() {

    let format = new HtmlFormat();
    let data = new DataComponent(['Current','Last'],format);

    function Algorithm(arr){
        format.title(  `[ ${arr.join()} ]`);

        insertionSort(arr);
        format.newLine();

        format.section('STEP THOUGH THE CODE');

        logging.forEach((element) => {

            if(element.Action == 'ITERATION'){
              format.section(element.Action);
            }else{

                format.paragraph( JSON.stringify (element) );

                let hideElements = undefined;

                if(element.Action == 'HOLE'){
                    format.paragraph(` ${element.Action} [ ${ element.currentIndex } ] = ${element.currentElement}`);
                    hideElements = element.currentIndex;
                }

                if(element.Action == 'MOVE'){
                    format.paragraph(` ${element.Action} Value = ${element.currentElement}`);
                    hideElements = element.lastIndex;
                }

                if(element.Action == 'INSERT'){
                    format.paragraph(` ${element.Action} [ ${ element.lastIndex } ] = ${element.currentElement}`);
                }

                data.printPointers(element.presentArray,[element.currentIndex,element.lastIndex],hideElements);
            }

            format.newLine();
        });
    };

    logging = new Array();

    Algorithm(new Array(6,5,3,1,8,7,2,4) );
   
    $("#logging").html(format.pageWrite);

});