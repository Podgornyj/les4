function arrayFill(elem, count){
  if (typeof elem !== 'string' && typeof elem !== 'number' && typeof elem !== 'object' && Array.isArray(elem)) {
    throw new Error('error parameter type');
  }else if (typeof count !== 'number') {
    throw new Error('parameter type is not a Number');
  }

  let arr = [];
  for(let i = 0; i < count; i++){
    arr[i] = elem;
  }
  return arr;
}
