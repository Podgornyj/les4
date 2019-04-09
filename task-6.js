function reduceRight(arr, cb, acc){
    if (!Array.isArray(arr)) {
        throw new Error('parameter type is not a Array');
    }else if (typeof cb !== 'function') {
        throw new Error('parameter type is not a Function');
    }else if(typeof acc !== 'number' && typeof acc !== 'string') {
        throw new Error('parameter type is not a Function');
    }

    let tmpAcc = acc;
    for(let i = arr.length-1; i >= 0; i--){
        if(typeof tmpAcc == "undefined"){
            tmpAcc = arr[i];
            continue;
        }
        tmpAcc = cb(tmpAcc, arr[i], i, arr);
    }
    return tmpAcc;

}
