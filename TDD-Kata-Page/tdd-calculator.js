const add = (numberAsString) => {
  if (!numberAsString) return 0;

  const splitWithCommaSeprator = numberAsString?.split(",");
  const summationOfString = splitWithCommaSeprator?.reduce(
    (acc, n) => Number(acc) + Number(n),
    0
  );
  return Number(summationOfString);
};

module.exports = { add };
