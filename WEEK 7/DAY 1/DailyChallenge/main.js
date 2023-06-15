// const largeNumber = 356
// module.exports = {largeNumber}


function getCurrentDateTime() {
  const currentDateTime = new Date();
  return currentDateTime.toUTCString();
}

module.exports = { getCurrentDateTime };