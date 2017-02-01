// Highly divisible triangular number

function main(divisors) {
  var found = false;
  start = 1;
  while (!found) {
    // n(n+1) / 2
    var triangular = start * (start + 1) / 2;
    var root = Math.ceil(Math.sqrt(triangular));
    var counter = 0;
    for (var i = 1; i <= root; i++) {
      if (triangular % i === 0) {
        var otherDivisor = triangular / i;
        if (otherDivisor != i && otherDivisor > i) {
          counter += 2;
        }
      }
    }
    if (counter >= divisors) {
      found = true;
    } else {
      start++;
    }
  }
  return start * (start + 1) / 2;
}
