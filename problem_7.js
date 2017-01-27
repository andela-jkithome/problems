//10001st prime

function nPrime(n) {
  var prime = 3;
  var num = 2;
  var current = 5;
  while (num < n) {
    var root = Math.ceil(Math.sqrt(current)),
      isPrime = true;
    for (var i = 3; i <= root; i += 2) {
      if (current % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      prime = current;
      num += 1;
    }
    current += 2;
  }
  return prime;
}
