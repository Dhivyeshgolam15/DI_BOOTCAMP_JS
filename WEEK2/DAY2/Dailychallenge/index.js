const sentence  = "Movie is not that bad ";
const WordNotPos = sentence.indexOf("not") ;
console.log (WordNotPos); 13

const WordBadPos = sentence.indexOf("Bad")
console.log(WordBadPos); 22

let substr = sentence.substring(WordNotPos)(WordBadPos +3)

console.log(substr); "not that bad"

const replacedValue = sentence.replace (substr,"good")
console.log(replacedValue); "The Movie is good , i like it"
console.log(replacedValue)
