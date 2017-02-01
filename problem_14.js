function main() {
  var longest = 0;
  var number;
  for (var i = 1; i < 1000000; i++) {
    var terms = getTerms(i);
    if (terms > longest) {
      longest = terms;
      number = i;
    }
  }
  return number;
}

function getTerms(num) {
  var start = num;
  var next = 0;
  counter = 1;
  while (next !== 1) {
    // n → n/2 (n is even)
    // n → 3n + 1 (n is odd)
    if (start % 2 === 0) {
      next = start / 2;
      start = next;
      counter++;
    } else {
      next = (3 * start) + 1;
      start = next;
      counter++;
    }
  }
  return counter;
}
