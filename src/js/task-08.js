
const refs = {
  inp: document.querySelector('input'),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.btnRender.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);
  


        let collection = '';

        function createBoxes () {
            const amount = refs.inp.value;
            let size = 30;
            // let randomColor = '';
            for (let i = 1; i <= amount; i+=1){
            collection += `<div width="${size}" height="${size}" class="element"></div>`;
            size += 10;

            // function createColor () {
            //     const color1=Math.floor(Math.random() * 255) + 1;
            //     const color2=Math.floor(Math.random() * 255) + 1;
            //     const color3=Math.floor(Math.random() * 255) + 1;
            //     randomColor = `rgb(${color1}, ${color2}, ${color3})`};
            //     };

            
        };
        refs.boxes.innerHTML += collection;
    };
           
        
            function destroyBoxes () {
                const amount = refs.inp.value;
                
                for (let i = 1; i <= amount; i+=1){
                refs.boxes.removeChild(div);
                };

            };
   
    
//     for (let i = 0; i <= amount; i+=1);
//     const element = document.createElement('div');
//     collection.push(element);
//     return collection;
//    };

// function createColor () {
//     randomColor = '';
//     const color1=Math.floor(Math.random() * 255) + 1;
//     const color2=Math.floor(Math.random() * 255) + 1;
//     const color3=Math.floor(Math.random() * 255) + 1;
//     element.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`};
    
    // refs.boxes.append(...collection);



// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр 
// amount - число. Функция создает столько div, сколько указано в 
// amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


// function createBoxes () {
//     const amount = refs.inp.value;
//     let element = 0;
//     element.style.width = '30px';
//     element.style.height = '30px';

//     for (let i = 1; i <= amount; i+=1){
//     const element = document.createElement('div');
//     element.style.width += 10;
//     element.style.height += 10;

//     collection.push(element);}
    
//     };
 
// console.log(collection);