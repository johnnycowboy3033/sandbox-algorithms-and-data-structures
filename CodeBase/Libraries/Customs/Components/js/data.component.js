class DataComponent{

    _labels;
    _format;

    constructor(label, format){
        this._labels = label;
        this._format = format;
    }

    get label(){return this._labels;}
    set label(value){this._labels = value;}


    printPointers(elements){

        for( let index = 0; index < elements.length; index++){

            this._format.arrayElement(index, elements[index]);
        }

    };

}