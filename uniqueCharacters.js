// Implement an algorithm to determine if a string has all unique characters. What if you
// can not use additional data structures?

const uniqueChar = (string) => {
  let unique = false;
  for (let i = 0; i < string.length; i++) {
    string.indexOf(string[i]) === string.lastIndexOf(string[i]) ? unique = true : unique = false;
  }
  return unique;
}

console.log(uniqueChar('abcdefg')); //true