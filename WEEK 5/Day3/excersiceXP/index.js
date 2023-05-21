 //ex1
 
 function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num < 10) {
        resolve(`${num} is less than 10`);
      } else {
        reject(`${num} is greater than or equal to 10`);
      }
    });
  }
  
  //ex2
  const promise = Promise.resolve()
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('success');
      }, 4000);
    });
  });

promise
  .then(result => console.log(result))
  .catch(error => console.log('Oops something went wrong'));

  //ex3

  const rejectedPromise = Promise.reject("Boo!");
rejectedPromise
  .then(value => console.log(value))
  .catch(error => console.log(error));

  //ex4

  