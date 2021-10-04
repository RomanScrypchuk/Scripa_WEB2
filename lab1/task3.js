module.exports.InsertionSort = function (array){
    let key, i;
    for(let k = 1; k < array.length; k++){
      key = array[k];
      i = k - 1;
      while((i >= 0) && (array[i] > key)){
        array[i + 1] = array[i];
        i--;
      }
      array[i + 1] = key;
    }
  }
  