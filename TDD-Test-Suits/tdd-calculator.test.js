const { add } = require("../TDD-Kata-Page/tdd-calculator");

describe("String calculator of TDD", () => {
  test("empty string return 0", () => {
    expect(add("")).toBe(0);
  });

  test("one string number to return 1", () => {
    expect(add("1")).toBe(1);
  });
});
