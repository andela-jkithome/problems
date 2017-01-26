// Largest prime factor

function main(num) {
  let highestPrime = 2;
  var start = Math.ceil(Math.sqrt(num));
  for (var i = start; i >= 3; i -= 2) {
    if (num % i === 0) {
      // There are two sets of numbers one above the square root and one below
      // that divide the number equally to produce the other
      let lowDivisor = i;
      let highDivisor = num / i;
      // Check if any of the divisors is a Prime Number and larger than the
      // current value then assign it as new high.
      let lowPrime = isPrime(lowDivisor);
      let highPrime = isPrime(highDivisor);
      if (lowPrime && lowDivisor > highestPrime) {
        highestPrime = lowDivisor;
      }
      if (highPrime && highDivisor > highestPrime) {
        highestPrime = highDivisor;
      }
    }
  }
  if (isPrime(num)) {
    return num;
  } else {
    return highestPrime;
  }
}

function isPrime(num) {
  var root = Math.ceil(Math.sqrt(num));
  let prime = true;
  if (num % 2 === 0 && num !== 2) {
    prime = false;
  } else {
    for (var i = 3; i <= root; i += 2) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
}
