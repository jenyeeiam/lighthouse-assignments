module.exports = {
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
    console.log(hello());
  }

};

function hello() {
  var num = 10;
  return num;
}