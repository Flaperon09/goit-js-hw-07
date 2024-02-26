const textInput = document.querySelector("#name-input"); // Ищем поле ввода
const output = document.querySelector("#name-output");   // Ищем место трансляции текста

// Слушатель и обработчик событий
textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") { // Если поле ввода не пустое, то ....
    output.textContent = event.currentTarget.value; // ...выводится содержимое поля.
} else {
    output.textContent = "Anonymous"; // Иначе (если поле пустое) выводится слово Anonymous
  }
});