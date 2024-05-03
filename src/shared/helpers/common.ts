const getRandomInteger = (a: number, b: number) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateRandomIndex = (a: number, b: number) => {
  const indexNumbers: number[] = [];
  return () => {
    let currentIndex = getRandomInteger(a, b);
    if (indexNumbers.length === Math.floor(Math.max(a, b) + 1)) {
      return false;
    }
    while (indexNumbers.includes(currentIndex)) {
      currentIndex = getRandomInteger(a, b);
    }
    indexNumbers.push(currentIndex);
    return currentIndex;
  };
};

const getRandomSubArray = <T>(arr: T[], count?: number) => {
  count = (!count) ? getRandomInteger(1, arr.length - 1) : count;
  const newArray: T[] = [];
  const indexGenerator = generateRandomIndex(0, arr.length - 1);
  for (let i = 0; i < count; i++) {
    const index = indexGenerator();
    if (index !== false) {
      newArray.push(arr[index]);
    }
  }
  return newArray;
};

export {
  getRandomInteger,
  getRandomSubArray
};