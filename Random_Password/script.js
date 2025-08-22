const passwordBox = document.getElementById('passwordBox');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const digits = "1234567890";
const symbols = "~!@#$%^&*()_+-?/><|=";

const length = 12; // password length

function createPassword() {
  let password = ""; // reset each time

  // Ensure at least one of each type
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += digits[Math.floor(Math.random() * digits.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  const allChars = upperCase + lowerCase + digits + symbols;

  // Fill the rest of the password
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password so predictable order is avoided
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  // Show in the input
  passwordBox.value = password;
}
