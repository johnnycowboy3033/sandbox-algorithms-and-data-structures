function ready(){

    let formatUtil = new FormatUtil();
    let model = new GraphModel([ 5, 9, 4, 6, 10, 12, 3]);


    model.color = "blue";

    $("#clear-screen").click(function(){

        console.log( formatUtil.logTitle('Clear Screen Clicked') );

        if( model.context != null && model.canvas != null){
            model.context.fillStyle = "white";
            model.context.fillRect(0, 0, model.canvas.width, model.canvas.height);
            model.emptyReturns();
        }

    }); 

    $("#horizotal-arrays").click(function(){

        model.startPointX = 100;
        model.startPointY = 100;
    
        model.height = 50;
        model.width = 50;

        console.log( formatUtil.logTitle('Horizotal Array Clicked') );
   
        model.horizontalManyRect();

    });
    
    $("#vertical-arrays").click(function(){

        model.startPointX = 100;
        model.startPointY = 100;
    
        model.height = 50;
        model.width = 50;

        console.log( formatUtil.logTitle('Vertical Array Clicked') );

        model.verticalManyRect();

    });

}
