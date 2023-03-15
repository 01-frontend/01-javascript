const reverseString = function (s) {
  const result = [];
  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s[i]);
  }
  return result;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
