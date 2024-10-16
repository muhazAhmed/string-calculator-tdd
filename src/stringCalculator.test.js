const add = require("./stringCalculator");

// Test 1: Handle an empty string
test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

// Test 2: Handle a single number input
test("returns the number for a single number input", () => {
  expect(add("1")).toBe(1);
  expect(add("5")).toBe(5);
});

// Test 3: Handle two numbers separated by a comma
test("returns the sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
  expect(add("4,5")).toBe(9);
});

// Test 4: Allow new lines between numbers instead of commas
test("allows new lines between numbers instead of commas", () => {
  expect(add("1\n2,3")).toBe(6);
});

// Test 5: Support different delimiters defined in the string
test("supports different delimiters defined in the string", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n2|3|4")).toBe(9);
});

// Test 6: Throw an error when negative numbers are provided
test("throws an error when negative numbers are provided", () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  expect(() => add("2,-3,-4")).toThrow("negative numbers not allowed -3,-4");
});
