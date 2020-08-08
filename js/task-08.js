console.log("Задание 8");

/* Ссылки на DOM */
const inputRef = document.querySelector('#controls input[type="number"]');
const renderRef = document.querySelector('#controls button[data-action="render"]');
const destroyRef = document.querySelector('#controls button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
// console.log(inputRef);
/* Дополнительно */
function randomBackgroundColor() {
    const randomGenerator = () => Math.round(Math.random() * 255.0);
    const red = randomGenerator();
    const green = randomGenerator();
    const blue = randomGenerator();
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    // console.log(`Color: ${randomColor}`);
    return randomColor;
}
/* Колбеки */
// function boxQuantity(event) {
//     boxCouner = Number(event.target.value);
// };
function createBoxes(amount) {
    let divSize = 30;
    const arrOfDiv =[];
    for(let i = 0; i < amount; i++){
        const divElement = document.createElement('div');
        divElement.style.backgroundColor = randomBackgroundColor();
        divElement.style.width = `${divSize}px`;
        divElement.style.height = `${divSize}px`;
        arrOfDiv.push(divElement);
        divSize +=10;
    };
    boxesRef.append(...arrOfDiv);
};
function addBoxes() {
    createBoxes(Number(inputRef.value));
  }
function destroyBoxes() {
    boxesRef.innerHTML = "";
};

/* Слушатели событий */
renderRef.addEventListener('click', addBoxes);
destroyRef.addEventListener('click', destroyBoxes);

console.log("--------------");