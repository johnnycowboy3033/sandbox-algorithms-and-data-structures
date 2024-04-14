class CanvasModel{

    _nameCanvas;
    _width;
    _height;
  
    _canvas;
    _context;


    constructor() {
        this._canvas = document.getElementById("myCanvas");
        this._canvas.width = $("h1").width() - 10;
        this._canvas.height = 600;
    
        this._context = this._canvas.getContext("2d");
    }


    get nameCanvas() {return this._nameCanvas;}
    set nameCanvas(value) {this._nameCanvas = value;}

    get width() {return this._width;}
    set width(value) {this._width = value;}

    get height() {return this._height;}
    set height(value) {this._height = value;}

    get canvas() {return this._canvas;}
    set canvas(value) {this._canvas = value;}

    get context() {return this._context;}
    set context(value) {this._context = value;}
}
