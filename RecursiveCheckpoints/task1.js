const yearInput = document.getElementById('year');
const checkButton = document.getElementById('check');
const resultParagraph = document.getElementById('result');

checkButton.addEventListener('click', () => {
    const year = parseInt(yearInput.value);
    if (isLeapYear(year)) {
        resultParagraph.textContent = `${year} is a leap year.`;
    } else {
        resultParagraph.textContent = `${year} is not a leap year.`;
    }
});

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}