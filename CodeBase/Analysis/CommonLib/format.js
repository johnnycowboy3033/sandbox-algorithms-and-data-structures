class Format{

    _pageWrite;

    constructor(){
        this._pageWrite = "";
    }

    title(value){
        this._pageWrite = this._pageWrite + "<h2><span class='title' >" + value +  "</span></h2></br>";
    }

    section(value){
        this._pageWrite = this._pageWrite + "<h3><span class='section' > " + value +  "</span></h3></br>";

    }

    loggingValue(value){
        this._pageWrite = this._pageWrite + "<span class='loggingValue'>" + value + "</span><br>";
    }

    newLine(){
        this._pageWrite = this._pageWrite + "<br>";
    }

    get pageWrite(){ return this._pageWrite}
    set pageWrite(value){ this._pageWrite = value}

}