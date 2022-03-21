export const getRandomNumber = (min, max, except) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNumber === except) {
    randomNumber = getRandomNumber(min, max, except);
  }
  return randomNumber;
};
