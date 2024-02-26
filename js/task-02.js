const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayTags = [];

const listEl = document.querySelector('#ingredients'); // Находим тег, внутрь которого будем вставлять список

ingredients.forEach(element => {
  const heading = document.createElement('li'); // Создаём теги <li></li>
  heading.textContent = element;                // Добавляем название из массива
  heading.classList.add('item');                // Добавляем class="item"

  arrayTags.push(heading); // Создание массива готовых тегов
});

listEl.append(...arrayTags); // Вставляем массив тегов arrayTags в выбранный тег listEl




