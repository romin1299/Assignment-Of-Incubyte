const add = (numberAsString) => {
  if (!numberAsString) return 0;
  return Number(numberAsString);
};

module.exports = { add };
