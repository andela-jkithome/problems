// Counting Sundays

function main(start, end) {
  var counter = 0;
  for (var i = start; i <= end; i++) {
    for (var j = 0; j <= 11; j++) {
      var day = new Date(i, j, 1).getDay();
      if (day === 0) {
        counter++;
      }
    }
  }
  return counter;
}
