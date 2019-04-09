function forEach(arr, cb){
    if (!Array.isArray(arr)) {
        throw new Error('parameter type is not a Array');
    }else if (typeof cb !== 'function') {
        throw new Error('parameter type is not a Function');
    }

    for(let i = 0; i < arr.length; i++){
        cb(arr[i], i, arr);
    }
}
