const generatedCodes = new Set<string>();

function generateUniqueCode(): string {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
  let code: string;

  do {
    // Generate a random 5-letter code
    code = Array.from({ length: 5 }, () =>
      letters.charAt(Math.floor(Math.random() * letters.length))
    ).join("");
  } while (generatedCodes.has(code));

  // Store the generated code to ensure uniqueness
  generatedCodes.add(code);

  return code;
}

export { generateUniqueCode };
