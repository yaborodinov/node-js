// модуль os позволяет получает получать информацию по Операционной системе в которой мы находимся

const os = require('os')

console.log('Operation system', os.platform());

console.log('Архитектура процессора : ', os.arch());

console.log('Инфа по процессорам : ', os.cpus());

console.log('Свободная память : ', os.freemem());

console.log('Всего памяти : ', os.totalmem());

console.log('Включен : ', os.uptime());  // посмотреть сколько времени включена система

