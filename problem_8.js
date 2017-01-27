// Largest product in a series
function seriesProduct(string, nums) {
  var len = string.length;
  var current = 0;
  var greatestProduct = 0;
  var lastIndex = len - nums;
  while (current <= lastIndex) {
    var product = 1;
    var flag = true;
    for (var i = current; i < current + nums; i++) {
      // A zero value affects every sequence between current string position and
      // the zero position so we quit sequencing and move the position unaffected by the zero
      if (parseInt(string[i]) === 0) {
        current = i + 1;
        product = 0;
        break;
      } else {
        product *= parseInt(string[i]);
      }
    }
    if (product > greatestProduct) {
      greatestProduct = product;
    }
    if (flag) {
      current++;
    }
  }
  return greatestProduct;
}
