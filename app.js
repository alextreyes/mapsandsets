new Set([1, 1, 2, 2, 3, 4]);
//wilkl give out a new type of element, a set, that if you search the type, it gives you an object

[...new Set("referee")].join("");
// ref

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//  two sets of arrays, one with the false value, and another one with the true value

const hasDuplicate = (arr) => {
  let a = new Set(arr);
  return a.size === arr.length ? false : true;
};

function vowelCount(str) {
  const vowels = "aeiou";
  const vowelMap = new Map();

  str = str.toLowerCase();

  for (let char of str) {
    if (vowels.includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }

  return vowelMap;
}
