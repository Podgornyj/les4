function every(arr, cb){
    if (!Array.isArray(arr)) {
        throw new Error('parameter type is not a Array');
    }else if (typeof cb !== 'function') {
        throw new Error('parameter type is not a Function');
    }

    let rez = true;
    for(let i = 0; i < arr.length; i++){
        if(!cb(arr[i], i, arr)){
            rez = false;
            break;
        }
    }
    return rez;
}
