function consecutiveSubstrings(string) {
  // type your code here
  const arr = string.split('')
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    if (arr[i+1] !== undefined) {newArr.push(arr[i].concat(arr[i+1]))}
    newArr.push(string)
  }
  const set = [...new Set(newArr)]
  return set
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
