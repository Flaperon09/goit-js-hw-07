const textInput = document.querySelector("#font-size-control"); // Ищем поле ввода
const output = document.querySelector("#text");   // Ищем <span>

// Слушатель и обработчик событий
textInput.addEventListener("input", (event) => {
    // Добавляем в <span> style="font-size", значение вычисляется в правой стороне
    output.style.fontSize = `${event.currentTarget.value}px`;
});