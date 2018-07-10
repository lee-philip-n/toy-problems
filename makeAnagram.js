function makeAnagram(a, b) {
  const aObj = {};
  const bObj = {};
  const storage = {};

  for (let i = 0; i < a.length; i++) {
    aObj[a[i]] ? aObj[a[i]]++ : aObj[a[i]] = 1;
  }

  for (let i = 0; i < b.length; i++) {
    bObj[b[i]] ? bObj[b[i]]++ : bObj[b[i]] = 1;
  }  

  const aKeys = Object.keys(aObj)
  const bKeys = Object.keys(bObj)

  if (bKeys.length > aKeys.length || bKeys.length === aKeys.length) {
    for (let i = 0; i < bKeys.length; i++) {
      if (aKeys.includes(bKeys[i])) {
        if (bObj[bKeys[i]] === aObj[bKeys[i]]) {
          bObj[bKeys[i]] = 0;
          aObj[bKeys[i]] = 0;
        } else {
          bObj[bKeys[i]] = Math.abs(bObj[bKeys[i]] - aObj[bKeys[i]]);
          aObj[bKeys[i]] = 0;          
        }
      }
    }
  }

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

  return Object.values(aObj).reduce((a,b) => a + b) + Object.values(bObj).reduce((a,b) => a + b);
}

console.log(makeAnagram('cde', 'abc')); //4 (the number of characters deleted)
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')); //30

