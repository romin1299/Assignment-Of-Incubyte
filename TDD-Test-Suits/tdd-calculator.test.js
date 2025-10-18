const { add } = require("../TDD-Kata-Page/tdd-calculator");

describe("String calculator of TDD", () => {
  test("empty string return 0", () => {
    expect(add("")).toBe(0);
  });

  test("one string number to return 1", () => {
    expect(add("1")).toBe(1);
  });

  test("two string number to return 3", () => {
    expect(add("1,2")).toBe(3);
  });

  test("multiple string number to return 10", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("add new lines between numbers (instead of commas)", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("add different delimiters with the beginning of the string will contain a separate line ", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
