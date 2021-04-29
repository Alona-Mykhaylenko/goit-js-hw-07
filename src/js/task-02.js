const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 const ulRef = document.querySelector('#ingredients');

 const ingredientList = ingredients.map(ingredient => {
    const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    return liItem});

  ulRef.append(...ingredientList);
