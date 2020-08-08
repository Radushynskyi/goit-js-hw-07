console.log("Задание 4");

/* Ссылки на DOM */
const btnDecreaseRef = document.querySelector('#counter button[data-action="decrement"]');
const btnIncreaseRef = document.querySelector('#counter button[data-action="increment"]');
const valueRef = document.querySelector('#value');
// console.log(valueRef.textContent);
/* Колбеки */
let counterValue = 0;
const decrement = () => {
    counterValue -=1;
    valueRef.textContent = counterValue;
};
const increment = () => {
    counterValue +=1;
    valueRef.textContent = counterValue;
};
/* Слушатели событий */
btnDecreaseRef.addEventListener('click', decrement);
btnIncreaseRef.addEventListener('click', increment);
console.log("--------------");