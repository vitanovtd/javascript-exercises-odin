const reverseString = function (word) {
  let wordArray = word.split("");
  let reversedArray = wordArray.reverse().join("");

  console.log(reversedArray);
  return reversedArray;
};

// Do not edit below this line
module.exports = reverseString;
