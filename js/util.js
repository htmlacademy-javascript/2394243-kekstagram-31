// Генерация рандомного числа
const getRandomInteger = (a,b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a,b));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return result;
};

// Генерация рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger};
export {getRandomArrayElement};
