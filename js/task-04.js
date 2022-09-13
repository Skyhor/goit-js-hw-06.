const element = document.querySelector('#value');
const minusEl = document.querySelector('button[data-action="decrement"]')
const plusEl = document.querySelector('button[data-action="increment"]')
console.log(minusEl);

let counterValue = 0;

minusEl.addEventListener('click', () => {
	counterValue--
	element.textContent = counterValue
})
plusEl.addEventListener('click', () => {
    counterValue++
    element.textContent = counterValue
})

minusEl.addEventListener("click",handleClickDecrement);
plusEl.addEventListener("click", handleClickIncrement);


 
