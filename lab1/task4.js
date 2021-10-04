module.exports.FindMostRepetative = function (collection) {
    let obj = {};
    let sum = 0;
    let result;
    collection.sort().forEach(item => {
      return obj[item] = ( obj[item] || 0 ) + 1;
    });
    for (let key in obj) {
       if ( obj[key] > sum ) {
         sum = obj[key];
         result = key;
        }
    }
    return result;
  }
  