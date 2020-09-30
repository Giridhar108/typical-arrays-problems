
exports.min = function min(array) {
  if (!array || !array.length) {
    return 0
  }
  else {
    let newArr = array.sort((a, b) => a - b);
    return newArr[0];
  }
};

exports.max = function max(array) {
  if (!array || !array.length) {
    return 0
  }
  else {
    let newArr = array.sort((a, b) => a - b);
    return newArr[newArr.length - 1];
  }

};

exports.avg = function avg(array) {
  if (!array || !array.length) {
    return 0
  }
  else {

    let arr = array.reduce((prev, item, index) => {
      return prev + item
    },)
    return arr / array.length

  }
};
