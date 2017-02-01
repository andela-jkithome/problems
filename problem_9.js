//  Special Pythagorean triplet

function main() {
  var a, b, c;
  for (var i = 1; i < 500; i++) {
    for (var j = i + 1; j < 500; j++) {
      var k = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
      if (k % 1 === 0) {
        if (i + j + k === 1000) {
          a = i;
          b = j;
          c = k;
        }
      }
    }
  }
  return (a * b * c);
}
