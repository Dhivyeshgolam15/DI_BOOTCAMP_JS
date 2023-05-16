function isAnagram(str1, str2) {
    // Remove any non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
    // Check if the lengths of the cleaned strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Create character frequency maps for both strings
    const charMap1 = {};
    const charMap2 = {};
  
    for (let char of cleanStr1) {
      charMap1[char] = (charMap1[char] || 0) + 1;
    }
  
    for (let char of cleanStr2) {
      charMap2[char] = (charMap2[char] || 0) + 1;
    }
  
    // Compare the character frequency maps
    for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) {
        return false;
      }
    }
  
    return true;
  }

  //examples:-

  console.log(isAnagram("Astronomer", "Moon starer")); // true
console.log(isAnagram("School master", "The classroom")); // true
console.log(isAnagram("The Morse Code", "Here come dots")); // true

console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "hellos")); // false