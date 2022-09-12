const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputChange) 
function inputChange(event) {
    outputEl.textContent = inputEl.value === '' ? 'Anonymous' : inputEl.value
}