
const nInput = document.getElementById('n');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const n = parseInt(nInput.value);
    if (isNaN(n) || n < 0) {
        resultParagraph.textContent = 'Please enter a non-negative integer.';
        return;
    }

    const result = fibonacci(n);
    resultParagraph.textContent = `The ${n}th Fibonacci number is ${result}.`;
});

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
