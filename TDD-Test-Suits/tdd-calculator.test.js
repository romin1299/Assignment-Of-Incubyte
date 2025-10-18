const { add } = require("../TDD-Kata-Page/tdd-calculator");

describe("String calculator of TDD", () => {
  test("empty string return 0", () => {
    expect(add("")).toBe(0);
  });
});
