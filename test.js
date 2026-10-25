function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const firstChar = email.slice(0, 1);

  const maskCount = atIndex - 2;

  const maskedPart = "*".repeat(maskCount);

  const lastPart = email.slice(atIndex-1);

  return firstChar + maskedPart + lastPart;
}
const email = "apple.pie@example.com";
console.log(maskEmail(email));