// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr, i);   // execute callback
    }
  }
}

function actionWhenFound(arr, index) {
  var newArr = [];
  arr.forEach(function(j) {
    newArr.push(arr.indexOf(j));
  });
  console.log(newArr[index]);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


//Modify the callback function in the previous example so that logs the index of the array where Waldo is found,
//ie. "Found Waldo at index 3!". (You will need to modify actionWhenFound to receive the index.)