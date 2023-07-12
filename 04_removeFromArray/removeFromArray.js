const removeFromArray = function (array, ...args) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (!args.includes(array[i])) {
      results.push(array[i]);
    }
  }
  return results;
};

// Do not edit below this line
module.exports = removeFromArray;
