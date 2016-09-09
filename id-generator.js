var id = (function () {
  var count = -1;

  return function () {
    count += 1;
    return count;
  }
})();

console.log(id()); // 0
console.log(id()); // 1
console.log(id()); // 2
console.log(id()); // 3

