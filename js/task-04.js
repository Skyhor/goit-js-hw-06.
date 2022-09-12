let counterValue = 0;

const element = document.querySelector('#counter');
const minusEl = document.querySelector('button[data-action="decrement"]')
const plusEl = document.querySelector('button[data-action="increment"]')
console.log(minusEl);

minusEl.addEventListener('click', () => {
	counterValue--
	element.textContent = counterValue
})
plusEl.addEventListener('click', () => {
    counterValue++
    element.textContent = counterValue
})

