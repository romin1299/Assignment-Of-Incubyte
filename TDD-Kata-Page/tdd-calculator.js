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
    ?.split(",")
    .map((n) => Number(n));

  const summationOfString = splitWithCommaSeprator?.reduce(
    (acc, n) => acc + n,
    0
  );

  return Number(summationOfString);
};

let result = add("//;\n1;2");

console.log(result);

module.exports = { add };
