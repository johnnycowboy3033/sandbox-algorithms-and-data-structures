class DataComponent{

    _labels;

    constructor(label){
        this._labels = label;
    }

    get label(){return this._labels;}
    set label(value){this._labels = value;}

}