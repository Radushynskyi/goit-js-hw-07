console.log("Задание 5");

/* Ссылки на DOM */
const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

/* Колбеки */
const userName = (name) => {
    nameOutputRef.textContent = 
    name.target.value === ""
    ? 'незнакомец' 
    : name.target.value;
};
/* Слушатели событий */
nameInputRef.addEventListener('input', userName);

console.log("--------------");