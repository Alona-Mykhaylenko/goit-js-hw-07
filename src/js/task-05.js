
const nameInput = document.querySelector('#name-input');

const inputFunction = () => {
    if (nameInput.value !== '') {
    document.querySelector('#name-output').textContent = nameInput.value;}
    else {document.querySelector('#name-output').textContent = `незнакомец`};

}


nameInput.addEventListener('input', inputFunction);

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка 'незнакомец'.