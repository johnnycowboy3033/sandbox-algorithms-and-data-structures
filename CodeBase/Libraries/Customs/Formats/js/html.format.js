class Format{

    _pageWrite;

    constructor(){
        this._pageWrite = "";
    }

    builder(valueBuilder){
        this._pageWrite = this._pageWrite + valueBuilder;
    }

    
    span(classSpan,valueSpan){
        return "<span class='"+classSpan+"' >" + valueSpan +  "</span>";
    }

    header(valueHeader,classSpan,valueSpan){
        this.builder("<"+valueHeader+">"+this.span(classSpan,valueSpan)+"</"+valueHeader+"></br>");
    }


    title(valueTitle){
        this.header("h2","title",valueTitle);
    }

    section(valueSection){
        this.header("h3","section",valueSection);
    }



    newLine(){
        this._pageWrite = this._pageWrite + "<br>";
    }

    get pageWrite(){ return this._pageWrite}
    set pageWrite(value){ this._pageWrite = value}

 
}