let sentence = 'The movie is not that bad, I like it';
//  sentence = 'This dinner is not that bad ! You cook well';
//  sentence = 'This movie is not so bad !';
//  sentence = 'This dinner is bad !';

let wordNot = sentence.indexOf('not');
// console.log(wordNot);
let wordBad = sentence.indexOf('bad');
// console.log(wordBad);

if (wordBad > wordNot && wordBad != -1 && wordNot != -1) {
    let r = sentence.substring(wordNot,wordBad+3);
    // console.log(r);
    sentence = sentence.replace(r,'good');
    console.log(sentence);
} else if (wordBad < wordNot || wordBad == -1 || wordNot == -1) {
    console.log(sentence);
}