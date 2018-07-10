function makeAnagram(a, b) {
  const aObj = {};
  const bObj = {};
  const storage = {};

  //created character count for a string
  for (let i = 0; i < a.length; i++) {
    aObj[a[i]] ? aObj[a[i]]++ : aObj[a[i]] = 1;
  }

  //create character count for b string
  for (let i = 0; i < b.length; i++) {
    bObj[b[i]] ? bObj[b[i]]++ : bObj[b[i]] = 1;
  }  

  const aKeys = Object.keys(aObj)
  const bKeys = Object.keys(bObj)

  //remove the characters that can from an anagram by...
  //checking which has more unique characters
  if (bKeys.length > aKeys.length || bKeys.length === aKeys.length) {
    for (let i = 0; i < bKeys.length; i++) {
      //if letter is in both a and b objects
      if (aKeys.includes(bKeys[i])) {
        //compare the number of times the letter appear in the string
        if (bObj[bKeys[i]] === aObj[bKeys[i]]) {
          //if same, remove the count from both
          bObj[bKeys[i]] = 0;
          aObj[bKeys[i]] = 0;
        } else {
          //if diff, find the abs value of the difference
          bObj[bKeys[i]] = Math.abs(bObj[bKeys[i]] - aObj[bKeys[i]]);
          aObj[bKeys[i]] = 0;          
        }
      }
    }
  }

  //checking which has more unique characters
  if (bKeys.length < aKeys.length) {
    for (let i = 0; i < aKeys.length; i++) {
      if (bKeys.includes(aKeys[i])) {
        if (bObj[aKeys[i]] === aObj[aKeys[i]]) {
          bObj[aKeys[i]] = 0;
          aObj[aKeys[i]] = 0;
        } else {
          aObj[aKeys[i]] = Math.abs(aObj[aKeys[i]] - bObj[aKeys[i]]);
          bObj[aKeys[i]] = 0;          
        }
      }
    }
  }

  //return the number of characters that do not form an anagram
  return Object.values(aObj).reduce((a,b) => a + b) + Object.values(bObj).reduce((a,b) => a + b);
}

console.log(makeAnagram('cde', 'abc')); //4 (the number of characters that should be deleted)
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')); //30

