// const chalk = require('chalk')   //  с помощью requere мы подключаем пакет, в данном случае chalk
// const text = require('./data')   // называть переменную можно как угодно, не обязательно text


// console.log(chalk.green(text));





// создание web server

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
   

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err){
    //             throw err
    //         }

    //         res.writeHead(200, {
    //             'Content-type' : 'text/html'
    //         })

    //         res.end(data)                // end  завершает ответ с сервера
    
    //     } )
    // }



    const pathName = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    fs.readFile(pathName, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html', (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-type' : 'text/html'
                    })

                    res.end(data)
                }
            }))
        } else {
            res.writeHead(200, {
                'Content-type' : 'text/html'
            })

            res.end(content)
        }
    })
    
})

server.listen(3007, () => {
    console.log('Server has been started');
})