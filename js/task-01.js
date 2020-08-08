console.log("Задание 1");

const categoriesRef = document.querySelectorAll('#categories>li.item');
// console.dir(categoriesRef);
console.log(`В списке ${categoriesRef.length} категории.`);
const categoryNameAndQuality = categoriesRef.forEach(elem=>{
console.log(
    `Категория: ${elem.querySelector('h2').textContent}
Количество элементов: ${elem.querySelectorAll('li').length}\n`);
});

console.log("--------------");