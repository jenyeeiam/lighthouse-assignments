var countdownGenerator = function (x) {

  function increment() {

    if (x === 0) {
      x--;
      return "Blast Off";
    } else if (x < 0) {
      x--;
      return "Rockets already gone, bub!"
    }
    x--;
    return "T-minus " + x;
  }

  return increment;
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown());
console.log(countdown());
console.log(countdown());
console.log(countdown());
