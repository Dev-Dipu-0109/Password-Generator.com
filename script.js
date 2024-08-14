const passwordField = document.getElementById('password');
const copyButton = document.getElementById('copy');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const generateButton = document.getElementById('generate');

const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '@#$%&*?!';

lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

generateButton.addEventListener('click', () => {
    const length = parseInt(lengthSlider.value);
    const options = {
        lowercase: includeLowercase.checked,
        uppercase: includeUppercase.checked,
        numbers: includeNumbers.checked,
        symbols: includeSymbols.checked
    };

    const password = generatePassword(length, options);
    passwordField.value = password;
});

copyButton.addEventListener('click', () => {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
});

function generatePassword(length, options) {
    let charPool = '';

    if (options.lowercase) {
        charPool += lowercaseChars;
    }
    if (options.uppercase) {
        charPool += uppercaseChars;
    }
    if (options.numbers) {
        charPool += numberChars;
    }
    if (options.symbols) {
        charPool += symbolChars;
    }

    if (charPool === '') {
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
}
