console.log("Задание 7");

/* Ссылки на DOM */
const controlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
/* Колбеки */

const fontSizeChange = (event) => {
    textRef.style.fontSize = event.currentTarget.value + "px";
};
/* Слушатели событий */
controlRef.addEventListener('input', fontSizeChange);

console.log("--------------");