var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var redBoldUnderline = chalk.red.bold.underline('Hello', 'world');

console.log(redBoldUnderline);

var blkBG = chalk.bgBlack.white("Hello");
console.log(blkBG);