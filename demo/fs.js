const fs = require('fs')    // модуль позволяет работать с различными файлами (File Syslem)
const path = require('path')  // чтоб работать с путями подключаем можуль path


// fs.mkdir(path.join(__dirname, "test"), (error) => {        // создается папка в текущей директории
//     if (error) {
//         throw error
//     }

//     console.log('The folder was created');
// })


const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello Node.JS', (error) => {        // записывать файл
//     if (error) {
//         throw error
//     }
//     console.log('The file was created');

//     fs.appendFile(filePath, '\nHello again!', error => {
//         if (error) {
//             throw error
//         }
//         console.log('Hello again string was added');
//     })
// })

fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
        throw error
    }

    // const data = Buffer.from(content);

    // console.log('Content : ', data.toString())


    console.log('Content : ', content);
})