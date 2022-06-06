const chalk = require('chalk')

const path = require('path')    // типа некая библиотека path

console.log('file name is', path.basename(__filename));  // метод для названия файла

console.log('directory name is', path.dirname(__filename));   // метод чтоб узнать директорию

console.log(chalk.green('file extention', path.extname(__filename)));   // метод чтоб узнать расширение файла

console.log('returns obj', path.parse(__filename));   // метод, возвращающий объект с ключами и значениями данного
