function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let startWidth = 30; // Начальная ширина объекта
let startHight = 30; // Начальная высота объекта
let amount = 0; // Начальное количество объектов

const button = document.querySelectorAll('button'); // Формирование массива кнопок
const number = document.querySelector('input');     // Формирование поля ввода
const boxes = document.querySelector('#boxes');     // Формирование начального бокса

// Определение введённого числа количества элементов
number.addEventListener("input", (event) => {
  amount = event.currentTarget.value
});

// Логика работы кнопок
const handleClick = (event) => {
  if (event.target.outerText === 'Create') { // Если нажата кнопка "Create"
    // boxes.insertAdjacentHTML("beforeend", "<div></div>");
      setBoxes(amount); // Вызов функции создания боксов
    } else if (event.target.outerText === 'Destroy') {  // Иначе (нажата кнопка "Destroy")
      deleteBoxes();    // Вызов функции удаления боксов  
    };
};

// Прослушивание кликов кнопок
button.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

// Функция создания боксов
const setBoxes = function createBoxes(count) {
  for (let i = 0; i < count; i += 1) {
    boxes.insertAdjacentHTML("beforeend", `<div width=${startWidth} hight=${startHight} style=background-color:${getRandomHexColor()}></div>`);
    startWidth += 10;
    startHight += 10;
  }
};
      
// Функция удаления боксов
const deleteBoxes = function destroyBoxes() {
  const count = boxes.children.length; // Определяет количество дочерних <div>
  for (let k = 0; k < count; k += 1) {
    boxes.firstChild.remove(); // Удаляет первый дочерний элемент
  }
          startWidth = 30;
          startHight = 30;
};