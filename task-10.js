function reverse(arr){
  if (!Array.isArray(arr)) {
    throw new Error('parameter type is not a Array');
  }else if(!arr.length){
    throw new Error('Array is Empty');
  }
  let ret = [];
  for(let i = arr.length-1; i >= 0; i--) {
    ret.push(arr[i]);
  }
  return ret;
}
