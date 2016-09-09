var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var count = -1;

  function counter() {
    count += 1;
    return list[count];

  }
  return counter;
})();


console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6


// var id = (function () {
//   var count = -1;

//   return function () {
//     count += 1;
//     return count;
//   }
// })();