// part 1/2
// const { largeNumber } = require('./main.js');
// console.log(largeNumber)

// const b = 5;
// const sum = largeNumber + b;
// console.log(sum);




// const http = require('http');
// const { largeNumber }= require('./main.js')
// const host = 'localhost';
// const port = 3000;
// const requestListener =  (req, res) =>{
//     res.setHeader('Content-type', 'text/html')
//     res.writeHead(200);
//     const paragraph = `<p>My Module is:\n${largeNumber}</p>`;
//   const heading = '<h1>Hi there at the frontend</h1>';
//   const html = `${paragraph}\n${heading}`;
//     // res.end("My first server!");
//     res.end(html)
// };
// const server = http.createServer(requestListener);
// server.listen(port,host, () => {
//     console.log("I'm listening");
//     console.log(`Server is running on http://${host}:${port}`);
//   });

// part3
const http = require('http');
const  { getCurrentDateTime } = require('./main.js')
const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) =>{
    res.setHeader('Content-type', 'text/html')
    res.writeHead(200);
    const html = `<p>The date and time are currently: ${getCurrentDateTime}  </p>`;
    res.end(html)
});
server.listen(port,host, () => {
    console.log("I'm listening");
    console.log(`Server is running on http://${host}:${port}`);
  });
