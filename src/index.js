
exports.min = function min (array) {
  if (array !== undefined && array.length > 0) {
    var minElem = Math.min.apply(null, array);
    return minElem;
  } else {
    return 0;
  }
  
}

exports.max = function max (array) {
  if (array !== undefined && (array.length > 0) ) {
    var maxElem = Math.max.apply(null, array);
    return maxElem;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array !== undefined && (array.length > 0) ) {
    return array.reduce((a, b) => (a + b)) / array.length;
  } else {
    return 0;
  }
}
