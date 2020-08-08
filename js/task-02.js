console.log("Задание 2");

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const listElement = item => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;
  return itemRef;
};
const listElements = ingredients.map(item => listElement(item));
//   console.dir(listElements);
const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(...listElements);

console.log("--------------");