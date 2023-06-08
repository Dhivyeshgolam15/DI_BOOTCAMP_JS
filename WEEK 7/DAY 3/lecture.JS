//
// let fs = require('fs');
// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data);
// });

// console.log("-----Restaurant Menu---------", '\n',);


// let fs = require('fs');
// //new content
// let newContent = "House Salad"

// //writeFile method
// fs.writeFile('menu.txt', newContent, function (err) {
//     if (err) {
//         console.error(err)
//         return
//     }
// });

// //readFile method
// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log(data)
// });

// console.log("-----Restaurant Menu---------", '\n',);

// let fs = require('fs');
// let newContent = "Caesar Salad"

// fs.appendFile('menu.txt', newContent + '\n', function (err) {
//     if (err) {
//         console.error(err)
//         return
//     }
// });

// fs.readFile('menu.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.error(err)
//         return
//     }

//     console.log(data)

// });

// console.log("-----Restaurant Menu---------", '\n',);
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))



const express = require('express')
let fs = require('fs');

const app = express("")


app.get('/', (req, res) => {
    fs.readFile('menu.txt', 'utf-8', function(err,data) {
        if(err){
            console.log(err)
        }
        else {
            console.log()
            res.send(data)
        }
    })
    
})



app.get('/products/', (req, res) => {
    fs.readFile('menu.txt', 'utf-8', function(err,data) {
        if(err){
            console.log(err)
        }
        else {
            console.log()
            data += '<form action="/" method="post"><input type="submit"/></form>'
            res.send(data)
        }
    })})
app.post('/', (req, res) => {
    fs.appendFile('menu.txt',data='\nwe have recived a new request', function(err) {
        if(err){
            console.log(err)
        }
    })
    res.send('we have received your data')
    
})

app.listen(5001)

