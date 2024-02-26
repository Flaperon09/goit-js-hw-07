let counterValue = 0; // Начальная установка счётчика

// Формирования массива кнопок
const button = document.querySelectorAll('button');

// Обработчик кликов 
const handleClick = (event) => {
    if (event.target.dataset.action === 'increment') { // Если нажата кнопка +1
        counterValue += 1;                             // Увеличить счётчик на 1
    } else {                                           // Иначе
        counterValue -= 1;                             // Уменьшить счётчик на 1
    };

    const number = document.querySelector("#value"); // Поиск тега отображения счётчика
    number.textContent = counterValue;               // Присвоить тегу счётчика значение
};

// Прослушивание кликов кнопок
button.forEach(btn => {
    btn.addEventListener('click', handleClick);
})