// RAMDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!$%&'()*+,-./:;<=>?@[]^_`{|}~";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeLowercase ? uppercaseChars : "";
    allowedChars += includeLowercase ? numberChars : "";
    allowedChars += includeLowercase ? symbolChars : "";

    console.log(allowedChars);

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }

    if (allowedChars.length === 0) {
        return `(At least 1 set of characters needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;

}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols);

console.log(`Generated Password : ${password}`);    