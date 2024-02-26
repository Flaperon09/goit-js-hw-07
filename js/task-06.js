const textInput = document.querySelector('#validation-input'); // Ищем поле ввода
let symbols = ''; // Переменная для введённого пароля

// Обработчик событий
textInput.addEventListener("input", (event) => {
    symbols = event.currentTarget.value; // Присвоение введённого пароля переменной
});

textInput.addEventListener("blur", () => {
    const arraySymbols = symbols.split(''); // Создание массива из букв пароля

    if (arraySymbols.length === 0) {
        textInput.classList.remove('valid');
        textInput.classList.remove('invalid');
        textInput.classList.add('validation-input');
    } else if (arraySymbols.length === Number(textInput.getAttribute('data-length'))) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    };
});