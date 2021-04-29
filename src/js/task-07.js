

const slider = document.querySelector('input[type="range"]');
const textRef = document.querySelector('#text');

slider.setAttribute('value', '20');
slider.setAttribute('min', '8');
slider.setAttribute('max', '40');
slider.setAttribute('step', '2');

const fontSizeChanger = (event) => {
    
    textRef.style.fontSize = `${event.target.value}px`;

}

slider.addEventListener('input', fontSizeChanger);



// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size. В результате 
// при перетаскивании ползунка будет меняться размер текста.
