const memo = {};

const getIndex = (array, target) => {
  if (!Array.isArray(array) || array.length < 2) {
    throw new Error("Input must be an array with at least two elements");
  }
  if (typeof target !== "number") {
    throw new Error("Target must be a number");
  }

  const key = JSON.stringify(array) + "-" + target;
  if (key in memo) {
    return memo[key];
  }

  const mapDic = new Map();
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const diff = target - current;
    if (mapDic.has(diff)) {
      const result = [mapDic.get(diff), i];
      memo[key] = result;
      return result;
    }
    mapDic.set(current, i);
  }

  throw new Error("No two sum solution found");
};

console.log(getIndex([2, 7, 11, 15], 9)); // [0, 1]
