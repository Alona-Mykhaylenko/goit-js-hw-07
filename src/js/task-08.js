const refs = {
  inp: document.querySelector("input"),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

refs.btnRender.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

let collection = [];

function createBoxes() {
  const amount = Number(refs.inp.value);

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");

    element.style.width = `${30 + i * 10}px`;
    element.style.height = `${30 + i * 10}px`;

    element.style.backgroundColor = `rgb(${Math.random() * (255 - 1) + 1}, ${
      Math.random() * (255 - 1) + 1
    }, ${Math.random() * (255 - 1) + 1})`;

    collection.push(element);
  }
  refs.boxes.append(...collection);
}

function destroyBoxes() {
  //   refs.boxes.innerHTML = "";
  const amount = +refs.inp.value;

  for (let i = 0; i < amount; i += 1) {
    refs.boxes.removeChild(refs.boxes.children[0]);
  }
}
