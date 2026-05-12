// 16th JavaScript Exercise: Masking Service.

const email = "apple.pie@example.com";
function maskEmail(email){
  const finalPosition = email.indexOf("@");
  const finalString = email.slice(finalPosition - 1);
  let middleString = email.slice(1, finalPosition - 1);
  middleString = "*".repeat(middleString.length);
  return email[0] + middleString + finalString;
}
console.log(maskEmail(email));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));