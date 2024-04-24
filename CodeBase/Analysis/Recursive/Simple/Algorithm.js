function simple(n){

    if(n==2){
        return n;
    }

    return simple(n-1);
};

console.log( `Simple = ${simple(5)} ` );


function plus(n){

    if(n==2){
        return n;
    }

    return plus(n-1) + n;
};

console.log( `Plus = ${plus(5)} `);
 
