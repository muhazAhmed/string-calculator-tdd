function add(numbers) {
  if (numbers === "") return 0; // If empty string then returns 0

  // Handle custom delimiters like "//;\n1;2"
  let delimiter = /,|\n/; // Default delimiters are comma and newline
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    let customDelimiter = parts[0].slice(2);
    // Escape special characters for the custom delimiter
    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    delimiter = new RegExp(customDelimiter); // Use the custom delimiter
    numbers = parts[1]; // Extract the actual numbers
  }

  // Convert numbers to array, filter out negative numbers and throw an error
  const numArray = numbers.split(delimiter).map(Number);
  const negativeNumbers = numArray.filter((num) => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }

  // Return the sum of all numbers
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
