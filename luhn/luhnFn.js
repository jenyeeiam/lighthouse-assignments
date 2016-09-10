function check(acctNum) {
  var doubledDigits = [];
  var finalArr = [];
  var singleDigits = [];
  var result;

  //ignore the last digit for now
  for (var i = acctNum.length - 2; i >= 0; i -= 2) {
    doubledDigits.push(Number(acctNum[i])*2);
    singleDigits.push(Number(acctNum[i-1]));
  }
  //this array will be manipulated
  doubledDigits.map(function(currentVal, index, array){
    if (currentVal > 9) {
      finalArr.push(currentVal - 9);
    } else {
      finalArr.push(currentVal);
    }
  });
  //sum the two arrays after concating
  var sum = finalArr.concat(singleDigits).reduce(function(a,b){
    return a + b;
  }, 0);

  //the check digit is the number appended to the end of the input that gives you a multiple of 10
  // if ((sum * 9) % 10 != 0) {
  //   result = false;
  // } else {
  //   result = true;
  // }
  //is the check digit equal to the last digit of the input?
  return sum*9 % 10 == acctNum[acctNum.length - 1];


}


module.exports = check;

//console.log(check("79927398713"));