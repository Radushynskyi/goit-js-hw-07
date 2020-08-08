console.log("Задание 6");

/* Ссылки на DOM */
const inputRef = document.querySelector('#validation-input');
// console.log(inputRef);

/* Колбеки */
const isValidInput = (event) => {
    Number(event.target.value.length) === Number(inputRef.getAttribute('data-length'))
    ? (inputRef.classList.add('valid'), inputRef.classList.remove('invalid'))
    : (inputRef.classList.add('invalid'), inputRef.classList.remove('valid'));
};

/* Слушатели событий */
inputRef.addEventListener('blur', isValidInput);


console.log("--------------");