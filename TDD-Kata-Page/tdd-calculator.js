const add = (numberAsString) => {
  if (!numberAsString) return 0;

  let seperator = [",", "\n"];

  let allCommaSeperatorString = numberAsString;
  seperator.forEach((sep) => {
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
let x = add("1\n2,3,4\n5,6\n7");
console.log("***", x);
module.exports = { add };
