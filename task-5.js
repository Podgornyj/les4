function reduce(arr, cb, acc){
    if (!Array.isArray(arr)) {
        throw new Error('parameter type is not a Array');
    }else if (typeof cb !== 'function') {
        throw new Error('parameter type is not a Function');
    }else if(typeof acc !== 'number' && typeof acc !== 'string') {
        throw new Error('parameter type is not a Function');
    }

    let tmpAcc = acc;
    for(let i = 0; i < arr.length; i++){
        if(typeof tmpAcc === void 0){
            tmpAcc = arr[i];
            continue;
        }
        tmpAcc = cb(tmpAcc, arr[i], i, arr);
    }
    return tmpAcc;
}

