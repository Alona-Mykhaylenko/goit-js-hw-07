
const liItems = document.querySelectorAll('.item');
// console.log(liItems)
console.log(`В списке ${liItems.length} категории.`);

liItems.forEach(item => console.log(`Категория: ${item.querySelector('h2').textContent}, 
Количество элементов: ${item.lastElementChild.children.length}`));


