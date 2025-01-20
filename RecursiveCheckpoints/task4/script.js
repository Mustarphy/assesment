const stringInput = document.getElementById('string');
const checkButton = document.getElementById('check');
const resultParagraph = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const str = stringInput.value.trim();
    if (str === '') {
        resultParagraph.textContent = 'Please enter a string.';
        return;
    }

    const cleanedStr = cleanString(str);
    const isPalindrome = isPalindromeRecursive(cleanedStr);
    if (isPalindrome) {
        resultParagraph.textContent = `'${str}' is a palindrome.`;
    } else {
        resultParagraph.textContent = `'${str}' is not a palindrome.`;
    }
});

function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function isPalindromeRecursive(str) {
    if (str.length <= 1) {
        return true;
    } else {
        return str[0] === str[str.length - 1] && isPalindromeRecursive(str.slice(1, -1));
    }
}