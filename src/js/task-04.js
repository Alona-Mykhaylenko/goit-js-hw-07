
const value = document.querySelector('#value');
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener('click', decrement);
incrBtn.addEventListener('click', increment);

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать 
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса