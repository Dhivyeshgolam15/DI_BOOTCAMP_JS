// const largeNumber = require('./main.js');
// const b = 5;

// const sum = largeNumber + b;
// console.log(sum);

//part 2

// const http = require('http');
// const largeNumber = require('./main.js');

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.statusCode = 200;

//   const result = `My Module is ${largeNumber}`;
//   const responseHTML = `
//     <html>
//       <body>
//         <p>${result}</p>
//         <h1>Hi there at the frontend</h1>
//       </body>
//     </html>
//   `;

//   res.end(responseHTML);
// });

// server.listen(3000, () => {
//   console.log("I'm listening");
// });

//part3

const http = require('http');
const getCurrentDateTime = require('./main.js');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;

  const currentDateTime = getCurrentDateTime();
  const responseHTML = `
    <html>
      <body>
        <p>Current Date and Time: ${currentDateTime}</p>
      </body>
    </html>
  `;

  res.end(responseHTML);
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});