// const http = require ('http')

// //2 creating server 
// if (Req.URL == '/'){
// const server = http.createServer((req , res) => {
//     res.setHeader('content-Type', 'text/html');
//   person={
//     name: 'Dhivyesh',
//     age: '15',


//   }
//   jsonPerson = JSON.stringify(person);
//   res.statusCode = 200 ; 
//   res.write(jsonPerson)

// });


// server.listen(3005, localHost );

// "dependencies": {
//     "express": "^4.17.1"
//   },

const express = require('express');
const app = express();

// Middleware to retrieve today's date and current time
const getDateAndTime = (req, res, next) => {
  req.currentDate = new Date().toLocaleDateString();
  req.currentTime = new Date().toLocaleTimeString();
  next();
};

// Middleware to be called before every route
app.use(getDateAndTime);

// Route 1
app.get('/', (req, res) => {
  res.send(`Today's date is ${req.currentDate} and the current time is ${req.currentTime}.`);
});

// Middleware to be called before the 2nd route
app.use(getDateAndTime);

// Route 2
app.get('/second', (req, res) => {
  res.send(`Today's date is ${req.currentDate} and the current time is ${req.currentTime}.`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});