/*
https://www.hackerrank.com/challenges/ctci-ransom-note/problem
*/

function checkMagazine(magazine, note) {
  const wordCount = {};

  //stores the number of times a word is used in magazine
  for (let i = 0; i < magazine.length; i++) {
    wordCount[magazine[i]] ? wordCount[magazine[i]]++ : wordCount[magazine[i]] = 1;
  }

  for (var i = 0; i < note.length; i++) {
    //check to see if the word in note is contained in magazine
    if (wordCount[note[i]]) {
      //check to see if the word is still available
      if (wordCount[note[i]] === 0) {
        return console.log('No');
      } else {
        wordCount[note[i]]--
      }
    } else {
      return console.log('No');
    }
  }

  return console.log('Yes');
}

checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']); //Yes
checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']); //No
checkMagazine(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts']); //No


