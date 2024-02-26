// Функция генерации случайного hex-кода цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".widget"); // Ищем интерактивный блок 
const numberOfHex = document.querySelector(".color"); // Ищем <span> для отображения номера цвета
changeButton.addEventListener("click", handleChange); // Слушатель события "click" кнопки

// Обработчик клика по кнопке
function handleChange(event) {
  let bgColor = getRandomHexColor(); // Генерация случайного кода цвета и запись его в переменную

  numberOfHex.textContent = bgColor; // Добавить в <span> текст в виде кода цвета
  changeButton.parentNode.style.backgroundColor = bgColor; // Добавление стиля в тег <body>
  // .parentNode - выход на родительский тег <body> через дочерний тег <div>
}
