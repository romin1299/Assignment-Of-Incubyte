const add = (numberAsString) => {
  if (!numberAsString) return 0;

  let seperators = [",", "\n"];

  let allCommaSeperatorString = numberAsString;

  if (allCommaSeperatorString.startsWith("//")) {
    const newlineIndex = allCommaSeperatorString.indexOf("\n");
    const customDelimiter = allCommaSeperatorString.slice(2, newlineIndex);
    seperators = [customDelimiter];
    allCommaSeperatorString = allCommaSeperatorString.slice(newlineIndex + 1);
  }

  seperators.forEach((sep) => {
    allCommaSeperatorString = allCommaSeperatorString.replaceAll(sep, ",");
  });

  const splitWithCommaSeprator = allCommaSeperatorString
    ?.trim()
    ?.split(",")
    .map((n) => Number(n));

  const negativeNumbers = splitWithCommaSeprator?.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  const summationOfString = splitWithCommaSeprator?.reduce(
    (acc, n) => acc + n,
    0
  );

  return Number(summationOfString);
};

// let result = add("0,1,2,-3,4,-5");

// console.log(result);

module.exports = { add };
