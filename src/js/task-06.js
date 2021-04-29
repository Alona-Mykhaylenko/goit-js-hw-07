
const valInput = document.querySelector('#validation-input');

const checkInput = () => {
    if (valInput.value.length === +valInput.dataset.length) {
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');}
    else {valInput.classList.add('invalid');}

}

const checkFocusInput = () => {
    valInput.classList.remove('valid');
    valInput.classList.remove('invalid');
}

valInput.addEventListener('blur', checkInput);
valInput.addEventListener('focus', checkFocusInput);






// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его 
// содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

