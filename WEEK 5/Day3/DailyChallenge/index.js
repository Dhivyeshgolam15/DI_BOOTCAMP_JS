function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const uppercasedWords = words.map(word => {
        if (typeof word === 'string') {
          return word.toUpperCase();
        } else {
          reject('Array contains non-string elements');
        }
      });
      resolve(uppercasedWords);
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        resolve(words.sort());
      } else {
        reject('Array length is not greater than 4');
      }
    });
  }
  
  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error)); // Output: Array contains non-string elements
  
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error)); // Output: Array length is not greater than 4
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) // Output: ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));