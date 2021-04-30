
const nameInput = document.querySelector('#name-input');
const nameOuput = document.querySelector('#name-output');

const inputFunction = () => {
    if (nameInput.value !== '') {
    nameOuput.textContent = nameInput.value;}
    else {nameOuput.textContent = `незнакомец`};

}


nameInput.addEventListener('input', inputFunction);

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка 'незнакомец'.