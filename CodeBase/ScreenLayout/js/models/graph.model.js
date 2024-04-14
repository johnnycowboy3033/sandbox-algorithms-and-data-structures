class GraphModel extends CanvasModel{

    _formatUtil = new FormatUtil();

    _elements;

    _startPointX;
    _startPointY;
    _width;
    _height;
    _color;

   //Tempory Storages
    _x;
    _y;

    _returnsList;

    constructor(element){
        super();
        this._elements = element;
        this._returnsList = new Array();
    }

    get elements(){return this._elements;}
    set elements(element){this._elements = element;}

    get startPointX(){return this._startPointX;}
    set startPointX(startPointX){this._startPointX = startPointX;}

    get startPointY(){return this._startPointY;}
    set startPointY(startPointY){this._startPointY = startPointY;}

    get width(){return this._width;}
    set width(width){this._width = width;}

    get height(){return this._height;}
    set height(height){this._height = height;}

    get color(){return this._color;}
    set color(color){this._color = color;}

    get returns(){return this._returns;}
    set returns(returns){this._returns = returns;} 

    emptyReturns(){
        while (this._returnsList.length > 0) {
            this._returnsList.pop();
          }
          
    }

    verticalManyRect(){
        this.manyRect( offset =>{
            this._x += this._width;
        });
    }

    horizontalManyRect(){
        this.manyRect( offset =>{
            this._y += this._height;
        });
    }

    manyRect(offset){

        this._x = this._startPointX;
        this._y = this._startPointY;

        for (let i = 0; i < this._elements.length; i++) {

            this.context.beginPath();
            this.context.lineWidth = 2;
            this.context.strokeStyle = this._color;

            console.log( this._formatUtil.logEnter( `[ ${i} ] = ${this._elements[i]} Start Point X : ${this._x} Start Point Y : ${this._y} ` ) );
                     
            this._returnsList.push({ value: this._elements[i], x: this._x, y: this._y} );

            //Drawing the rectangle for the cell which contains the element contains index of the array and the element value
            this.context.rect(this._x, this._y, this._width, this._height);

            this.context.stroke();

            offset();
        }
        
    }

}
